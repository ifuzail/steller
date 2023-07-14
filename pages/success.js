import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow flex flex-col items-center space-y-6">
        <FiCheckCircle className="text-green-500 w-12 h-12" />

        <h2 className="text-2xl font-medium text-gray-800">Payment Successful</h2>
        <p className="text-gray-600">
          Thank you for your purchase! Your payment has been successfully processed.
        </p>

        <Link href="/">
          <button className="text-blue-500 hover:text-blue-600 font-medium">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
