
import React from "react";

const CurvedText = ({ text, radius, fontSize }) => {
  const circleId = "circlePath";

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <svg
        width={radius * 2 + fontSize * 2}
        height={radius * 2 + fontSize * 2}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define a circle path */}
        <defs>
          <path
            id={circleId}
            d={`M ${radius}, ${radius} 
                m -${radius}, 0
                a ${radius},${radius} 0 1,1 ${radius * 2},0
                a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>

        {/* Add text on the circle */}
        <text fontSize={fontSize} fill="black">
          <textPath href={`#${circleId}`} startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedText;

