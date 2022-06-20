import Schema from "../models/ShareSchema";

const linkSize: Number = 6;
const randomLinkChars: String =
  "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";

const generateLink: any = async () => {
  try {
    let res = "";
    for (let i = 0; i < linkSize; i++)
      res += randomLinkChars.charAt(Math.random() * randomLinkChars.length);
    if (!!(await Schema.findOne({ link: { $eq: res } }))) return generateLink();
    return res;
  } catch (err: unknown) {
    return err;
  }
};

export default generateLink;
