// src\types\product.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; 
  description: string;
  size?: string;
  quantity?: string;
  colors?: string[];
  inStock: boolean;
  isOffer?: boolean;
  discount?: number;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  slug: string;
}
