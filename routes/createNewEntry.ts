import { Request, Response } from "express";
import generateLink from "../helper_functions/genrateLink";
import ShareSchema from "../models/ShareSchema";

const createNewEntry = async (req: Request, res: Response) => {
  try {
    let link = await generateLink();
    const { body, lang } = req.body;
    await ShareSchema.create({
      link,
      body,
      lang,
    });
    res.status(201).json({
      success: true,
      message: "entry successfully created",
      link,
    });
  } catch ({ message }: any) {
    res.status(400).json({
      success: false,
      message,
    });
  }
};

export default createNewEntry;
