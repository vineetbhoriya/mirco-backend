import { Request, Response, NextFunction } from "express";
import { createOrder, deleteById, getAll, getById } from "../service/order.service";

export const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user, products, totalAmount, status, payment, shippingAddress } = req.body;

  try {
    const result = await createOrder(
      user,
      products,
      totalAmount,
      status,
      shippingAddress,
      payment
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
    const order = await getById(id);

    if (order) {
      res.status(200).json({
        message: "order retrieved successfully",
        order,
      });
    } else {
      res.status(404).json({
        message: "order not found",
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
    const orders = await getAll();
    res.status(200).json({
      message: "orders retrieved successfully",
      orders,
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
    const order = await deleteById(id);

    if (order) {
      res.status(200).json({
        message: "order delete successfully",
        order,
      });
    } else {
      res.status(404).json({
        message: "order not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
