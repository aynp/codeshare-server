import bcrypt from "bcrypt";
import Schema from "../models/ShareSchema";

const randomLinkChars =
  "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

const generateLink: any = async () => {
  try {
    let res = "";
    for (let i = 0; i < 6; i++)
      res += randomLinkChars.charAt(Math.random() * randomLinkChars.length);
    if (!!(await Schema.findOne({ link: { $eq: res } }))) return generateLink();
    return res;
  } catch (err: unknown) {
    return err;
  }
};

export default generateLink;
