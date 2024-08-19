import { model } from "mongoose";
import { productSchema } from "./productSchema";
import { IProduct } from "./productDocument";

export const Product = model<IProduct>("Product", productSchema);
