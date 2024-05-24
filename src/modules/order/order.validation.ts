import { z } from 'zod';

// Define the Zod schema for Order
const orderValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  productId: z.string().min(1, { message: 'Product ID is required' }), // Ensuring productId is not an empty string
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1' }),
});

// Export the schema
export default orderValidationSchema;
