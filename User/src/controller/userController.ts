import { Request, Response, NextFunction } from "express";
import {
  createUserWithAddress,
  deleteUserById,
  getAllUsers,
  getUserById,
} from "../service/user.service";

export const createUserWithAddressController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, address, password } = req.body;

  try {
    const result = await createUserWithAddress(name, email, password, address);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const user = await getUserById(userId);

    if (user) {
      res.status(200).json({
        message: "User retrieved successfully",
        user,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      message: "Users retrieved successfully",
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  try {
    const user = await deleteUserById(userId);

    if (user) {
      res.status(200).json({
        message: "User delete successfully",
        user,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    next(error);
  }
};