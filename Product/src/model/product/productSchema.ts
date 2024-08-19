import { Schema } from "mongoose";
import { IProduct } from "./productDocument";

export const productSchema: Schema<IProduct> = new Schema(
  {
    title: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    tag: {
      type: [String],
    },
    images: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
