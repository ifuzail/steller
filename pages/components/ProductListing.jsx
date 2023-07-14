import React from "react";
import ProductCard from "./ProductCard";
import products from "@/utils/constant";

import filterStore from '../store/filterStore';


const ProductListing = () => {
  const { filters } = filterStore();

  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (filters.category && filters.category !== product.category) {
      return false;
    }

    // Filter by company
    if (filters.company && filters.company !== product.company) {
      return false;
    }

    // Filter by price
    if (filters.price && product.price > filters.price) {
      return false;
    }

    // Filter by search
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    return true;
  });

 

  return (
    <section>
      <div className="flex">
        <div className="flex-grow">
          <div className="bg-gradient-to-tr from-red-500 via-amber-500 to-pink-600 slate w-full h-screen flex justify-center flex-wrap">
            <div className="flex flex-row justify-between items-center p-5">
              <span className="flex flex-col">
                <h1 className="font-normal lg:text-3xl  text-gray-100">STELLER PRESENTS</h1>
                <h3 className="font-bold lg:text-9xl text-7xl text-gray-100 ">New Gadgets Collection 2023</h3>
              </span>
              <img src="/banner.png" className="absolute lg:w-[520px] w-[300px]  lg:right-5 lg:top-14 right-0 " alt="product" />
            </div>
          </div>

          <div className="container mx-auto p-8">
            <div className="flex items-center gap-3 mb-10">
         
            <h1 className="text-4xl font-bold  text-slate-800">Products</h1>
           
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  slug={product.slug}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
