import { Request, Response } from "express";
import ShareSchema from "../models/ShareSchema";

const getEntry = async (req: Request, res: Response) => {
  try {
    const { link } = req.params;

    const entry = await ShareSchema.findOne({ link: { $eq: link } });

    res.status(200).json({
      success: true,
      entry,
      message: `entry${entry ? "" : " not"} found`,
    });
  } catch ({ message }: unknown) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

export default getEntry;
