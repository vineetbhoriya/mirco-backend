import { Router } from "express";
import {
  createUserWithAddressController,
  deleteUserByIdController,
  getAllUsersController,
  getUserByIdController,
} from "../controller/userController";


const userRoutes = Router();

userRoutes.post("/", createUserWithAddressController);
// Route to get a user by ID
userRoutes.get("/:userId", getUserByIdController);

// Route to get all users 
userRoutes.get("/", getAllUsersController);

// Route to delete a user by ID
userRoutes.delete("/:userId", deleteUserByIdController);

export default userRoutes;
