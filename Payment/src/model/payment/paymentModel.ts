import { model } from "mongoose";
import { PaymentSchema } from "./paymentSchema";
import { IPayment } from "./paymentDocument";

const  Payment = model<IPayment>("Payment", PaymentSchema);
export default Payment;
