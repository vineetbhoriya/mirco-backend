import { Document, Types } from "mongoose";

export interface IAddress extends Document {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  user?:Types.ObjectId;
}
