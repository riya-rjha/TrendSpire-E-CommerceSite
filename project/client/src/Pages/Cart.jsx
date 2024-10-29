import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  let username = localStorage.getItem("username");
  const [products, setProducts] = useState([]);
  const [calSum, setCalcSum] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getProductCart = async () => {
      const getCartForUser = await axios.get(
        `${import.meta.env.VITE_baseURL}/cart/`,
        { params: { userID: localStorage.getItem("userID") } }
      );
      setProducts(getCartForUser.data.products);
    };
    getProductCart();
  }, []);

  useEffect(() => {
    const calculateSum = () => {
      let sum = 0;
      products.forEach((prod) => {
        sum += prod.price * prod.quantity;
      });
      setCalcSum(sum);
    };
    calculateSum();
  }, [products]);

  useEffect(() => {
    let disc = 0;
    products.forEach((prod) => {
      disc += prod.discount;
    });
    setDiscount(disc);
  }, [products]);

  const applyDiscount = () => {
    if (count !== 0) {
      return;
    }
    let currSum = calSum;
    let costAfterDiscount = (discount / 100) * currSum;
    let finalSum = (currSum - costAfterDiscount).toFixed(2);
    setCalcSum(finalSum);
    setCount(count + 1);
  };

  const removeDiscount = () => {
    let sum = 0;
    products.forEach((prod) => {
      sum += prod.price * prod.quantity;
    });
    setCalcSum(sum);
    setCount(0);
  };

  const updateQuantity = (product, action) => {
    const updatedProducts = products
      .map((prod) => {
        if (prod._id === product._id) {
          const newQuantity =
            action === "increment" ? prod.quantity + 1 : prod.quantity - 1;
          return { ...prod, quantity: newQuantity };
        }
        return prod;
      })
      .filter((prod) => prod.quantity >= 0);
    setProducts(updatedProducts);
    setQuantity(product, action);
  };

  const setQuantity = async (product, action) => {
    try {
      await axios.put(`${import.meta.env.VITE_baseURL}/cart/`, {
        userID: localStorage.getItem("userID"),
        productID: product._id.toString(),
        action: action,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-green-50 min-h-screen p-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">
            Shopping Cart{" "}
            <span className="italic font-black capitalize underline text-purple-800">
              Of {username.toLowerCase()}
            </span>
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Here you go! Happy shopping 🎉
          </p>
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-6 rounded-lg shadow-md my-6"
            >
              <div className="flex gap-4 border-b pb-4 mb-4">
                <img
                  src={product.image}
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-emerald-700">
                    {product.name}
                  </h2>
                  <p className="text-black text-lg font-semibold">
                    Category:{" "}
                    <span className="text-green-900 font-bold">
                      {product.category}
                    </span>
                  </p>
                  <p className="text-black text-lg font-semibold mt-1">
                    Discount:{" "}
                    <span className="text-green-900 font-bold">
                      {product.discount}%
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xl font-semibold text-emerald-700">
                    ${product.price}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(product, "decrement")}
                      className="bg-emerald-600 text-white px-2 py-1 rounded-l-md"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={product.quantity}
                      className="w-8 text-center outline-none border border-gray-300 p-[3px]"
                      readOnly
                    />
                    <button
                      onClick={() => updateQuantity(product, "increment")}
                      className="bg-emerald-600 text-white px-2 py-1 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col mb-4">
              <p className="text-lg font-semibold text-emerald-800">
                Price Details
              </p>
              {products.map((prod) => (
                <div key={prod._id} className="flex justify-between mt-4">
                  <p className="text-gray-700">{prod.name}</p>
                  <p className="text-gray-700">${prod.price}</p>
                </div>
              ))}

              <div className="flex justify-between mt-2 border-t pt-2">
                <p className="text-lg font-semibold text-emerald-800">Total</p>
                <p className="text-lg font-semibold text-emerald-800">
                  ${calSum}
                </p>
              </div>
              {count === 1 ? (
                <>
                  <p className="font-semibold mt-2 p-2 bg-slate-200 rounded-md">
                    Dare to click only if you're Jr. Ambani 🤭
                  </p>
                  <button
                    onClick={removeDiscount}
                    className="bg-red-600 text-white w-full py-2 rounded-md mt-4"
                  >
                    Remove {discount}% Discount
                  </button>
                </>
              ) : (
                <button
                  onClick={applyDiscount}
                  className="bg-emerald-600 text-white w-full py-2 rounded-md mt-4"
                >
                  Apply {discount}% Discount
                </button>
              )}
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-emerald-800">
                Cart Total
              </p>
              <p className="text-xl font-bold text-emerald-700 mt-2">
                ${calSum}
              </p>
              <Link to="/order">
                <button className="bg-emerald-600 text-white w-full py-2 rounded-md mt-4">
                  Proceed to Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
