import { Product } from './product.interface';
import { ProductModel } from './product.model';

// create product into database
const createProductIntoDB = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};

// retrieve a list of all products
const getProductsListFromDB = async () => {
  const result = await ProductModel.find({});
  return result;
};

// retrieve a specific product by ID
const getSingleProductByIDFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

export const productService = {
  createProductIntoDB,
  getProductsListFromDB,
  getSingleProductByIDFromDB,
};
