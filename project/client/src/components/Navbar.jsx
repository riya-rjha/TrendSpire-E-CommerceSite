import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let username = localStorage.getItem("username");
  if (username !== null) {
    username =
      username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  } else {
    username = "User";
  }

  const reload = () => {
    window.location.reload();
  };

  const handleLogout = async () => {
    localStorage.removeItem("username");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userID");
    await axios.post(`${import.meta.env.VITE_baseURL}/user/logout`);
    username = "User";
  };

  return (
    <nav className="bg-teal-900 text-white h-16 md:h-20 flex flex-col md:flex-row justify-between px-6 md:px-12 sticky top-0 z-[111] backdrop-blur-md backdrop-brightness-75 bg-teal-900/60">
      <a href="/" onClick={reload}>
        <div className="text-2xl font-bold mt-5 mb-4 md:mb-0 hidden md:block">
          TRENDSPIRE
        </div>
      </a>

      <button
        className={`md:hidden text-3xl focus:outline-none my-3 ${
          isMenuOpen ? "hamburger-rotate" : "hamburger-reset"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "❌" : "☰"}
      </button>

      <div
        className={`flex flex-col gap-4 md:flex-row md:gap-12 text-base ${
          isMenuOpen ? "menu-enter" : "menu-exit hidden md:flex"
        } md:translate-x-0 md:items-center fixed md:relative top-[60px] left-0 md:top-auto md:left-auto bg-teal-900 md:bg-transparent w-full md:w-auto h-screen md:h-auto z-50 transition-all duration-300`}
      >
        <Link
          to="/"
          className="px-4 mt-3 md:mt-0 hover:text-teal-300 transition-colors"
        >
          Home
        </Link>
        <a
          href="#About"
          className="px-4 hover:text-teal-300 transition-colors"
        >
          About Us
        </a>
        <a
          href="#NewArrivals"
          className="px-4 hover:text-teal-300 transition-colors"
        >
          New Arrivals
        </a>
        <a
          href="#Testimonials"
          className="px-4 hover:text-teal-300 transition-colors"
        >
          Testimonials
        </a>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 ">
          <Link
            to="/user/login"
            className="text-zinc-300 px-4 py-2 md:rounded-lg text-base md:bg-gray-800 md:hover:bg-gray-700 hover:text-white transition-colors font-bold -mt-7 md:mt-0"
            onClick={handleLogout}
          >
            {username !== "User" ? "Logout" : "Login"}
          </Link>
          {username !== undefined && (
            <div className="md:bg-teal-700 underline px-4 py-2 md:rounded-lg text-base font-bold transition-colors -mt-4 md:mt-0">
              <p>{username.toUpperCase()}</p>
            </div>
          )}
        </div>

        {/* Simple Links for Cart and Favorites on Small Screens */}
        <div className="flex flex-col gap-4 md:hidden -mt-3 md:mt-4">
          <Link to="/cart" className="hover:text-green-500 ml-4 transition-colors">
            Cart
          </Link>
          <Link to="/favs" className="hover:text-red-500 ml-4 transition-colors">
            Favorites
          </Link>
        </div>

        {/* Icons for Cart and Favorites on Larger Screens */}
        <div className="hidden md:flex gap-6">
          <Link to="/cart">
            <FaShoppingCart className="text-3xl cursor-pointer transition-all delay-75 hover:text-green-500" />
          </Link>
          <Link to="/favs">
            <FaHeart className="text-3xl cursor-pointer transition-all delay-75 hover:text-red-500" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
