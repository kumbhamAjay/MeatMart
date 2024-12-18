import React from "react";

const CircleDesign = () => {
  return (
    <div style={{height:"300px"}} className="w-100 h-200 flex items-center bg-black text-white mx-20 rounded-full">
        <div className="mx-20">
            <ul>
            <li>Become the most trusted online destination for meat products.</li><br />
            <li>Promote healthier lifestyles with high-quality, responsibly sourced meats.</li><br />
            <li>Lead the industry in supporting sustainable and ethical farming practices.</li><br />
            <li>Foster global trust and preference for our brand.</li><br />
            </ul>
        </div>
        <div className="relative w-56 h-56 flex items-center mx-auto justify-center bg-blue border-5 rounded-full shadow-lg">
        
        <svg className="absolute w-full h-full" viewBox="0 0 220 220">
          {/* Outer Circle - Background Segments */}
          {/* MISSION Half (Left Side) */}
          <circle
            cx="110"
            cy="110"
            r="100"
            fill="none"
            stroke="#333"
            strokeWidth="3"
          />
          <path
            d="M110,10 A100,100 0 0,1 110,210"
            fill="#ff5722" // Orange color for MISSION background
          />
  
          {/* VISION Half (Right Side) */}
          <path
            d="M110,10 A100,100 0 0,0 110,210"
            fill="#2196f3" // Blue color for VISION background
          />
  
          {/* Left Side Curved Text (MISSION) */}
          <path
            id="leftSidePath"
            d="M 110,40 A 70,70 0 0,1 110,180"
            fill="none"
          />
          <text>
            <textPath
              href="#leftSidePath"
              startOffset="50%"
              textAnchor="middle"
              className="curved-text"
            >
              <tspan className="mission-text">M</tspan>
              <tspan className="mission-text">I</tspan>
              <tspan className="mission-text">S</tspan>
              <tspan className="mission-text">S</tspan>
              <tspan className="mission-text">I</tspan>
              <tspan className="mission-text">O</tspan>
              <tspan className="mission-text">N</tspan>
            </textPath>
          </text>
  
          {/* Right Side Curved Text (VISION) */}
          <path
            id="rightSidePath"
            d="M 110,180 A 70,70 0 0,1 110,40"
            fill="none"
          />
          <text>
            <textPath
              href="#rightSidePath"
              startOffset="50%"
              textAnchor="middle"
              className="curved-text"
            >
              <tspan className="vision-text">V</tspan>
              <tspan className="vision-text">I</tspan>
              <tspan className="vision-text">S</tspan>
              <tspan className="vision-text">I</tspan>
              <tspan className="vision-text">O</tspan>
              <tspan className="vision-text">N</tspan>
            </textPath>
          </text>
        </svg>
  
        {/* Inner Circle */}
        <div className="w-20 h-20 bg-white border-4 border-green-500 rounded-full flex items-center justify-center text-lg font-bold text-gray-800 z-10 shadow-lg">
          <span>OUR</span>
        </div>
      </div>
      <div className="mx-20">
            <ul>
                <li>Provide fresh, premium-quality meat products.</li><br />
                <li>Deliver directly to customers' doors for maximum convenience.</li><br />
                <li>Commit to ethical sourcing and sustainable practices.</li><br />
                <li>Ensure customer satisfaction through exceptional service.</li><br />
            </ul>
        </div>
    </div>
    
  );
};

export default CircleDesign;
