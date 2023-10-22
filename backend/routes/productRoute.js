import express from "express";
import asyncHandler from 'express-async-handler'
import Product from "../models/productModel.js";
// import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
// import {
//     createProductController,
//     deleteProductController,
//     getProductController,
//     getSingleProductController,
//     productCategoryController,
//     productCountController,
//     productFiltersController,
//     productListController,
//     productPhotoController,
//     realtedProductController,
//     searchProductController,
//     updateProductController,
//   } from "../controllers/productController.js";
//   import formidable from "express-formidable";



const productRoute = express.Router();
//Get all PRODUCT
productRoute.get(
  "/",
  asyncHandler(async (req, res)=> {
    const products = await Product.find({});
    res.json(products);
  })
);
//Get One PRODUCT

productRoute.get(
    "/:id",
    asyncHandler(async (req, res)=> {
      const product = await Product.findById(req.params.id);
      if(product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error("Product not found");
      }
    })
  );

// router.put(
//   "/update-product/:pid",
//   requireSignIn,
//   isAdmin,
//   formidable(),
//   updateProductController
// );

// router.get("/get-product", getProductController);

// router.get("/get-product/:slug", getSingleProductController);

// router.get("/product-photo/:pid", productPhotoController);

// router.delete("/delete-product/:pid", deleteProductController);

// router.post("/product-filters", productFiltersController);


// router.get("/product-count", productCountController);


// router.get("/product-list/:page", productListController);


// router.get("/search/:keyword", searchProductController);


// router.get("/related-product/:pid/:cid", realtedProductController);


// router.get("/product-category/:slug", productCategoryController);


export default productRoute;
