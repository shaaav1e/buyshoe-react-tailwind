import React from "react";
import LeftProduct from "./LeftProduct";
import RightProduct from "./RightProduct";
import Circles from "./Circles";

const Card = () => {
  return (
    // Gradient
    <div className="h-screen bg-gradient-to-tr from-theme-blue to-theme-pink flex justify-center items-center">
      {/* Border */}
      <div className=" w-1/2 h-4/5 p-10 relative">
        <Circles />
        {/* Card content */}
        <div className="card w-full h-full rounded-2xl b-gray-100 flex flex-wrap ">
          <LeftProduct />
          <div className="right-side w-1/2 bg-white rounded-2xl py-6 pr-6 pl-16">
            <RightProduct />
          </div>
        </div>
        {/* end of card content */}
      </div>
    </div>
  );
};

export default Card;
