import { Product } from './product.interface';
import { ProductModel } from './product.model';

// create product into database
const createProductIntoDB = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};

// retrieve a list of all products
const getProductsListFromDB = async (searchTerm: string | undefined) => {
  let st;
  searchTerm != undefined
    ? (st = { $text: { $search: searchTerm } })
    : (st = {});
  const result = await ProductModel.find(st);
  return result;
};

// retrieve a specific product by ID
const getSingleProductByIDFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

// update product information
const updateProductIntoDB = async (productData: Product, productId: string) => {
  const result = ProductModel.updateOne(
    { _id: productId },
    { $set: productData },
  );
  return result;
};

// delete a product
const deleteProductFromDB = async (productId: string) => {
  const result = ProductModel.deleteOne({ _id: productId });
  return result;
};

export const productService = {
  createProductIntoDB,
  getProductsListFromDB,
  getSingleProductByIDFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
