import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-gray-900">
      <div className="relative">
        <div
          className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-emerald-500 to-green-400 
                        rounded-full opacity-75 blur-lg animate-pulse"
        ></div>
        <div className="relative bg-white p-6 rounded-full shadow-2xl">
          <div className="bg-gradient-to-br from-teal-500 to-green-400 p-4 rounded-full">
            <svg
              className="animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="64"
              height="64"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600 font-medium tracking-wide animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
