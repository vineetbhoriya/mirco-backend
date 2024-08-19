import { IProduct } from "../model/product/productDocument";
import { Product } from "../model/product/productModel";

export const createProduct = async (
  title: String,
  description: String,
  category: String,
  price: String,
  brand: String,
  tag: [String],
  images: [String]
) => {
  try {
    // Create the product
    const newUser = new Product({
      title,
      description,
      category,
      price,
      brand,
      tag,
      images,
    });
    await newUser.save();
    return {
      message: "User created successfully",
      user: newUser,
    };
  } catch (error) {
    throw new Error(
      `Error creating product: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
export const getById = async (
  userId: string
): Promise<IProduct | null> => {
  try {
    const product = await Product.findById(userId);
    return product;
  } catch (error) {
    throw new Error(
      `Error fetching product: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
export const getAll = async (): Promise<IProduct[]> => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(
      `Error fetching products: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};

export const deleteById = async (userId: string) => {
  try {
    // Find the user to get the address ID
    const product = await Product.findById(userId);

    if (!product) {
      throw new Error("product not found");
    }
    // Delete the product
    await Product.findByIdAndDelete(userId);
    return "product deleted";
  } catch (error: any) {
    throw new Error(
      `Error deleting user: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
