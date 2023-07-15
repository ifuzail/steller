import React from 'react';
import useFavoritesStore from '@/store/favoritesStore';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import { toast } from 'react-toastify';

const FavoritePage = () => {
  const { favorites } = useFavoritesStore();
  const clearFavorites = useFavoritesStore((state) => state.clearFavorites);

 const handleClearFavorites = () => {
  clearFavorites();
  toast.error('Items cleared from favorites');
 }
  return (
    <div>
      <Navbar />
      <h1 className="text-slate-900 text-2xl font-bold mt-5 px-5">Favorite Products</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center mt-5">Your favorite list is empty.</p>
      ) : (
        <div className="flex lg:flex-row flex-col p-10 gap-5 flex-wrap justify-center">
           <button className='font-medium text-red-500 hover:text-red-700' onClick={handleClearFavorites}>clear favorites</button>
          {favorites.map((product) => (
            <div key={product.id}>
            
              <ProductCard
                key={product.id}
                slug={product.slug}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
