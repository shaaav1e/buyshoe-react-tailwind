import React from "react";

const Circles = () => {
  return (
    <>
      <div className="circle w-6 h-6 border border-gray-100 rounded-full absolute left-0 top-0"></div>
      <div className="circle w-12 h-12 absolute right-0 top-0">
        <div className="w-full h-full absolute left-0 top-0 border border-gray-100 rounded-full"></div>
        <div className="w-6 h-6 absolute left-7 top-6 border-3 border-gray-100 rounded-full"></div>
      </div>
    </>
  );
};

export default Circles;
