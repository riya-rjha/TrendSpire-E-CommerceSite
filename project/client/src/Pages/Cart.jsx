import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  let username = localStorage.getItem("username");
  const [products, setProducts] = useState([]);
  const [calSum, setCalcSum] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [count, setCount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
      if (prod.quantity > 0) {
        disc += prod.discount * prod.quantity;
      }
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

  useEffect(() => {
    const totalQuantityCheck = () => {
      let totalQuantity = 0;
      products.map((prod) => {
        totalQuantity += prod.quantity;
      });
      setTotalQuantity(totalQuantity);
    };

    totalQuantityCheck();
  }, [products]);

  return (
    <div className="bg-green-50  p-6 md:p-12 lg:p-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Shopping Cart{" "}
            <span className="italic font-black capitalize underline text-emerald-900">
              of {username.toLowerCase()}
            </span>
          </h1>
          <p className="text-lg mb-8 text-green-700">
            Here you go! Happy shopping 🎉
          </p>
          {totalQuantity > 0 ? (
            <div className="space-y-6">
              {products.map((product) => (
                <>
                  {product.quantity > 0 && (
                    <div
                      key={product._id}
                      className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
                    >
                      <div className="flex gap-4">
                        <img
                          src={product.image}
                          alt="Product"
                          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                            {product.name}
                          </h2>
                          <p className="text-gray-600">
                            Category:{" "}
                            <span className="text-green-900 font-semibold">
                              {product.category}
                            </span>
                          </p>
                          <p className="text-gray-600 mt-1">
                            Discount:{" "}
                            <span className="text-green-900 font-semibold">
                              {product.discount}%
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-lg font-semibold text-green-800">
                            ${product.price}
                          </p>
                          <div className="flex items-center mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(product, "decrement")
                              }
                              className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-l-md"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={product.quantity}
                              className="w-10 p-[3px] outline-none text-center border border-gray-300"
                              readOnly
                            />
                            <button
                              onClick={() =>
                                updateQuantity(product, "increment")
                              }
                              className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-r-md"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          ) : (
            <div className="flex flex-col rounded-md  justify-center p-6 bg-white text-green-700 ">
              <h2 className="text-3xl font-semibold mb-2">
                Oops! Your Cart is Empty
              </h2>
              <p className="text-lg text-green-600 mb-6">
                Seems like your fashion cravings haven’t hit the cart yet! 😎
              </p>
              <div className="text-center bg-green-50 p-4 rounded-md">
                <p className="text-md font-medium text-green-700 mb-2">
                  “Shopping is cheaper than therapy... but empty carts are just
                  sad!”
                </p>
                <p className="text-green-600">
                  Time to fill this cart with some trendy vibes! 💪✨
                </p>
              </div>
              <Link to="/">
                <button className="mt-8 w-full px-6 py-3 transition-all delay-75 bg-green-500 text-white font-medium rounded hover:bg-green-600">
                  Start Shopping
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-green-800 mb-4">
              Price Details
            </p>
            {products.map(
              (prod) =>
                prod.quantity > 0 && (
                  <div key={prod._id} className="flex justify-between mt-2">
                    <p className="text-gray-700">{prod.name}</p>
                    <p className="text-gray-700">${prod.price * prod.quantity}</p>
                  </div>
                )
            )}
            <div className="flex justify-between mt-4 border-t pt-2">
              <p className="text-lg font-semibold text-green-800">Total</p>
              <p className="text-lg font-semibold text-green-800">${calSum}</p>
            </div>
            {count === 1 ? (
              <>
                <p className="text-md text-center text-red-600 mt-2">
                  Dare to click only if you're Jr. Ambani 🤭
                </p>
                <button
                  onClick={removeDiscount}
                  className={
                    totalQuantity > 0
                      ? "bg-red-600 text-white w-full py-2 rounded-md mt-4"
                      : "hidden"
                  }
                >
                  Remove {discount}% Discount
                </button>
              </>
            ) : (
              <button
                onClick={applyDiscount}
                className={
                  totalQuantity > 0
                    ? "bg-green-600 text-white w-full py-2 rounded-md mt-4"
                    : "hidden"
                }
              >
                Apply {discount}% Discount
              </button>
            )}
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-green-800">Cart Total</p>
            <p className="text-2xl font-bold text-green-800 mt-2">${calSum}</p>
            <Link to="/order">
              <button className="bg-green-600 text-white w-full py-2 rounded-md mt-4">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
