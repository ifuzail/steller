import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
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

      proceedToBuy: async () => {
        const cartItems = useCartStore.getState().cartItems;
  
        const stripePromise = loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        );
  
        try {
          const stripe = await stripePromise;
  
          const checkoutSession = await axios.post("/api/stripe-session", {
            cartItems: cartItems,
          });
  
          const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
          });
  
          if (result.error) {
            alert(result.error.message);
          }
        } catch (error) {
          console.error("Error creating Stripe session:", error);
        }
      },
  };
});

export default useCartStore;
