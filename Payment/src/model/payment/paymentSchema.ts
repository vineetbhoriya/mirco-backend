import { Schema } from "mongoose";
import { IPayment } from "./paymentDocument";

export const PaymentSchema: Schema<IPayment> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true }, // e.g., "credit card", "paypal", "bank transfer"
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      required: true,
      default: "pending",
    },
    transactionId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
