import { Request, Response } from "express";
import { comparePassword } from "../helper_functions/helperFunctions";
import ShareSchema from "../models/ShareSchema";

const checkEditAccess = async (req: Request, res: Response) => {
  try {
    const { link, password } = req.params;

    const entry = await ShareSchema.findOne({ link: { $eq: link } });

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
