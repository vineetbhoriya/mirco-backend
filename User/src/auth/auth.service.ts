import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/user/userModel";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not set");
}

export const signIn = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select({
    password: 1,
    email: 1,
    name: 1,
  });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return { token, user };
};
