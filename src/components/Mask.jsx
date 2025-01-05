import * as React from "react";
import MaskImage from "../assets/Mask.png"; 
export default function Mask() {
  return (
    <div className="w-full mt-24 px-5 sm:px-10 md:px-20 min-h-screen"> {/* Ensures the container can grow with content */}
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
          <p className="text-yellow-400 text-4xl sm:text-5xl md:text-[17rem] lg:text-[18rem] font-bold font-jersey10">
            lesson
          </p>
        </div>
      </div>
      
      {/* Merch Title */}
      <div className="overflow-hidden px-4 sm:px-8 md:px-16 flex items-center justify-center md:justify-start max-w-full w-full mt-1"> 
        <h1
          className="flex justify-center md:justify-start text-transparent bg-clip-text font-bold text-[8rem] sm:text-[10rem] md:text-[18rem] lg:text-[20rem] font-jersey10"
          style={{
            WebkitTextStroke: "2px #E2D223", // Yellow outline
            color: "transparent", // Transparent text fill
          }}
        >
          Merch
        </h1>
      </div>
    </div>
  );
}
