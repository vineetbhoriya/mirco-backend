import { Router } from "express";
import {
  createUserWithAddressController,
  deleteUserByIdController,
  getAllUsersController,
  getUserByIdController,
} from "../controller/userController";
import { signInController } from "../controller/authController";
import { authenticateJWT } from "../middleware/isLogin";

const userRoutes = Router();

userRoutes.post("/login", signInController);

userRoutes.post("/", authenticateJWT, createUserWithAddressController);
// Route to get a user by ID
userRoutes.get("/:userId", authenticateJWT, getUserByIdController);

// Route to get all users
userRoutes.get("/", authenticateJWT, getAllUsersController);

// Route to delete a user by ID
userRoutes.delete("/:userId", authenticateJWT, deleteUserByIdController);

export default userRoutes;
