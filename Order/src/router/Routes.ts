import { Router } from "express";
import { createOrderController, deleteByIdController, getAllController, getByIdController } from "../controller/orderController";


const OrderRouters = Router();

OrderRouters.post("/", createOrderController);
// Route to get a user by ID
OrderRouters.get("/:id", getByIdController);

// Route to get all users 
OrderRouters.get("/", getAllController);

// Route to delete a user by ID
OrderRouters.delete("/:id", deleteByIdController);

export default OrderRouters;