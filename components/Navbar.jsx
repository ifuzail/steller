import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaShoppingCart,
  FaFilter,
  FaHeart,
} from "react-icons/fa";
import CartPage from "./cart";
import useCartStore from "@/store/cartFunc";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const [isFilterOpen, setIsFilterOpen] = useState(false);


  return (
    <nav className="bg-gray-50 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-5">
          <Link href="/">
            <div className="flex items-center justify-center gap-2">
              <img src="/shopping-cart.png" width={28} height={24} alt="" />
              <h1 className="text-black text-lg font-bold">STELLER</h1>
            </div>
          </Link>
          <div className="ml-4 relative flex justify-between items-center gap-9">
            <Link href="/favorites/">
              <button className="bg-transparent  text-slate-700 hover:text-slate-900 focus:outline-none mt-1">
                <FaHeart fontSize={20} />
              </button>
            </Link>
            <button>
              <FaFilter font-fontSize={20}/>
            </button>
            <button
              className="bg-transparent text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Cart"
              onClick={toggleCart}
            >
              {isCartOpen ? (
                <FaArrowRight size={20} />
              ) : (
                <FaShoppingCart size={20} />
              )}
              {cartItems.length > 0 && (
                <span
                  className={
                    isCartOpen
                      ? "hidden"
                      : "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                  }
                >
                  {cartItems.length}
                </span>
              )}
            </button>
            {isCartOpen && <CartPage />}
            <div>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
