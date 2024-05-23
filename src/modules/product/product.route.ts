import express from 'express';
import { productController } from './product.controller';
const rouer = express.Router();

rouer.post('/', productController.createProduct);

export const productRoutes = rouer;
