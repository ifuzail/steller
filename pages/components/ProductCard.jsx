import Link from 'next/link';
import useCartStore from '../store/cartFunc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ name, price, imageUrl, id, slug }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const handleToggleCart = () => {
    const product = { name, price, imageUrl , id };
  
    if (cartItems.some((item) => item.name === name)) {
      removeFromCart(product);
      toast.error('Item removed from cart');
    } else {
      addToCart(product);
      toast.success('Item added to cart');
    }
  };

  const isItemAdded = cartItems.some((item) => item.id === id);
  const buttonClasses = `bg-${isItemAdded ? 'white border-2 border-green-500' : 'slate-900'} hover:bg-${
    isItemAdded ? 'white' : 'slate-700'
  } text-${isItemAdded ? 'green-500' : 'white'} font-normal text-xs px-2 py-2 rounded-lg`;

  return (
    <div className="max-w-xs mx-1 p-10 bg-white shadow-md rounded-lg overflow-hidden">
      <Link href={`/product/${slug}`}>
      <img className="w-full h-48 p-2 object-cover" src={imageUrl} alt={name} />
      <div className="py-4 px-6">
        <h2 className="text-gray-800 text-lg font-semibold truncate hover:underline hover:text-red-600">{name}</h2>
        <p className="text-gray-600">${price}</p>
      </div>
        </Link>
        <div className="flex justify-start gap-3 items-center mt-4">
          <button className={buttonClasses} onClick={handleToggleCart}>
            {isItemAdded ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
  
  );
};

export default ProductCard;
