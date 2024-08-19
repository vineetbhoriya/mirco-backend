import { Request, Response, NextFunction } from "express";
import { createProduct, deleteById, getAll, getById } from "../service/product.service";

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, category, price, brand, tag, images } = req.body;

  try {
    const result = await createProduct(
      title,
      description,
      category,
      price,
      brand,
      tag,
      images
    );
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const product = await getById(id);

    if (product) {
      res.status(200).json({
        message: "product retrieved successfully",
        product,
      });
    } else {
      res.status(404).json({
        message: "product not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getAllController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const prpducts = await getAll();
    res.status(200).json({
      message: "products retrieved successfully",
      prpducts,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const prpduct = await deleteById(id);

    if (prpduct) {
      res.status(200).json({
        message: "product delete successfully",
        prpduct,
      });
    } else {
      res.status(404).json({
        message: "product not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
