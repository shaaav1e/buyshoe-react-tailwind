import React, { useState } from "react";

const Size = () => {
  const [selectedSize, setSelectedSize] = useState("M");

  const size_radio_buttons = [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 3, size: "L" },
    { id: 4, size: "XL" },
    { id: 5, size: "XXL" },
  ];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="mt-6">
      <div className="size-filter">
        <div className="text-gray-700 font-bold mb-2">Size</div>
        <div className="flex space-x-3">
          {size_radio_buttons.map((sizeOption) => (
            <div
              key={sizeOption.id}
              onClick={() => handleSizeChange(sizeOption.size)}
              className={`size-option w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ${
                selectedSize === sizeOption.size
                  ? "bg-theme-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {sizeOption.size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Size;
