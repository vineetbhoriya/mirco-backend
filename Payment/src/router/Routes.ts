import { Router } from "express";
import { createOrderController, deleteByIdController, getAllController, getByIdController } from "../controller/orderController";


const paymentRoutes = Router();

paymentRoutes.post("/", createOrderController);
// Route to get a user by ID
paymentRoutes.get("/:id", getByIdController);

// Route to get all users 
paymentRoutes.get("/", getAllController);

// Route to delete a user by ID
paymentRoutes.delete("/:id", deleteByIdController);

export default paymentRoutes;