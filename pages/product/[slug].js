import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import {products} from '@/utils/constant';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import useCartStore from '@/store/cartFunc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFavoritesStore from '@/store/favoritesStore';
import Link from 'next/link';
import RelatedProductCard from '@/components/RelatedProductCard';

const Product = ({ product }) => {
  const { name, price, imageUrl, id, description, slug } = product;

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);
  const favorites = useFavoritesStore((state) => state.favorites);

  const [isFavorite, setIsFavorite] = useState(false);

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

  // 

  const handleToggleCart = () => {
    const product = { name, price, imageUrl, id };

    if (cartItems.some((item) => item.id === id)) {
      removeFromCart(product);
      toast.error('Item removed from cart');
    } else {
      addToCart(product);
      toast.success('Item added to cart');
    }
  };

  const isItemAdded = cartItems.some((item) => item.id === id);

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-auto lg:h-auto h-3/4 object-cover object-center rounded"
              src={imageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
              <div className="flex mb-4">
                {/* Rating stars */}
              </div>
              <p className="leading-relaxed">{description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex flex-row gap-5">
                <span className="title-font font-medium text-2xl text-gray-900">${price}</span>

                <Link href={`/productCheckout/${slug}`}>
              
                <button className="flex ml-auto text-white bg-emerald-900 border-0 py-2 px-6 focus:outline-none hover:bg-rose-500 rounded">
                  Buy Now
                </button>
                </Link>
                {/* Favorite */}
                <button
                  className={
                    isFavorite
                      ? 'text-red-500 rounded-full w-10 h-10 bg-transparent border-0 inline-flex items-center justify-center ml-4'
                      : 'rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'
                  }
                  onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
                >
                  <FaHeart />
                </button>
                <button
                  className={
                    isItemAdded
                      ? 'bg-green-600 rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-white ml-4'
                      : 'bg-gray-200 rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'
                  }
                  onClick={handleToggleCart}
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* related products */}
      <section>
       <h1 className='text-gray-900 text-3xl title-font font-medium mb-5 mx-10 m'>Related products</h1>
       <div className='flex flex-row overflow-x-scroll  mb-10'>
       {products.map((product) => (
                <RelatedProductCard
                  key={product.id}
                  slug={product.slug}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              ))}
       </div>
      </section>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  // Generate paths for all products
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the data for the specific product based on the slug
  const { slug } = params;
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}
