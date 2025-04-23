import React from "react";

const Card = () => {
  return (
    // Gradient
    <div className="h-screen bg-gradient-to-tr from-theme-blue to-theme-pink flex justify-center items-center">
      {/* border */}
      <div className="border boder-gray-300 w-1/2 h-4/5 p-10 relative">
        {/* circles on both sides */}
        <div className="circle w-6 h-6 border border-gray-100 rounded-full absolute left-0 top-0"></div>
        <div className="circle w-12 h-12 absolute right-0 top-0">
          <div className="w-full h-full absolute left-0 top-0 border border-gray-100 rounded-full"></div>
          <div className="w-6 h-6 absolute left-7 top-6 border-3 border-gray-100 rounded-full"></div>
        </div>
        {/* end of circles on both sides */}
        {/* ____________________________ */}
        {/* card content */}
        <div className="card w-full h-full rounded-2xl b-gray-100 flex flex-wrap ">
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
              <div className="big-number absolute left-32 top-0 bg-gradient-to-tr from-theme-pink  to-theme-blue text-transparent bg-clip-text text-shadow">
                <span
                  className="text-[18rem] leading-none font-bold
                  font-pt-sans 
                "
                >
                  32
                </span>
              </div>
              {/* Shoe */}
              <div className="shoe w-96 absolute -bottom-145 left-0">
                <img src="/public/nike-nobg.webp" alt="Nike-Shoes" />
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
              </div>
              {/* ending of shoe */}

              {/* dots */}
              <div className="dots"></div>
            </div>
          </div>
          <div className="right-side w-1/2 bg-white rounded-2xl"></div>
        </div>
        {/* end of card content */}
      </div>
    </div>
  );
};

export default Card;
