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
    const searchTerm = req.query.searchTerm as string | undefined;

    const result = await productService.getProductsListFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
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

// update product information
const updateProductInfo = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    // zod validation
    const zodParseData = productValidationSchema.parse(productData);
    const result = await productService.updateProductIntoDB(
      zodParseData,
      productId,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
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

// update product information
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    await productService.deleteProductFromDB(productId);
    res.status(201).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
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
  updateProductInfo,
  deleteProduct,
};
