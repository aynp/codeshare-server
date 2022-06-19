import { Request, Response } from "express";
import { hashPassword } from "../helper_functions/passwordHelperFunctions";
import ShareSchema from "../models/ShareSchema";

const updateEntry = async (req: Request, res: Response) => {
  try {
    const { password, body, lang } = req.body;
    const { link } = req.params;

    const entry = await ShareSchema.findOne({ link: { $eq: link } });

    if (password !== undefined) {
      entry.password = await hashPassword(password);
    }

    if (body) entry.body = body;
    if (lang) entry.lang = lang;

    entry.save();

    res.status(204).json({
      success: true,
      message: "entry successfully updated",
    });
  } catch ({ message }: any) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

export default updateEntry;
