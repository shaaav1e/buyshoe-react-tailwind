import React from "react";

const Dots = () => {
  return (
    <div className="dots w-full absolute left-0 bottom-3 flex justify-center space-x-3">
      <span className="w-4 h-4 bg-white hover:bg-white rounded-full block cursor-pointer"></span>
      <span className="w-4 h-4 bg-white hover:bg-white rounded-full block cursor-pointer"></span>
      <span className="w-4 h-4 bg-white hover:bg-white rounded-full block cursor-pointer"></span>
    </div>
  );
};

export default Dots;
