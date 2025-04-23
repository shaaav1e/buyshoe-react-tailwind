import React from "react";
import Filters from "./Filters";

const RightProduct = () => {
  return (
    <>
      <div className="flex justify-end ">
        <img src="/public/run-wild.jpg" alt="shoe-icon" className="w-48 " />
      </div>

      <div className="price mt-5">
        <span className="price font-bold text-3xl">PKR 20,000</span>
        <p className="text-lg text-gray-700 mt-3 leading-5">
          Unleash your inner athlete with the latest Nike runners built for
          speed, comfort, and style. Engineered for every stride, whether you’re
          on the track or the streets.
          <Filters />
        </p>
      </div>
    </>
  );
};

export default RightProduct;
