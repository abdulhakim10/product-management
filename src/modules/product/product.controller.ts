import { Request, Response } from 'express';
import { productService } from './product.service';
import productValidationSchema from './product.validation';

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

export const productController = {
  createProduct,
};
