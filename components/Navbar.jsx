import React, { useState, useEffect } from "react";
import {BsCart3, BsFilter} from 'react-icons/bs'
import {IoIosClose} from 'react-icons/io'
import CartPage from "./cart";
import useCartStore from "@/store/cartFunc";
import Link from "next/link";
import Topbar from "./topbar";
import SignOutButton from "./SignOut";
import supabase from "@/utils/supabase";


const Navbar = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setSession(session);

    if (session?.user) {
      setUser(session.user);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        if (session?.user) {
          setUser(session.user);
        }
      }
    );

    return () => {
      authListener.subscription;
    };
  }, []);

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
           {user ? (
              <div className="flex items-center space-x-2 ">
                <img
                  src={user.user_metadata.avatar_url}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-slate-700 text-sm font-bold  lg:block hidden ">
                  {user.user_metadata.full_name}
                </span>
                <SignOutButton />
              </div>
            ) : (
              <Link href="/sign-in"
                 className="text-slate-700 hover:text-slate-900">
                  Sign In
                
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
