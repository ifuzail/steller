import { create } from "zustand";

const useCartStore = create((set) => {
  return {
    cartItems: [],
    isCartOpen: false,

    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

    addToCart: (item) =>
      set((state) => {
        const updatedCartItems = [...state.cartItems, { ...item, quantity: 1 }];
        return { cartItems: updatedCartItems };
      }),

    removeFromCart: (item) =>
      set((state) => {
        const updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== item.id
        );
        return { cartItems: updatedCartItems };
      }),

    increaseQuantity: (itemId) =>
      set((state) => {
        const updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { cartItems: updatedCartItems };
      }),

    decreaseQuantity: (itemId) =>
      set((state) => {
        const updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === itemId && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        return { cartItems: updatedCartItems };
      }),

    proceedToBuy: () => {
      const cartItems = useCartStore.getState().cartItems;

      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      // Add logic for completing the purchase
    },
  };
});

export default useCartStore;
