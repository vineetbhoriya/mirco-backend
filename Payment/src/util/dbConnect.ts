import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

const mongoURI = process.env.DB_URL || "mongodb://localhost:27017/myDatabase";
// Function to connect to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");

        // Handle connection events
        mongoose.connection.on("connected", () => {
            console.log("Mongoose connected to MongoDB");
        });

        mongoose.connection.on("error", (err) => {
            console.error("Mongoose connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("Mongoose disconnected from MongoDB");
        });

        // Handle application termination
        process.on("SIGINT", async () => {
            await mongoose.connection.close();
            console.log("Mongoose disconnected due to application termination");
            process.exit(0);
        });

    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};
