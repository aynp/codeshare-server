import CodeShare from "../models/CodeShare";

const linkSize: Number = 6;
const randomChars: String =
  "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";

const generateLink: any = async () => {
  try {
    let link = "";
    for (let i = 0; i < linkSize; i++)
      link += randomChars.charAt(Math.random() * randomChars.length);
    if (!!(await CodeShare.findOne({ link: { $eq: link } })))
      return generateLink();
    return link;
  } catch (err: unknown) {
    console.log(err);
    return err;
  }
};

export default generateLink;
