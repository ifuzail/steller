import Link from "next/link";
import useCartStore from "@/store/cartFunc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RelatedProductCard = ({ name, price, imageUrl, id, slug }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const handleToggleCart = () => {
    const product = { name, price, imageUrl, id };

    if (cartItems.some((item) => item.name === name)) {
      removeFromCart(product);
      toast.error("Item removed from cart");
    } else {
      addToCart(product);
      toast.success("Item added to cart");
    }
  };

  const isItemAdded = cartItems.some((item) => item.id === id);

  return (
    <div className="max-w-xs mx-10 bg-white shadow-xl rounded-xl transform transition-all hover:scale-110 mb-10 ">
      <Link href={`/product/${slug}`}>
        <img
          className="w-full h-48 p-2 object-contain"
          src={imageUrl}
          alt={name}
        />
        <div className="py-4 px-6 ">
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
              ? "bg-red-500 text-white w-full h-10"
              : "bg-emerald-950 text-white w-full h-10"
          }
          onClick={handleToggleCart}
        >
          {isItemAdded ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default RelatedProductCard;
