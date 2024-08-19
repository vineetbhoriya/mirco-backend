import { Router } from "express";
import { createOrderController, deleteByIdController, getAllController, getByIdController } from "../controller/orderController";


const OrderRouters = Router();

OrderRouters.post("/", createOrderController);

OrderRouters.get("/:id", getByIdController);

OrderRouters.get("/", getAllController);

OrderRouters.delete("/:id", deleteByIdController);

export default OrderRouters;