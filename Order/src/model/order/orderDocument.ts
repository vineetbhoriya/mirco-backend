import { Document, ObjectId } from 'mongoose';

interface IProduct {
  product: ObjectId;
  quantity: number;
  price: number;
}

export interface IOrder extends Document {
  user: ObjectId;
  products: IProduct[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled';
  payment?: ObjectId;
  shippingAddress?: ObjectId;
}
