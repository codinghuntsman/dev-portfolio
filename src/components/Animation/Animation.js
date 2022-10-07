import React from "react";
import "./Animation.css";

const Animation = () => {
  return (
    <div className="h-[250px] flex justify-center items-center">
      <div className="h-14 w-14 md:h-14 md:w-14 lg:h-20 lg:w-20 mt-32 rounded-full bg-green-500 transform relative div-animate">
        <div className="mt-2 border-green-500 border-x-8 lg:border-hidden text-white text-xs md:text-sm lg:text-lg font-extrabold font-sans">
          <span>React</span>
          <br />
          <span className=" text-red-700">JS</span>
        </div>
      </div>
    </div>
  );
};

export default Animation;
