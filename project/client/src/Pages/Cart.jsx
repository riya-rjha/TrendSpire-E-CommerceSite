import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  let username = localStorage.getItem("username");
  const [products, setProducts] = useState([]);
  const [calSum, setCalcSum] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [remDisc, setRemDisc] = useState(false);

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
      let prodTotalAfterDiscount = 0;
      products.forEach((prod) => {
        let productTotal = prod.price * prod.quantity;
        sum += productTotal;
        let indivDiscount = prod.discount;
        // console.log("Indivi Discount: " + indivDiscount);
        let newPrice = prod.price * prod.quantity;
        // console.log("New Price: " + newPrice);
        let newDiscountedPrice = newPrice - (indivDiscount * newPrice) / 100;
        prodTotalAfterDiscount += newDiscountedPrice;
        // console.log("Prd total after discount: " + prodTotalAfterDiscount);
      });
      setCalcSum(sum);
      setPriceAfterDiscount(prodTotalAfterDiscount);
    };
    calculateSum();
  }, [products]);

  const applyDiscount = () => {
    let currSum = calSum;
    let discPrice = 0;
    products.forEach((prod) => {
      discPrice += (prod.price * prod.discount * prod.quantity) / 100;
      currSum = currSum - discPrice;
    });
    setCalcSum(parseInt(currSum.toFixed(2), 10));
    setRemDisc(!remDisc);
  };

  const removeDiscount = () => {
    let sum = 0;
    products.forEach((prod) => {
      sum += prod.price * prod.quantity;
    });
    setCalcSum(sum);
    setRemDisc(!remDisc);
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

  const setDiscountedPrice = () => {};

  return (
    <div className="bg-green-50 p-6 md:p-12 lg:p-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {username !== null ? (
          <>
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
                Shopping Cart (BETA VERSION)
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
                                ${(product.price * product.quantity).toFixed(2)}
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
                <div className="flex flex-col rounded-md justify-center p-6 bg-white text-green-700 ">
                  <h2 className="text-3xl font-semibold mb-2">
                    Oops! Your Cart is Empty
                  </h2>
                  <p className="text-lg text-green-600 mb-6">
                    Seems like your fashion cravings haven’t hit the cart yet!
                    😎
                  </p>
                  <div className="text-center bg-green-50 p-4 rounded-md">
                    <p className="text-md font-medium text-green-700 mb-2">
                      “Shopping is cheaper than therapy... but empty carts are
                      just sad!”
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
                        <p className="text-gray-700">
                          {prod.name}{" "}
                          {remDisc ? (
                            <>
                              <span className="text-green-600 font-semibold transition-all delay-150">
                                (-${prod.discount}%)
                              </span>
                              <span className="text-blue-600 font-semibold transition-all delay-150">
                                (x {prod.quantity})
                              </span>
                            </>
                          ) : (
                            <span></span>
                          )}
                        </p>
                        {remDisc ? (
                          <div>
                            <span className="line-through text-gray-400 mr-2">
                              ${(prod.price * prod.quantity).toFixed(2)}
                            </span>
                            <span>
                              $
                              {prod.quantity * prod.price -
                                (prod.quantity * prod.discount * prod.price) /
                                  100}
                            </span>
                          </div>
                        ) : (
                          <p className="text-gray-700">
                            ${(prod.price * prod.quantity).toFixed(2)}
                          </p>
                        )}
                      </div>
                    )
                )}
                <div className="flex justify-between mt-4 border-t pt-2">
                  <p className="text-lg font-semibold text-green-800">Total</p>
                  <p className="text-lg font-semibold text-green-800">
                    {remDisc ? (
                      <p> ${priceAfterDiscount.toFixed(2)}</p>
                    ) : (
                      <p>${calSum.toFixed(2)}</p>
                    )}
                  </p>
                </div>
                {remDisc ? (
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
                      Remove Discount
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
                    Apply Discount
                  </button>
                )}
              </div>
              <div className="bg-green-100 p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-green-800">
                  Cart Total
                </p>
                <p className="text-2xl font-bold text-green-800 mt-2">
                  {remDisc ? (
                    <p>${priceAfterDiscount.toFixed(2)}</p>
                  ) : (
                    <p> ${calSum.toFixed(2)}</p>
                  )}
                </p>
                <Link to="/order">
                  <button className="bg-green-600 text-white w-full py-2 rounded-md mt-4">
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-col items-center">
            <h1 className="text-5xl uppercase -mt-5 mb-6 text-center font-bold prompt-black">
              CART
            </h1>
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <h1 className="text-green-700 text-4xl font-bold">
                Cart? What Cart?
              </h1>
              <p className="text-gray-700 text-lg mt-4">
                Looks like you’re trying to sneak into your cart without logging
                in! Log in to make sure your favorite items don’t disappear into
                thin air!
              </p>
              <p className="text-green-700 font-semibold mt-6">
                "Don't worry, your cart is safe... once you're logged in!"
              </p>
              <Link
                to="/user/login"
                className="mt-14 relative top-[15px] bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Log In
              </Link>
              <div className="mt-10 text-lg text-gray-600">
                <p>
                  Don’t have an account? No worries!
                  <Link
                    to="/user/register"
                    className="text-green-600 underline hover:text-green-700"
                  >
                    {" "}
                    Sign up here
                  </Link>
                  ! We promise it’s quick and won't cost you a penny!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
