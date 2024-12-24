import * as React from "react";
import MaskImage from "../assets/Mask.png"; // Replace with the actual path to your image

export default function Mask() {
  return (
    <div className="w-full mt-24 px-5 sm:px-10 md:px-20">
      {/* Outer Div for Padding */}
      <div className="relative rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Background Image */}
        <img
          src={MaskImage}
          alt="Mask"
          className="object-cover w-full h-full absolute top-0 left-0 rounded-2xl"
        />
        
        {/* Text Over Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-bold font-jersey10">
            I will teach you a
          </p>
          <p className="text-yellow-400 text-4xl sm:text-5xl md:text-[17rem] font-bold font-jersey10">
            lesson
          </p>
        </div>
      </div>
    </div>
  );
}
