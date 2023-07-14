import React, { useState } from 'react';
import useCartStore from '@/store/cartFunc';
import Link from 'next/link';

const CheckoutPage = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCVC] = useState('');

  const handlePayNow = () => {
    // Perform payment processing logic here

    // Redirect to success page after successful payment
    router.push('/success');
  };

  const isFormValid =
  firstName.trim() !== '' &&
  lastName.trim() !== '' &&
  email.trim() !== '' &&
  phone.trim() !== '' &&
  cardNumber.trim() !== '' &&
  expirationDate.trim() !== '' &&
  cvc.trim() !== '';

  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2 ">
        <div className="bg-slate-900 py-12 md:py-24">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-yellow-200"></span>
              <h2 className="font-medium text-white">Checkout Page</h2>
            </div>

            {cartItems.length > 0 ? (
              <div>
                <p className="text-2xl font-medium tracking-tight text-white">
                  ${getTotalPrice(cartItems)}
                </p>

                <p className="mt-5 text-sm text-white font-semibold ">
                  For the purchase of {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </p>

                <div className="flow-root bg-slate-100 p-3 rounded-xl mt-4">
                  <ul className="-my-4 divide-y divide-slate-900 flex flex-col gap-5">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex items-center gap-4 py-4">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-16 w-16 rounded object-cover"
                        />

                        <div>
                          <h3 className="text-sm text-gray-900 truncate w-72">{item.name}</h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline text-lg font-bold">Price: </dt>
                              <dd className="inline text-lg ">{item.price}</dd>
                            </div>

                            <div>
                              <dt className="inline text-base font-bold">quantity: </dt>
                              <dd className="inline text-base">{item.quantity}</dd>
                            </div>
                          </dl>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-red-500 font-bold text-center relative top-1/2 ">Your have no Products</p>
            )}
          </div>
        </div>
 
  
  
        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-6">
                <label 
                htmlFor="firstName" className="block text-xs font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  id="firstName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="lastName" className="block text-xs font-medium text-gray-700">
                  Last Name
                </label>
                <input
                
                  type="text"
                  required
                  id="lastName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                  Email
                </label>
                <input
                  
                  type="email"
                  required
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Card Details
                </legend>
                <div className="mt-1 space-y-2">
                  <div className="flex">
                    <input
                      type="text"
                      required
                      name="cardNumber"
                      id="cardNumber"
                      className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      placeholder="Card Number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expirationDate"
                        className="block text-xs font-medium text-gray-700"
                      >
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        required
                        name="expirationDate"
                        id="expirationDate"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md sm:text-sm border-gray-300"
                        placeholder="MM/YY"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-xs font-medium text-gray-700"
                      >
                        CVC
                      </label>
                      <input
                        type="text"
                        required
                        name="cvc"
                        id="cvc"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md sm:text-sm border-gray-300"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(e) => setCVC(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="col-span-6">
                <Link href='/success'>
                <button
                  type="submit"
                  className={`mt-8 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded ${
                    !isFormValid && 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!isFormValid}
                >
                  Pay Now
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const getTotalPrice = (cartItems) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return totalPrice.toFixed(2);
};

export default CheckoutPage;
