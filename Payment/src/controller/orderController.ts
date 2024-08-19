import { Request, Response, NextFunction } from "express";
import { createPayment, deleteById, getAll, getById } from "../service/order.service";

export const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user, products, totalAmount, status, payment, shippingAddress } = req.body;

  try {
    const result = await createPayment(
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
    const payment = await getById(id);

    if (payment) {
      res.status(200).json({
        message: "payment retrieved successfully",
        payment,
      });
    } else {
      res.status(404).json({
        message: "payment not found",
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
    const payment = await getAll();
    res.status(200).json({
      message: "payment retrieved successfully",
      payment,
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
    const payment = await deleteById(id);

    if (payment) {
      res.status(200).json({
        message: "payment delete successfully",
        payment,
      });
    } else {
      res.status(404).json({
        message: "payment not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
