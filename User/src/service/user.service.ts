import bcrypt from "bcrypt";
import { IAddress } from "../model/address/addressDocument";
import { Address } from "../model/address/addressMode";
import { IUser } from "../model/user/userDocument";
import { User } from "../model/user/userModel";
import { isValidEmail, isValidPassword } from "../util/validation/validation";
import { Types } from "mongoose";

// Function to create a user with an address
export const createUserWithAddress = async (
  name: string,
  email: string,
  password: string,
  addressData: IAddress
) => {
  try {
    // Custom validation
    if (!name || name.length < 3 || name.length > 30) {
      throw new Error("Name must be between 3 and 30 characters.");
    }

    if (!isValidEmail(email)) {
      throw new Error("Invalid email format.");
    }

    const passwordError = isValidPassword(password);
    if (passwordError) {
      throw new Error(passwordError);
    }

    if (!addressData) {
      throw new Error("Address data is required.");
    }

    const { street, city, state, zipCode, country } = addressData;

    // Create and save the address
    const newAddress = new Address({
      street,
      city,
      state,
      zipCode,
      country,
    });
    await newAddress.save();

    // Hash the password
    const saltRounds = parseInt(process.env.SALT_ROUNDS || "10", 10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      address: newAddress._id,
    });
    await newUser.save();

    // Update the address with the user ID
    newAddress.user = newUser._id as Types.ObjectId;
    await newAddress.save();

    return {
      message: "User created successfully",
      user: newUser,
    };
  } catch (error) {
    throw new Error(
      `Error creating user: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
export const getUserById = async (userId: string): Promise<IUser | null> => {
  try {
    const user = await User.findById(userId).populate("address").exec();
    return user;
  } catch (error) {
    throw new Error(
      `Error fetching user: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
// Function to get all users (optional, if you want to retrieve a list of users)
export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const users = await User.find()
      .select({ password: 0 })
      .populate("address")
      .exec();
    return users;
  } catch (error) {
    throw new Error(
      `Error fetching users: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};

export const deleteUserById = async (userId: string) => {
  try {
    // Find the user to get the address ID
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Delete the associated address if it exists
    if (user.address) {
      await Address.findByIdAndDelete(user.address);
    }
    // Delete the user
    await User.findByIdAndDelete(userId);
    return "user deleted";
  } catch (error: any) {
    throw new Error(
      `Error deleting user: ${
        error instanceof Error ? error.message : "Unknown error occurred"
      }`
    );
  }
};
