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
        `${import.meta.env.VITE_baseURL}/cart/`
      );
      const productsInCart = getCartForUser.data.products;
      setProducts(productsInCart);
      // console.log(products);
    };
    getProductCart();
    // console.log(products[0].name);
  }, []);

  useEffect(() => {
    const calculateSum = () => {
      let sum = 0;
      products.map((prod) => {
        sum += prod.price;
        // console.log(sum);
      });
      setCalcSum(sum);
    };
    calculateSum();
  }, [products]);

  useEffect(() => {
    let disc = 0;
    products.map((prod) => {
      disc += prod.discount;
    });
    setDiscount(disc);
  }, [products]);

  const applyDiscount = () => {
    // console.log(discount + disc);
    if (count != 0) {
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
    products.map((prod) => {
      sum += prod.price;
      // console.log(sum);
    });
    setCalcSum(sum);
    setCount(0);
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
            <div className="bg-white p-6 rounded-lg shadow-md my-6">
              <div className="flex gap-4 border-b pb-4 mb-4">
                <img
                  src={product.image}
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-emerald-700">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">Category: {product.category}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="w-6 h-6 bg-red-500 rounded-full"></span>
                    <span className="w-6 h-6 bg-black rounded-full"></span>
                    <span className="w-6 h-6 bg-green-500 rounded-full"></span>
                    <span className="w-6 h-6 bg-white border border-black rounded-full"></span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xl font-semibold text-emerald-700">
                    ${product.price}
                  </p>
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
                <div className="flex justify-between mt-4">
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
                  Only click below if you're Jr. Ambani 🤭
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
