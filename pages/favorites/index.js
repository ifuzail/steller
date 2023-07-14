import React from 'react';
import favoritesStore from '../store/favoritesStore';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import useFavoritesStore from '../store/favoritesStore';
import { toast } from 'react-toastify';

const FavoritePage = () => {
  const { favorites } = favoritesStore();
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id);
    toast.error('Item removed from favorites');
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-slate-900 text-2xl font-bold mt-5 px-5">Favorite Products</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center mt-5">Your favorite list is empty.</p>
      ) : (
        <div className="flex lg:flex-row flex-col p-10 gap-5 flex-wrap justify-center">
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
              <button className='font-medium text-red-500 hover:text-red-700' onClick={() => handleRemoveFromFavorites(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
