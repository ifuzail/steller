import Link from "next/link";
import useCartStore from "@/store/cartFunc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFavoritesStore from '@/store/favoritesStore';
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";


const ProductCard = ({ name, price, imageUrl, id, slug }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);
  const favorites = useFavoritesStore((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const product = { name, price, imageUrl, id }

  const handleToggleCart = () => {

    if (cartItems.some((item) => item.name === name)) {
      removeFromCart(product);
      toast.error("Item removed from cart");
    } else {
      addToCart(product);
      toast.success("Item added to cart");
    }
  };

  

  useEffect(() => {
    setIsFavorite(favorites.some((favoriteProduct) => favoriteProduct.id === id));
  }, [favorites, id]);

  const handleAddToFavorites = () => {
    addToFavorites(product);
    setIsFavorite(true);
    toast.success('Item added to favorites');
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(id);
    setIsFavorite(false);
    toast.error('Item removed from favorites');
  };


  const isItemAdded = cartItems.some((item) => item.id === id);

  return (
    <div className="max-w-xs mx-1 bg-white shadow-md rounded-lg overflow-hidden w-72">
      <button
        className={
          isFavorite
            ? "text-red-500 bg-gray-100 rounded-full w-8 h-8 bg-transparent border-0 inline-flex items-center justify-center ml-4"
            : "rounded-full w-8 h-8 bg-gray-300 text-white inline-flex items-center justify-center ml-4"
        }
        onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
      >
        <FaHeart  fontSize={16} />
      </button>
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
