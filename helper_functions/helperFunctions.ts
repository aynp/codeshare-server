import bcrypt from "bcrypt";

export const hashPassword = async (password: string | null) => {
  try {
    if (!password) return;
    const salt = await bcrypt.genSalt(
      parseInt(<string>process.env.BCRYPT_SALT_ROUNDS)
    );
    return bcrypt.hash(password, salt);
  } catch (err: unknown) {
    return err;
  }
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => password && bcrypt.compare(password, hashedPassword);
