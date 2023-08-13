import React from 'react';
import CheckoutForm from '@/components/CheckoutForm';
import useCartStore from '@/store/cartFunc';

const CheckoutPage = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="py-10">
      <CheckoutForm cartItems={cartItems} />
    </div>
  );
};

export default CheckoutPage;
