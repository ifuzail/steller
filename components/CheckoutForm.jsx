import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';

const CheckoutForm = ({ cartItems }) => {
  const { register, handleSubmit, control, formState: { errors }, watch } = useForm();
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotalPrice(total);
  }, [cartItems]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/submitOrder', {
        ...data,
        cartItems,
      });
      console.log(response.data);
      router.push('/success');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-2">
            <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover mr-3" />
            <div>
              <p className="text-gray-600 w-72 truncate">{item.name}</p>
              <p className="font-semibold">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
        <p className="font-semibold mt-2">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            {...register('fullName', { required: true })}
            className={`input ${errors.fullName ? 'border-red-500' : 'bg-slate-200 rounded'}`}
          />
          {errors.fullName && <span className="text-red-600">Full Name is required</span>}
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className={`input ${errors.email ? 'border-red-500' : 'bg-slate-200 rounded'}`}
          />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2">Address</label>
        <input
          type="text"
          {...register('address', { required: true })}
          className={`input ${errors.address ? 'border-red-500' : 'bg-slate-200 rounded w-80'}`}
        />
        {errors.address && <span className="text-red-600">Address is required</span>}
      </div>

      {/* Card Details */}
      <div className="mb-6">
        <label className="block mb-2">Card Number</label>
        <Controller
          name="cardNumber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="text" {...field} className={`input ${errors.cardNumber ? 'border-red-500' : 'bg-slate-200 rounded w-80'}`} />
          )}
        />
        {errors.cardNumber && <span className="text-red-600">Card Number is required</span>}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2">Expiration Date</label>
          <Controller
            name="expDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} className={`input ${errors.expDate ? 'border-red-500' : 'bg-slate-200 rounded'}`} />
            )}
          />
          {errors.expDate && <span className="text-red-600">Expiration Date is required</span>}
        </div>
        <div>
          <label className="block mb-2">CVV</label>
          <Controller
            name="cvv"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} className={`input ${errors.cvv ? 'border-red-500' : 'bg-slate-200 rounded'}`} />
            )}
          />
          {errors.cvv && <span className="text-red-600">CVV is required</span>}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full"
      >
        Submit Order
      </button>
    </form>
  );
};

export default CheckoutForm;
