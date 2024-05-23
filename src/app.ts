import express from 'express';
import { productRoutes } from './modules/product/product.route';
const app = express();

// persers
app.use(express.json());

// product route
app.use('/api/porducts', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
