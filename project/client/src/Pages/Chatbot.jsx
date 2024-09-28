import React from "react";
import { Link } from "react-router-dom";

const Chatbot = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-[aliceblue]">
      {/* Chatbot Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden min-h-[inherit] my-5">
        
        {/* Sidebar */}
        <div className="w-full lg:w-[120px] bg-teal-900 p-2 lg:p-4 flex flex-col items-center justify-between">
          <Link to="/">
            <div className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer bg-teal-800 rounded-full flex items-center justify-center mb-4">
                
              {/* Hamburger Icon */}
              <img 
                className=" w-8 h-8 lg:w-12 lg:h-12" 
                src="https://cdn-icons-png.freepik.com/256/10239/10239190.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" 
                alt="Back"
              />
            </div>
            
          </Link>
          <div className="w-16 hidden md:flex h-16 lg:w-20 lg:h-20 bg-red-300 rounded-3xl items-center justify-center mb-4">
            <img
              className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-3xl "
              src="https://img.freepik.com/premium-photo/smiling-friendly-woman-wearing-longsleeve-top-article-clothing-fashion_1061358-44588.jpg?ga=GA1.1.448448890.1721050418&semt=ais_user"
              alt="Placeholder"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6 flex flex-col">
          <div className="text-center text-neutral-700 text-xl lg:text-2xl xl:text-2xl font-montserrat font-bold mb-4">
            <div className="mb-2">Say hello to</div>
            <div className="text-[#134E4A] text-2xl lg:text-3xl font-extrabold mb-2 exo-2-headings">
              IVY!
            </div>
            <div className="text-md lg:text-lg xl:text-xl">
              Your personal assistant
              <br />
              for clothing recommendations
            </div>
          </div>

          {/* Input Bar */}
          <div className="bg-neutral-50 rounded-xl border-2 border-neutral-200 flex items-center mt-auto">
            <input
              type="text"
              placeholder="Type a new message"
              className="flex-1 p-2 text-neutral-700 text-sm lg:text-base font-montserrat rounded-l-xl focus:outline-none"
            />
            <div className="hidden md:flex">
            <button className="w-10 h-10 lg:w-12 lg:h-12 bg-green-800 rounded-full flex items-center justify-center ml-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-600 rounded-full">
                <img src="https://cdn-icons-png.freepik.com/256/4314/4314981.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" alt="Send" />
              </div>
            </button>
            <button className="w-10 h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center ml-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-600 rounded-full">
                <img src="https://cdn-icons-png.freepik.com/256/15155/15155521.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" alt="Emoji" />
              </div>
            </button>
            <button className="w-10 h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center ml-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-600 rounded-full">
                <img src="https://cdn-icons-png.freepik.com/256/5053/5053257.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid" alt="Attachment" />
              </div>
            </button>
            </div>
          </div>
        </div>

        {/* Trash Bin Icons (Visible only on larger screens) */}
        <div className="hidden w-full lg:flex lg:w-[80px] bg-teal-900 p-2 lg:p-4 justify-evenly flex-col items-center">
          {[...Array(7)].map((_, index) => (
            <button
              key={index}
              className="w-8 h-8 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2 lg:mb-4 cursor-default"
            >
              <div className="w-4 h-4 lg:w-6 lg:h-6 bg-gray-600 rounded-full"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
