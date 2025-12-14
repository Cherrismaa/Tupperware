import { CartItem, Product } from "@/types/product";

export const getCart = (): CartItem[] => {
  const cart = localStorage.getItem("tupperware_cart");
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem("tupperware_cart", JSON.stringify(cart));
};

export const addToCart = (product: Product): CartItem[] => {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.cartQuantity += 1;
  } else {
    cart.push({ ...product, cartQuantity: 1 });
  }

  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId: string): CartItem[] => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== productId);
  saveCart(updatedCart);
  return updatedCart;
};

export const updateCartQuantity = (productId: string, quantity: number): CartItem[] => {
  const cart = getCart();
  const item = cart.find((item) => item.id === productId);

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.cartQuantity = quantity;
    saveCart(cart);
  }

  return cart;
};

export const getCartTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.price * item.cartQuantity, 0);
};

export const getCartCount = (cart: CartItem[]): number => {
  return cart.reduce((count, item) => count + item.cartQuantity, 0);
};

export const clearCart = (): void => {
  localStorage.removeItem("tupperware_cart");
};
