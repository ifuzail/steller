import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaShoppingCart, FaFilter, FaHeart } from 'react-icons/fa';
import Cart from './cart';
import useCartStore from '../store/cartFunc';
import Link from 'next/link';
import Sidebar from './Sidebar';

const Navbar = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const [isNavbarFixed, setNavbarFixed] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-slate-950 ${isNavbarFixed ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-5">
          
          <Link href="/">
            <div className="flex items-center justify-center gap-2">
              <img src="/logo.png" width={28} height={24} alt="" />
              <h1 className="text-white text-lg font-bold">STELLER</h1>
            </div>
          </Link>
          <div className="ml-4 relative flex justify-between items-center gap-5">
          <Link href='/favorites/'>
          <button class="bg-transparent  text-gray-400 hover:text-white focus:outline-none">
            <FaHeart/>
          </button>
          </Link>
          <button  className="bg-transparent  text-gray-400 hover:text-white focus:outline-none"
              aria-label="filter" onClick={handleFilterToggle}>
            <FaFilter />
          </button>
          {isFilterOpen && <Sidebar />}
            <button
              className="bg-transparent text-gray-400 hover:text-white focus:outline-none"
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
                      ? 'hidden'
                      : 'absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'
                  }
                >
                  {cartItems.length}
                </span>
              )}
            </button>
            {isCartOpen && <Cart />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;