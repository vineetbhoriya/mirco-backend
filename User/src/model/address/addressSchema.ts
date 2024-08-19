import { Schema } from "mongoose";
import { IAddress } from "./addressDocument";

export const addressSchema: Schema<IAddress> = new Schema(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: false },
  },
  { timestamps: true }
);
