import React, { useState } from "react";

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState("pink");

  const color_options = [
    { id: 1, color: "pink", class: "bg-theme-pink" },
    { id: 2, color: "blue", class: "bg-theme-blue" },
    { id: 3, color: "green", class: "bg-green-500" },
    { id: 4, color: "purple", class: "bg-purple-500" },
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className="text-gray-700 font-bold mt-5 mb-2">Colors</div>
      <div className="flex space-x-3">
        {color_options.map((colorOption) => (
          <div
            key={colorOption.id}
            onClick={() => handleColorChange(colorOption.color)}
            className="cursor-pointer"
          >
            <div
              className={`w-6 h-6 rounded-full ${
                colorOption.class
              } flex items-center justify-center ${
                selectedColor === colorOption.color
                  ? "ring-2 ring-gray-400 ring-offset-1"
                  : ""
              }`}
            >
              {selectedColor === colorOption.color && (
                <span className="text-white text-xs">✓</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
