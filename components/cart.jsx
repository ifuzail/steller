import React from "react";
import useCartStore from "@/store/cartFunc";
import { TiDelete } from "react-icons/ti";
import Link from "next/link";

const CartPage = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  

  

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice.toFixed(2);
  };

  return (
    <div className="relative">
      {isCartOpen && (
        <div className="absolute top-5 right-0 bg-white rounded-lg p-4 shadow-lg lg:w-[400px] lg:h-[600px] w-[300px] h-[500px] overflow-y-auto z-10">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.length === 1 ? (
                <h1 className="text-rose-500 font-bold">
                  {cartItems.length} Item
                </h1>
              ) : (
                <h1 className="text-rose-500 font-bold">
                  {cartItems.length} Items
                </h1>
              )}
              <ul className="space-y-4 mt-10">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center bg-white rounded-md shadow-md"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div className="w-[260px]">
                      <h3 className="text-lg font-semibold lg:w-full w-40 truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <div className="flex items-center">
                        <button
                          className="text-red-600 text-2xl"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <p className="mx-2">{item.quantity}</p>
                        <button
                          className="text-green-600 text-2xl"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-red-600 text-2xl"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <TiDelete />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">
                  Total Price: ${getTotalPrice()}
                </h3>
                <Link href="/checkout">
                  <button
                    className="mt-4 bg-red-500  hover:bg-green-500 text-white font-bold text-lg w-full h-12 rounded-xl"
                    
                  >
                    Proceed to Buy
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-red-500 font-bold text-center relative top-1/2">
              Your cart is empty.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
