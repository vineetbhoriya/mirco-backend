import express, { Request, Response } from "express";
import "dotenv/config";
import { connectDB } from "./util/dbConnect";
import errorHandler from "./middleware/errorHandler";
import ProductRouter from "./router/prodoct.Routes";
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());


app.use("/", ProductRouter);

app.use(errorHandler);
connectDB();
app.listen(PORT, () => {
  console.log(`Product is running on port ${PORT}`);
});
