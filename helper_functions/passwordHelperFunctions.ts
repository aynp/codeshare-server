import bcrypt from "bcrypt";

const saltRounds: string = process.env.BCRYPT_SALT_ROUNDS || "10";

export const hashPassword = async (password: string | null) => {
  try {
    if (!password) throw new Error("Password Empty");
    const salt = await bcrypt.genSalt(parseInt(saltRounds));
    return bcrypt.hash(password, salt);
  } catch (err: unknown) {
    return err;
  }
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => password && bcrypt.compare(password, hashedPassword);
