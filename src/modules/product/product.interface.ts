export type Varient = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Varient[];
  inventory: Inventory;
};
