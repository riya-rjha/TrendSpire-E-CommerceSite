import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Image */}
      <div className="hidden md:block">
        <img src="path/to/your/left-image.jpg" alt="Fashion Left" className="w-full max-w-xs object-cover rounded-lg shadow-md" />
      </div>
      
      {/* Text Section */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
          Stay Ahead <br /> of the Curve:
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Get Trend Insights <br /> with Our AI Chatbot
        </p>
        <button className="mt-6 px-6 py-3 bg-teal-900 text-white font-bold rounded-lg shadow hover:bg-teal-700 transition duration-300">
          TALK TO IVY!
        </button>
      </div>

      {/* Right Image */}
      <div className="hidden md:block">
        <img src="path/to/your/right-image.jpg" alt="Fashion Right" className="w-full max-w-xs object-cover rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Main;
