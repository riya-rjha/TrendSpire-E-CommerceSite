import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-teal-900 text-white h-16 md:h-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 sticky top-0 z-[111] backdrop-blur-md backdrop-brightness-75 bg-teal-900/60"
    >
      <Link to="/">
        {" "}
        <div className="text-2xl font-bold mb-4 md:mb-0 hidden md:block">
          TRENDSPIRE
        </div>
      </Link>

      <button
        className={`md:hidden text-3xl focus:outline-none my-3 ${isMenuOpen ? 'hamburger-rotate' : 'hamburger-reset'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "❌" : "☰"}
      </button>

      <div
        className={`flex flex-col md:flex-row md:gap-12 text-base ${
          isMenuOpen ? 'menu-enter' : 'menu-exit hidden md:flex'
        } md:translate-x-0 md:items-center fixed md:relative top-[60px] left-0 md:top-auto md:left-auto bg-teal-900 md:bg-transparent w-full md:w-auto h-screen md:h-auto z-50 transition-all duration-300`}
      >
        <a href="#" className="px-4 py-2 hover:text-teal-300 transition-colors">
          Home
        </a>
        <a href="#About" className="px-4 py-2 hover:text-teal-300 transition-colors">
          About Us
        </a>
        <a href="#NewArrivals" className="px-4 py-2 hover:text-teal-300 transition-colors">
          New Arrivals
        </a>
        <a href="#Testimonials" className="px-4 py-2 hover:text-teal-300 transition-colors">
          Testimonials
        </a>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <Link
            to='/user/register'
            className="bg-teal-700 px-4 py-2 rounded-lg text-base font-bold hover:bg-teal-600 transition-colors"
          >
            Register
          </Link>
          <a
            href="#"
            className="text-zinc-300 px-4 py-2 rounded-lg text-base bg-gray-800 hover:bg-gray-700 hover:text-white transition-colors font-bold"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
