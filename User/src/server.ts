import express, { Request, Response } from "express";
import "dotenv/config";
import { connectDB } from "./util/dbConnect";
import userRoutes from "./router/user.Routes";
import errorHandler from "./middleware/errorHandler";
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.use("/", userRoutes);

app.use(errorHandler);
connectDB();
app.listen(PORT, () => {
  console.log(`User is running on port ${PORT}`);
});
