import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { productsRoutes } from "./routes/ProductsRoutes";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/inventory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/products", productsRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
