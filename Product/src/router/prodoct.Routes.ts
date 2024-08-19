import { Router } from "express";
import { createProductController, deleteByIdController, getAllController, getByIdController } from "../controller/productController";


const ProductRouter = Router();

ProductRouter.post("/", createProductController);
// Route to get a user by ID
ProductRouter.get("/:id", getByIdController);

// Route to get all users 
ProductRouter.get("/", getAllController);

// Route to delete a user by ID
ProductRouter.delete("/:id", deleteByIdController);

export default ProductRouter;