import { ProductModel } from '../product/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

// create order
const createOrderIntoDB = async (orderData: Order) => {
  try {
    // find the product by id
    const product = await ProductModel.findById(orderData.productId);
    if (!product) {
      return { success: false, message: 'Product not found' };
    }

    const productQuantity = product.inventory.quantity;
    const orderQuantity = orderData.quantity;

    // check there is enough inventory
    if (productQuantity < orderQuantity) {
      return {
        success: false,
        message: 'Insufficient quantity available in inventory',
      };
    }

    // create order data
    const order = await OrderModel.create(orderData);

    if (!order) {
      return {
        success: false,
        message: 'order not created',
      };
    }

    // update inventory quantity and inStock value
    const newQuantity = productQuantity - orderQuantity;
    const inStock = newQuantity > 0;

    // update the product inventory in db
    await ProductModel.updateOne(
      { _id: product._id },
      {
        $set: {
          'inventory.quantity': newQuantity,
          'inventory.inStock': inStock,
        },
      },
    );

    return {
      success: true,
      message: 'Order created successfully',
      data: order,
    };
  } catch (err) {
    console.error(err);
  }
};

// retrieve all orders
const getAllOrdrsFromDB = async (email: string) => {
  let query;
  !email ? (query = {}) : (query = { email });
  const orders = await OrderModel.find(query);
  return orders;
};

export const orderService = {
  createOrderIntoDB,
  getAllOrdrsFromDB,
};
