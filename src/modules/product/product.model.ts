import { Schema, model } from 'mongoose';
import { Inventory, Product, Varient } from './product.interface';

export const varientSchema = new Schema<Varient>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

export const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

export const productSchema = new Schema<Product>({
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

// Create a text index on the name and description fields
productSchema.index({ name: 'text', description: 'text', tags: 'text' });

export const ProductModel = model<Product>('Product', productSchema);
