import React from "react";
import Dots from "./Dots";

const Shoes = () => {
  return (
    <div className="shoe w-96 absolute -bottom-145 left-0">
      <img
        className="hover:rotate-90 transition-all duration-500"
        src="/nike-nobg.webp"
        alt="Nike-Shoes"
      />{" "}
      <div className="plus w-10 h-10 rounded-full bg-theme-pink text-white absolute top-4 left-26 cursor-pointer transform hover:scale-110 transition-all duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path
            fillRule="evenodd"
            d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
          ></path>
        </svg>
      </div>
      {/* Second Svg */}
      <div className="plus w-10 h-10 rounded-full bg-theme-blue text-white absolute bottom-4 right-2 cursor-pointer transform hover:scale-110 transition-all duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path
            fillRule="evenodd"
            d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
          ></path>
        </svg>
      </div>
      <Dots />
    </div>
  );
};

export default Shoes;
