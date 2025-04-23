import React from "react";
import Dots from "./Dots";
import Number from "./Number";
import Shoes from "./Shoes";
const LeftProduct = () => {
  return (
    <div className="left-side w-1/2 bg-gradient-to-tr from-theme-pink to-theme-blue shadow-3xl shadow-theme-blue rounded-2xl transform scale-105 relative">
      <div className="logo w-20 text-white absolute left-6 top-0">
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path
            fill-rule="evenodd"
            d="M6.406 16.8C3.152 20.622 0 25.235 0 28.903c0 2.118 1.781 5.094 6.133 5.094 2.351 0 4.687-.945 6.515-1.676C15.73 31.086 49.79 16.297 49.79 16.297c.328-.164.27-.371-.144-.27-.165.043-37.079 10.047-37.079 10.047-.71.2-1.437.309-2.144.309-3.192 0-5.344-1.531-5.344-4.88 0-1.296.406-2.862 1.328-4.702Z"
          />
        </svg>
        {/* Number */}
        <Number />
        {/* Shoe*/}
        <Shoes />
      </div>
    </div>
  );
};

export default LeftProduct;
