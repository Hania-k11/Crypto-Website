import React from 'react';
import logo from '../assets/logo.png';  // Path to your logo image
import pig from '../assets/pig.png'; 
import cube from '../assets/cube.png';  // Path to your coins image

export default function HeroTK() {
  return (
    <div className="w-full flex justify-center items-center p-6 mt-7 md:-mt-9">
      {/* Outer Wrapper Div for Flex Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl relative">

        {/* Centered Coins Image in the Background */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <img 
            src={pig} 
            alt="pig" 
            className="w-96 h-auto object-contain opacity-40" 
          />
        </div>

        {/* Leftmost Div with Text */}
        <div className="max-w-3xl z-10 pl-8 -mt-9 text-center md:text-left">
  <h1 className="text-4xl md:text-5xl lg:text-7xl space-y-4 font-jersey10">
    <div className="flex flex-col">
      <span className=" text-[#E2D223]">Tokenomics</span>
    </div>
  </h1>
  <p className="text-white text-3xl mt-4 font-jersey10">
    EnKrypto is a unique cryptocurrency designed to help protect the investor and give them great insight and help through the crazy schemers and scammers trying to steal your crypto!
  </p>
</div>


        {/* Rightmost Div with Logo Image */}
        <div className="overflow-hidden flex justify-end items-center mt-8 md:mt-0 sm:h-[300px] md:h-[400px] lg:h-[480px] flex-1 z-10">
  <img 
    src={cube} 
    alt="cube" 
    className="max-w-full h-full object-contain "
  />
</div>

      </div>
    </div>
  );
};
