import React from 'react';
import CurvedText from './CurvedText';

const CircleLayout = () => {
  return (
    <div className="relative w-72 h-72 mx-auto">
      <div className="relative w-full h-full border-8 border-black rounded-full flex justify-center items-center">
        {/* Inner Circle with "Our" Text */}
        <div className="absolute top-1/5 left-1/5 w-3/5 h-3/5 bg-white rounded-full flex justify-center items-center">
          <span className="text-3xl font-bold">Our</span>
        </div>

        {/* Left text along the curve of the circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg]">
          <span className="rotate-[45deg]">Our Mission</span>
        </div>

        {/* Right text along the curve of the circle */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[90deg]">
          <span className="rotate-[-45deg]">Our Vision</span>
        </div> */}
        <CurvedText text={"mission"} radius={50} fontSize={24}/>
      </div>
    </div>
  );
};

export default CircleLayout;