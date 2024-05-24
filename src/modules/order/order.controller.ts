import { Request, Response } from 'express';
import { orderService } from './order.service';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderService.createOrderIntoDB(orderData);
    res.send(result);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// retrieve all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const result = await orderService.getAllOrdrsFromDB(email as string);
    res.status(200).json({
      success: true,
      message: email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
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

export const orderController = {
  createOrder,
  getAllOrders,
};
