import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  isCartOpen: false,

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  addToCart: (itemId) => {
    set((state) => ({
      cartItems: [...state.cartItems, { ...itemId, quantity: 1 }],
    }));
  },

  removeFromCart: (item) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      ),
    })),

  increaseQuantity: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
    })),

  decreaseQuantity: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === itemId && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    })),

    proceedToBuy: () => {
      const cartItems = useCartStore.getState().cartItems;
  
      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    
    },
  }));

export default useCartStore;
