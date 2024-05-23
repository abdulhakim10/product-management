import { Request, Response } from 'express';
import { productService } from './product.service';
import productValidationSchema from './product.validation';

// create product data
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // zod validation
    const zodParseData = productValidationSchema.parse(productData);
    const result = await productService.createProductIntoDB(zodParseData);
    res.status(201).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: err.issues[0].message || 'Something went wrong',
      error: err,
    });
  }
};

// retrieve a list of all products data
const getProductsList = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProductsListFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// retrieve a specific product by ID
const getSingleProductByID = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductByIDFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const productController = {
  createProduct,
  getProductsList,
  getSingleProductByID,
};
