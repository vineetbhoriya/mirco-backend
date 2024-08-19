import { Document, ObjectId } from 'mongoose';

// Define the IPayment interface
export interface IPayment extends Document {
  user: ObjectId; // Reference to the User model
  order: ObjectId; // Reference to the Order model
  amount: number;
  paymentMethod: string; // e.g., "credit card", "paypal", "bank transfer"
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId: string;
}
