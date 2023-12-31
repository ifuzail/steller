import React, { useState } from "react";
import {BsCart3, BsFilter} from 'react-icons/bs'
import {IoIosClose} from 'react-icons/io'
import CartPage from "./cart";
import useCartStore from "@/store/cartFunc";
import Link from "next/link";
import Topbar from "./topbar";
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
          <div className="ml-4 relative flex justify-between items-center gap-6">  
            <button className="bg-transparent text-stone-900 hover:text-slate-900 focus:outline-none lg:hidden block"
             onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <BsFilter fontSize={20} />
            </button>
            {isFilterOpen && <Topbar isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>}
            <button
              className="bg-transparent text-stone-900 hover:text-slate-900 focus:outline-none"
              aria-label="Cart"
              onClick={toggleCart}
            >
              {isCartOpen ? (
                <IoIosClose size={20} />
              ) : (
                <BsCart3 size={20} />
              )}
              {cartItems.length > 0 && (
                <span
                  className={
                    isCartOpen
                      ? "hidden"
                      : "absolute lg:right-40 top-0 right-20 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                  }
                >
                  {cartItems.length}
                </span>
              )}
            </button>
            {isCartOpen && <CartPage />}
         <UserButton afterSignOutUrl="/"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
