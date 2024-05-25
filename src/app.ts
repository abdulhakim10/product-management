import express from 'express';
import { productRoutes } from './modules/product/product.route';
import { orderRoutes } from './modules/order/order.route';
const app = express();

// parsers
app.use(express.json());

// product route
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Assignment 2');
});

export default app;
