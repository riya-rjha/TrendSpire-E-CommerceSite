import React from "react";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Thank You!</h1>
      <p className="text-lg text-green-600 mb-6">
        Your order has been placed successfully.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-3/4 md:w-1/2">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">
          Order Summary
        </h2>
        <p className="text-green-600">
          Order Number: <span className="font-bold">#123456</span>
        </p>
        <p className="text-green-600">
          Estimated Delivery:{" "}
          <span className="font-bold">October 30, 2024</span>
        </p>
      </div>
      <div className="mt-8">
        <a
          href="/"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Continue Shopping
        </a>
      </div>
      <footer className="mt-10 text-green-500">
        <p>If you have any questions, feel free to contact our support team!</p>
      </footer>
    </div>
  );
};

export default ThankYouPage;
