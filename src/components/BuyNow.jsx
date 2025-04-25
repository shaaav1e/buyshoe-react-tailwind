import React from "react";

const BuyNow = () => {
  return (
    <div className="flex justify-between mt-10">
      <button className="bg-theme-pink rounded-full px-16 py-3.5 text-white font-medium uppercase flex items-center gap-4 relative shadow-2xl shadow-theme-pink">
        <span>Buy Now</span>
        <div className="w-10 h-10 rounded-full bg-theme-blue flex items-center justify-center text-white transform hover:scale-110 transition-all duration-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
          >
            <path
              fillRule="evenodd"
              d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default BuyNow;
