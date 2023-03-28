import { NextFunction, Response, Request } from "express";
import Products from "../models/ProductsModel";
import mongoose from "mongoose";

export const editProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.id && req.body.data) {
      await Products.findByIdAndUpdate(req.params.id, { ...req.body.data });
      return res.json({
        status: true,
        msg: "Product deleted successfully.",
      });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to delete data." });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.id) {
      await Products.findByIdAndDelete(req.params.id);
      return res.json({
        status: true,
        msg: "Product deleted successfully.",
      });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to delete data." });
  }
};

export const addData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.data) {
      await Products.create(req.body.data);
      return res.json({
        status: true,
        msg: "Product added successfully.",
      });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to add data." });
  }
};

export const bulkAddData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.data) {
      await Products.insertMany(req.body.data);
      return res.json({
        status: true,
        msg: "Bulk Products added successfully.",
      });
    } else {
      return res.json({ status: false, msg: "Prodcts are needed." });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to add data." });
  }
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Products.find();
    if (products) {
      return res.json({ status: true, products });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to get data." });
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.id) {
      const products = await Products.findById(req.params.id);
      if (products) {
        return res.json({ status: true, products });
      }
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to get data." });
  }
};

export const getProductsDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.id) {
      const productData = await Products.findById(req.params.id);

      return res.json({
        status: true,
        productDetails: productData?.productDetails,
        msg: "Product Details Added successfully.",
      });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to get data." });
  }
};

export const getProductDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.id && req.params.productid) {
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to get data." });
  }
};

export const editProductDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.id && req.body.data) {
      await Products.findByIdAndUpdate(req.params.id, {
        productDetails: req.body.data,
      });
      return res.json({
        status: true,
        msg: "Product Details Edited successfully.",
      });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to Edit data." });
  }
};

export const deleteProductDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.id && req.params.detailid) {
      const productData = await Products.findById(req.params.id);
      if (productData) {
        const index = productData.productDetails.findIndex(
          // @ts-ignore
          (product) => product.id === req.params.detailid
        );
        productData.productDetails.splice(index, 1);
        await Products.findByIdAndUpdate(req.params.id, productData!);
        return res.json({
          status: true,
          msg: "Product Deleted successfully.",
        });
      }
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to get data." });
  }
};

export const createProductsDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.id && req.body.data) {
      const productData = await Products.findById(req.params.id);
      const id = new mongoose.Types.ObjectId().valueOf();
      productData?.productDetails.push({ ...req.body.data, id });
      await Products.findByIdAndUpdate(req.params.id, productData!);
      return res.json({
        status: true,
        msg: "Product Details Added successfully.",
      });
    }
  } catch (err) {
    return res.json({ status: false, msg: "Failed to Add data." });
  }
};
