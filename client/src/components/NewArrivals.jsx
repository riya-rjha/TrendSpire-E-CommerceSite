import React from "react";
import data from "../Data/data.json";

const NewArrivals = () => {
  return (
    <div className="bg-gradient-to-b from-white to-neutral-50 p-4 md:p-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="exo-2-headings uppercase font-extrabold text-5xl text-[#134E4A] mb-4">
          New Arrivals
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Discover the latest fashion trends from Myntra and elevate your style!
          Shop now for a wide range of stylish outfits and accessories.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {data.categories.map((category, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md text-center ${
              index === 1 ? "bg-black" : "bg-neutral-50"
            } ${index === 1 ? "text-white" : "text-gray-500"} p-4`}
          >
            <p className="text-base">{category}</p>
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4">
              <p className="text-xl -ml-1 text-yellow-500">
                {"⭐".repeat(product.rating)}
              </p>

              <h2 className="text-xl font-semibold text-[#134E4A] mb-2">
                {product.name}
              </h2>
              <p className="text-xl font-semibold text-gray-700 mb-2">
                {product.price}
              </p>
              <p className="text-lg text-red-500 mb-1">Almost Sold Out</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="bg-[#134E4A] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#0f3e3a] focus:outline-none focus:ring-2 focus:ring-[#134E4A] focus:ring-opacity-50 transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
