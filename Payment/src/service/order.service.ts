import { IPayment } from "../model/payment/paymentDocument";
import Payment from "../model/payment/paymentModel";

export const createPayment = async (
  user: string,
  payment: string,
  amount: number,
  paymentMethod: string,
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded',
  transactionId: string
): Promise<IPayment> => {
  try {
    const newPayment = new Payment({
      user,
      payment,
      amount,
      paymentMethod,
      paymentStatus,
      transactionId,
    });
    await newPayment.save();
    return newPayment;
  } catch (error) {
    throw new Error(
      `Error creating payment: ${
        error instanceof Error ? error.message : 'Unknown error occurred'
      }`
    );
  }
};



export const getById = async (
  userId: string
): Promise<IPayment | null> => {
  try {
    const payment = await Payment.findById(userId);
    return payment;
  } catch (error) {
    throw new Error(
      `Error fetching payment: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
export const getAll = async (): Promise<IPayment[]> => {
  try {
    const payments = await Payment.find();
    return payments;
  } catch (error) {
    throw new Error(
      `Error fetching payments: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};

export const deleteById = async (id: string) => {
  try {
    // Find the user to get the address ID
    const payment = await Payment.findByIdAndDelete(id);
    // Delete the payment
    return "payment deleted";
  } catch (error: any) {
    throw new Error(
      `Error deleting payment: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
