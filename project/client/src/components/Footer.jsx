import React from "react";
import { Link } from "react-router-dom";
import githubImage from '../../public/images/github.png';
import linkedinImage from '../../public/images/linkedin.png';
import twitterImage from '../../public/images/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-[#134E4A] text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="hidden md:flex flex-col md:flex-row md:justify-between gap-12">
          <div className="flex flex-col mb-12 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Exclusive</h2>
            <p className="text-xl mb-4">Subscribe</p>
            <p className="mb-6">Get 35% off on your first order</p>
            <div className="flex items-center bg-white text-[#134E4A] rounded">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l bg-white text-[#134E4A] border-none focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#5f9ea0] text-white rounded-r hover:bg-[#0f3d37] transition-colors duration-300">
                Send
              </button>
            </div>
          </div>

          <div className="flex flex-col mb-12 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Support</h2>
            <p className="text-base mb-2 cursor-default hover:text-teal-300">
              111 Bowenpally Road, Secunderabad <br/> Hyderabad
            </p>
            <p className="text-base mb-2 cursor-default hover:text-teal-300">
              exclusive@gmail.com
            </p>
            <p className="text-base cursor-default hover:text-teal-300">
              7888-4314-41312
            </p>
          </div>

          <div className="flex flex-col mb-12 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Account</h2>
            <ul className="text-base">
              <li className="mb-2 cursor-pointer hover:text-teal-300">
                My Account
              </li>
              <Link to="/user/register">
                <li className="mb-2 cursor-pointer hover:text-teal-300">
                  Login / Register
                </li>
              </Link>
              <Link to="/cart">
                <li className="mb-2 cursor-pointer hover:text-teal-300">
                  Cart
                </li>
              </Link>
              <li className="mb-2 cursor-pointer hover:text-teal-300">
                Wishlist
              </li>
              <li className="cursor-pointer hover:text-teal-300">Shop</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-base">
              <li className="mb-2 hover:text-teal-300">Privacy Policy</li>
              <li className="mb-2 hover:text-teal-300">Terms Of Use</li>
              <li className="mb-2 hover:text-teal-300">FAQ</li>
              <li className="hover:text-teal-300">Contact</li>
            </ul>
            <div className="flex flex-col mt-6">
              <h2 className="text-2xl font-semibold mb-4">Download App</h2>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/riya-rjha"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={githubImage}
                    alt="GitHub"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/riya-ranjan-jha-751688249/"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={linkedinImage}
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://twitter.com/riya_rjha"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={twitterImage}
                    alt="Twitter"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-sm">
            © 2024 Exclusive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
