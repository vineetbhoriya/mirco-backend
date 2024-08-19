import { IOrder } from "../model/order/orderDocument";
import Order  from "../model/order/orderModel";

export const createOrder = async (
  user: string,
  products: {
    product: string;
    quantity: number;
    price: number;
  }[],
  totalAmount: number,
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled',
  shippingAddress: string,
  payment?: string // Optional
) => {
  try {
    const newOrder = new Order({
      user,
      products,
      totalAmount,
      status,
      shippingAddress,
      payment, // Optional field
    });
    await newOrder.save();
    return {
      message: "Order created successfully",
      order: newOrder,
    };
  } catch (error) {
    throw new Error(
      `Error creating order: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};


export const getById = async (
  id: string
): Promise<IOrder | null> => {
  try {
    const order = await Order.findById(id).populate("products.product");
    return order;
  } catch (error) {
    throw new Error(
      `Error fetching order: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
export const getAll = async (): Promise<IOrder[]> => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    throw new Error(
      `Error fetching orders: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};

export const deleteById = async (id: string) => {
  try {
    // Find the user to get the address ID
    const order = await Order.findByIdAndDelete(id);
    // Delete the order
    return "order deleted";
  } catch (error: any) {
    throw new Error(
      `Error deleting user: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
