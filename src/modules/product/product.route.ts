import express from 'express';
import { productController } from './product.controller';
const router = express.Router();

router
  .route('/')
  .post(productController.createProduct)
  .get(productController.getProductsList);

router
  .route('/:productId')
  .get(productController.getSingleProductByID)
  .put(productController.updateProductInfo)
  .delete(productController.deleteProduct);

export const productRoutes = router;
