import { Product } from './product.interface';
import { ProductModel } from './product.model';

// create product into database
const createProductIntoDB = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};

export const productService = {
  createProductIntoDB,
};
