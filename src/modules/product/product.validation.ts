import { z } from 'zod';

// Variant Schema
const variantValidationSchema = z.object({
  type: z.string().min(1, 'Type is required'),
  value: z.string().min(1, 'Value is required'),
});

// Inventory Schema
const inventoryValidationSchema = z.object({
  quantity: z.number().min(1, 'Quantity is required'),
  inStock: z.boolean(),
});

// Product Schema
const productValidationSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  description: z
    .string()
    .max(200, 'Description cannot be more than 200 characters'),
  price: z.number().min(1, 'Price is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()),
  variants: z
    .array(variantValidationSchema)
    .min(1, 'At least one variant is required'),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
