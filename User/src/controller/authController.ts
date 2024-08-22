import { NextFunction, Request, Response } from "express";
import { signIn } from "../auth/auth.service";

export const signInController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const result = await signIn(email, password);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
