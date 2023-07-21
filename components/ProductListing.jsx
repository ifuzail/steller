import React from "react";
import ProductCard from "./ProductCard";
import {products} from "@/utils/constant";

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
    <section id="ProductListing" >
      <div className="flex">
        <div className="flex-grow">
      
          <div className="container mx-auto p-8">
            <div className="flex items-center gap-3 mb-10">
         
            <h1 className="text-4xl font-bold  text-slate-800">Products</h1>
           
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-10">
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
