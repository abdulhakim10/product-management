import { Schema, model } from 'mongoose';
import { Inventory, Product, Varient } from './product.interface';

const varientSchema = new Schema<Varient>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    max: 200,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  variants: {
    type: [varientSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
  },
});

export const ProductModel = model<Product>('Product', productSchema);
