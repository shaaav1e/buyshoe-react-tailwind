import React, { useState } from "react";

const Amount = () => {
  const [amount, setAmount] = useState(1);

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setAmount(value);
    }
  };

  return (
    <div>
      <div className="mt-5 text-gray-700 font-bold">Amount</div>
      <div className="flex items-center justify-between bg-gray-100 p-2 rounded-full w-64 mt-1">
        <button
          onClick={handleDecrement}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L18 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <input
          type="text"
          value={amount}
          onChange={handleChange}
          className="bg-transparent w-10 text-center focus:outline-none"
        />

        <button
          onClick={handleIncrement}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6L12 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12L18 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Amount;
