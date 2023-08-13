import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import useCartStore from "@/store/cartFunc";


const ProductCard = ({ name, price, imageUrl, id, slug }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const product = { name, price, imageUrl, id };


  const handleToggleCart = () => {
    if (cartItems.some((item) => item.id === id)) {
      removeFromCart(product);
      toast.error("Item removed from cart");
    } else {
      addToCart(product);
      toast.success("Item added to cart");
    }
  };

  const isItemAdded = cartItems.some((item) => item.id === id);

  return (
    <div className="max-w-xs mx-1 bg-white shadow-md rounded-lg overflow-hidden w-72">
      <Link href={`/product/${slug}`}>
        <div className="">
          <img
            className="w-full h-48 p-2 object-contain"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="py-4 px-6">
          <h2 className="text-gray-800 text-lg font-semibold truncate hover:underline hover:text-red-600">
            {name}
          </h2>
          <p className="text-gray-600">${price}</p>
        </div>
      </Link>
      <div className="flex justify-start gap-3 items-center mt-4">
        <button
          className={
            isItemAdded
              ? "bg-red-600 text-white w-full py-2"
              : "bg-emerald-950 text-white w-full py-2"
          }
          onClick={handleToggleCart}
        >
          {isItemAdded ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
