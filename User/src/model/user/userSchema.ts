import { Schema } from "mongoose";
import { IUser } from "./userDocument";


export const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },
  address: { type: Schema.Types.ObjectId, ref: 'Address' }
},{
  timestamps: true,
});
