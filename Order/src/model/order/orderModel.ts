import { model } from "mongoose";
import { OrderSchema } from "./orderSchema";
import { IOrder } from "./orderDocument";

const  Order = model<IOrder>("Order", OrderSchema);
export default Order;
