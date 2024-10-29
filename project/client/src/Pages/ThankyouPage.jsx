import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-green-900 mb-4 text-center">
        Thank You for Your Purchase!
      </h1>
      <p className="text-xl text-green-700 mb-8 text-center max-w-4xl">
        We’re excited to have you as a valued customer. Your order has been
        successfully placed and will be processed shortly. You’ll receive an
        email confirmation with all the details.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl mb-8">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Order Summary
        </h2>

        <div className="border-t border-b border-green-200 py-4 mb-4">
          <p className="text-lg text-green-700 mb-2">
            Order Number:{" "}
            <span className="font-bold text-green-900">#123456</span>
          </p>
          <p className="text-lg text-green-700 mb-2">
            Estimated Delivery:{" "}
            <span className="font-bold text-green-900">October 30, 2024</span>
          </p>
          <p className="text-lg text-green-700">
            Shipping Method:{" "}
            <span className="font-bold text-green-900">Express Delivery</span>
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <p className="text-green-700 text-md text-center">
            We’ll notify you once your package is on the way.
          </p>
        </div>
      </div>

      <div className="text-center mb-10 max-w-xl">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Need Help?
        </h3>
        <p className="text-green-700 -mb-3">
          Our dedicated support team is here for you. If you have any questions
          or concerns about your order, please don’t hesitate to reach out.
        </p>
      </div>

      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-green-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-green-800 focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
        >
          Continue Shopping
        </Link>
      </div>

      <footer className="mt-7 text-green-500 text-center text-sm max-w-lg">
        <p>Thank you for choosing us. We look forward to serving you again!</p>
      </footer>
    </div>
  );
};

export default ThankYouPage;
