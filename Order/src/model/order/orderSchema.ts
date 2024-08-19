import { Schema } from "mongoose";
import { IOrder } from "./orderDocument";

export const OrderSchema: Schema<IOrder> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }, // Snapshot of the price at the time of order
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "canceled"],
      default: "pending",
      required: true,
    },
    payment: { type: Schema.Types.ObjectId, ref: "Payment",},
    shippingAddress: { type: Schema.Types.ObjectId, ref: "Address",  },
  },
  { timestamps: true }
);
