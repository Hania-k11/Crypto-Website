import React from 'react';
import logo from '../assets/logo.png'; 
import pig from '../assets/pig.png';
import cube from '../assets/cube.png'; 

export default function HeroTK() {
  return (
    <div className="w-full flex justify-center items-center px-4 py-6 mt-7 md:mt-0">
      {/* Outer Wrapper Div for Flex Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl relative">

        {/* Centered Background Image */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <img
            src={pig}
            alt="pig"
            className="w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[400px] h-auto object-contain   opacity-40 -mt-16"
          />
        </div>

        {/* Left Section with Text */}
        <div className="relative z-10 max-w-3xl px-4 md:px-8 text-center md:text-left -mt-11">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-8xl font-jersey10">
            <span className="text-[#E2D223]">Tokenomics</span>
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 font-jersey10">
            EnKrypto is a unique cryptocurrency designed to help protect the investor and give them great insight and help through the crazy schemers and scammers trying to steal your crypto!
          </p>
        </div>

        {/* Right Section with Cube Image */}
        <div className="relative z-10 flex justify-end items-center mt-8 md:mt-0 sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[480px] flex-1 md:-mt-12 group">
  <img
    src={cube}
    alt="cube"
    className="animate-pulse w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[480px] h-auto object-contain group-hover:animate-shake"
  />
</div>


      </div>
    </div>
  );
}
