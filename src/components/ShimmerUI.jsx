import React from "react";

const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((index) => (
          <div className="m-2" key={index}>
            <div className="m-2 w-[300px] h-40 bg-gray-300 animate-pulse rounded-lg p-2 "></div>
            <ul>
              <li className="m-2 w-[300px] h-5 rounded-lg animate-pulse bg-gray-300"></li>
              <li className="m-2 w-[300px] h-5 rounded-lg animate-pulse bg-gray-300"></li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
