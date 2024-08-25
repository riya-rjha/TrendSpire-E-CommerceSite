import React from "react";

const Cart = () => {
  return (
    <div className="bg-green-50 min-h-screen p-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">
            Shopping Cart
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Here you go! Happy shopping 🎉
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex gap-4 border-b pb-4 mb-4">
              <img
                src="product-image.jpg"
                alt="Product"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-emerald-700">
                  Product Name
                </h2>
                <p className="text-gray-600">Category: Women</p>
                <p className="text-gray-600">Size: M</p>
                <div className="flex gap-2 mt-2">
                  <span className="w-6 h-6 bg-red-500 rounded-full"></span>
                  <span className="w-6 h-6 bg-black rounded-full"></span>
                  <span className="w-6 h-6 bg-green-500 rounded-full"></span>
                  <span className="w-6 h-6 bg-white border border-black rounded-full"></span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xl font-semibold text-emerald-700">$50.00</p>
                <div className="flex items-center mt-2">
                  <button className="bg-emerald-600  text-white px-2 py-1 rounded-l-md">
                    -
                  </button>
                  <input
                    type="text"
                    value="1"
                    className="w-8 text-center outline-none border border-gray-300 p-[3px]"
                    readOnly
                  />
                  <button className="bg-emerald-600 text-white px-2 py-1 rounded-r-md">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-4 border-b pb-4 mb-4">
              <img
                src="product-image.jpg"
                alt="Product"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-emerald-700">
                  Product Name
                </h2>
                <p className="text-gray-600">Category: Women</p>
                <p className="text-gray-600">Size: M</p>
                <div className="flex gap-2 mt-2">
                  <span className="w-6 h-6 bg-red-500 rounded-full"></span>
                  <span className="w-6 h-6 bg-black rounded-full"></span>
                  <span className="w-6 h-6 bg-green-500 rounded-full"></span>
                  <span className="w-6 h-6 bg-white border border-black  rounded-full"></span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xl font-semibold text-emerald-700">$50.00</p>
                <div className="flex items-center mt-2">
                  <button className="bg-emerald-600 text-white px-2 py-1 rounded-l-md">
                    -
                  </button>
                  <input
                    type="text"
                    value="1"
                    className="w-8 outline-none text-center border border-gray-300 p-[3px]"
                    readOnly
                  />
                  <button className="bg-emerald-600 text-white px-2 py-1 rounded-r-md">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col mb-4">
              <p className="text-lg font-semibold text-emerald-800">
                Price Details
              </p>
              <div className="flex justify-between mt-4">
                <p className="text-gray-700">Item 1</p>
                <p className="text-gray-700">$50.00</p>
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-gray-700">Item 2</p>
                <p className="text-gray-700">$50.00</p>
              </div>

              <div className="flex justify-between mt-2 border-t pt-2">
                <p className="text-lg font-semibold text-emerald-800">Total</p>
                <p className="text-lg font-semibold text-emerald-800">
                  $100.00
                </p>
              </div>
              <button className="bg-emerald-600 text-white w-full py-2 rounded-md mt-4">
                Apply 30% Discount
              </button>
              <button className="bg-emerald-700 text-white w-full py-2 rounded-md mt-2">
                Apply
              </button>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-emerald-800">
                Cart Total
              </p>
              <p className="text-xl font-bold text-emerald-700 mt-2">$35.00</p>
              <button className="bg-emerald-600 text-white w-full py-2 rounded-md mt-4">
                Proceed to Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
