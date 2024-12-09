import React, { useState } from "react";
import axios from "axios";
import data from "../Data/data.json";
import { enqueueSnackbar } from "notistack";

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = data.products.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory;
  });

  const displayedProducts =
    selectedCategory === "All"
      ? filteredProducts.slice(0, 12)
      : filteredProducts;

  const addToCart = async (product) => {
    try {
      await axios.post(`${import.meta.env.VITE_baseURL}/cart/`, {
        userID: localStorage.getItem("userID"),
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        discount: product.discount,
        quantity: product.quantity,
      });
      enqueueSnackbar("Item successfully added to cart!", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
    } catch (error) {
      enqueueSnackbar("Could not add to cart!", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
    }
  };

  const addToFavourites = async (product) => {
    try {
      await axios.post(`${import.meta.env.VITE_baseURL}/favs/`, {
        name: product.name,
        userID: localStorage.getItem("userID"),
        price: product.price,
        image: product.image,
        discount: product.discount,
      });
      enqueueSnackbar("Item successfully added to favourites!", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
    } catch (error) {
      // console.log(error.message);
      enqueueSnackbar("Product is already a favourite!", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-white to-neutral-50 p-4 md:p-8"
      id="NewArrivals"
    >
      <div className="text-center mb-8">
        <h1 className="exo-2-headings uppercase font-extrabold text-5xl text-[#134E4A] mb-4">
          New Arrivals
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Discover the latest fashion trends from Myntra and elevate your style!
          Shop now for a wide range of stylish outfits and accessories.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["All", ...data.categories].map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`bg-gray-200 text-black rounded-lg shadow-md text-center cursor-pointer transition-all delay-75 min-w-[200px] mt-3 p-4 ${
              selectedCategory === category
                ? "bg-gray-500 text-white"
                : "hover:bg-gray-300"
            }`}
          >
            <p className="text-base">{category}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden "
          >
            <img
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
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
                Rs. {product.price}
              </p>
              <div
                className={`text-lg mb-1 ${
                  product.stock === "yes" ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stock === "yes" ? (
                  <p className="font-bold">
                    In Stock, <span className="font-normal">Lucky you!</span>
                  </p>
                ) : (
                  <p className="font-bold">
                    Almost sold out,{" "}
                    <span className="font-normal">Hurry up!</span>
                  </p>
                )}
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#134E4A] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#0f3e3a] focus:outline-none focus:ring-2 focus:ring-[#134E4A] focus:ring-opacity-50 transition duration-300 w-full"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => addToFavourites(product)}
                  className="bg-[#134E4A] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#0f3e3a] focus:outline-none focus:ring-2 focus:ring-[#134E4A] focus:ring-opacity-50 transition duration-300 w-full mt-4"
                >
                  Add to Favourites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
