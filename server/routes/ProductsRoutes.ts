import { Router } from "express";
import {
  addData,
  bulkAddData,
  createProductsDetails,
  deleteProduct,
  deleteProductDetails,
  editProduct,
  editProductDetails,
  getProduct,
  getProductDetails,
  getProducts,
  getProductsDetails,
} from "../controllers/ProductsController";

export const productsRoutes = Router();

productsRoutes.post("/bulkAdd", bulkAddData);
productsRoutes.post("/add", addData);
productsRoutes.delete("/delete/:id", deleteProduct);
productsRoutes.get("/", getProducts);
productsRoutes.get("/:id", getProduct);
productsRoutes.put("/:id", editProduct);

productsRoutes.get("/details/:id", getProductsDetails);
productsRoutes.get("details/:productid/:id", getProductDetails);
productsRoutes.post("/details/:id", createProductsDetails);
productsRoutes.delete("/details/:id/:detailid", deleteProductDetails);
productsRoutes.put("/details/:id", editProductDetails);
