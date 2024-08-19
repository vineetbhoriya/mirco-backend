import { Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  category: string;
  price: number;
  brand: string;
  tag: {
    type: [string];
  };
  images: {
    type: [String];
  };
}
