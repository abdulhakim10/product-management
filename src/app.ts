import express from 'express';
import { productRoutes } from './modules/product/product.route';
import { orderRoutes } from './modules/order/order.route';
const app = express();

// persers
app.use(express.json());

// product route
app.use('/api/porducts', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
