import express, { Request, Response } from "express";
import "dotenv/config";
import { connectDB } from "./util/dbConnect";
import errorHandler from "./middleware/errorHandler";
import OrderRouters from "./router/Routes";
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());


app.use("/", OrderRouters);

app.use(errorHandler);
connectDB();
app.listen(PORT, () => {
  console.log(`Order is running on port ${PORT}`);
});
