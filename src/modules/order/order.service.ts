import { ProductModel } from '../product/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

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

    return order;
  } catch (err) {
    console.error(err);
  }
};

export const orderService = {
  createOrderIntoDB,
};
