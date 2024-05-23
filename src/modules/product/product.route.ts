import express from 'express';
import { productController } from './product.controller';
const rouer = express.Router();

// rouer.post('/', productController.createProduct);
rouer
  .route('/')
  .post(productController.createProduct)
  .get(productController.getProductsList);

rouer
  .route('/:productId')
  .get(productController.getSingleProductByID)
  .put(productController.updateProductInfo)
  .delete(productController.deleteProduct);

export const productRoutes = rouer;
