import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import supabase from "@/utils/supabase";
import filterStore from '../store/filterStore';


const ProductListing = () => {

  const [products, setProducts] = useState([])
  const { filters } = filterStore();


// we are using CSR client side rendering 
 useEffect(() => {
   async function fetchProducts() {
    const {data: products , error} = await supabase.from('products').select('*');
    console.log('Fetched Products:', products); 
      if(error) {
        console.error('Error fetching Data:', error.message)
      } else {
        setProducts(products)
      }
   }
   fetchProducts();
 }, [])
 



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
      
          <div className="container mx-auto p-8 mt-10">
            <div className="flex items-center gap-3 mb-10">
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
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
