import { Request, Response } from "express";
import { comparePassword } from "../helper_functions/passwordHelperFunctions";
import CodeShare from "../models/CodeShare";

const checkEditAccess = async (req: Request, res: Response) => {
  try {
    const { link, password } = req.params;

    const entry = await CodeShare.findOne({ link: { $eq: link } });

    const hasAccess =
      (await comparePassword(password, entry.password)) || !entry.password;

    res.status(200).json({
      success: true,
      hasAccess,
      message: `edit access${hasAccess ? "" : " not"} granted`,
    });
  } catch ({ message }: any) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

export default checkEditAccess;
