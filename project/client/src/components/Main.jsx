import React from "react";
import { Link } from "react-router-dom";
import fashion1 from '../../public/images/fashion-1.avif';
import fashion2 from '../../public/images/fashion-2.avif';
import fashion3 from '../../public/images/fashion-3.avif';
import fashion4 from '../../public/images/fashion-4.avif';
import fashion5 from '../../public/images/fashion-5.avif';
import fashion6 from '../../public/images/fashion-6.avif';

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-between p-10 space-y-6 md:space-y-0 md:space-x-6">
      <div className="hidden md:block">
        <img
          src={fashion2}
          alt="Fashion Left"
          className="w-full max-w-xs object-cover rounded-lg shadow-md"
        />
        <img
          src={fashion5}
          alt="Fashion Left"
          className="w-full max-w-xs object-cover mt-8 rounded-lg shadow-md"
        />
      </div>

      <div className="flex flex-col items-center text-center md:text-left max-w-lg w-full md:flex-grow">
        <img
          src={fashion4}
          alt="Fashion Top"
          className="w-full object-cover rounded-lg shadow-md mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-semibold text-red-800 leading-tight kalnia-glaze-main-heading text-center">
          Stay Ahead of the Curve:
        </h1>
        <p className="mt-4 text-2xl text-gray-600">
          Get Trend Insights with Our AI Chatbot
        </p>
        <Link to="/chat">
          <button className="mt-6 px-6 py-3 bg-teal-900 text-white font-bold rounded-lg shadow hover:bg-teal-700 transition duration-300">
            TALK TO IVY!
          </button>
        </Link>
        <img
          src={fashion3}
          alt="Fashion Bottom"
          className="w-full object-cover rounded-lg shadow-md mt-6"
        />
      </div>

      <div className="hidden md:block">
        <img
          src={fashion1}
          alt="Fashion Right"
          className="w-full max-w-xs object-cover rounded-lg shadow-md h-[480px]"
        />
        <img
          src={fashion6}
          alt="Fashion Right"
          className="w-full mt-8 max-w-xs object-cover rounded-lg shadow-md h-[480px]"
        />
      </div>
    </div>
  );
};

export default Main;
