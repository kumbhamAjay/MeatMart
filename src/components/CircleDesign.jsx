import React from "react";

const CircleDesign = () => {
  return (
    <div className="flex flex-wrap items-center bg-lime-700 text-white rounded-lg mx-20 px-4 py-8 lg:px-20 lg:py-12">
      {/* Left Section: List */}
      <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0 ">
        <ul className="space-y-4 text-sm md:text-base">
          <li>Become the most trusted online destination for meat products.</li>
          <li>Promote healthier lifestyles with high-quality, responsibly sourced meats.</li>
          <li>Lead the industry in supporting sustainable and ethical farming practices.</li>
          <li>Foster global trust and preference for our brand.</li>
        </ul>
      </div>

      {/* Center Section: Circle */}
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center bg-blue border-4 border-white rounded-full shadow-lg">
          <svg className="absolute w-full h-full" viewBox="0 0 220 220">
            {/* Outer Circle */}
            <circle cx="110" cy="110" r="100" fill="none" stroke="#333" strokeWidth="3" />
            {/* MISSION Half */}
            <path d="M110,10 A100,100 0 0,1 110,210" fill="#ff5722" />
            {/* VISION Half */}
            <path d="M110,10 A100,100 0 0,0 110,210" fill="#2196f3" />
            {/* Curved Text for MISSION */}
            <path id="leftSidePath" d="M 110,40 A 70,70 0 0,1 110,180" fill="none" />
            <text>
              <textPath href="#leftSidePath" startOffset="50%" textAnchor="middle">
                <tspan className="mission-text">MISSION</tspan>
              </textPath>
            </text>
            {/* Curved Text for VISION */}
            <path id="rightSidePath" d="M 110,180 A 70,70 0 0,1 110,40" fill="none" />
            <text>
              <textPath href="#rightSidePath" startOffset="50%" textAnchor="middle">
                <tspan className="vision-text">VISION</tspan>
              </textPath>
            </text>
          </svg>
          {/* Inner Circle */}
          <div className="absolute w-12 h-12 sm:w-20 sm:h-20 bg-white border-4 border-green-500 rounded-full flex items-center justify-center text-xs sm:text-lg font-bold text-gray-800 shadow-lg">
            OUR
          </div>
        </div>
      </div>

      {/* Right Section: List */}
      <div className="w-full lg:w-1/3 px-4">
        <ul className="space-y-4 text-sm md:text-base">
          <li>Provide fresh, premium-quality meat products.</li>
          <li>Deliver directly to customers' doors for maximum convenience.</li>
          <li>Commit to ethical sourcing and sustainable practices.</li>
          <li>Ensure customer satisfaction through exceptional service.</li>
        </ul>
      </div>
    </div>
  );
};

export default CircleDesign;
