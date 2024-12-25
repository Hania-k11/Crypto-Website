import React from "react";
import light from '../assets/light.png';

export default function WhatsTK() {
  return (
    <>
      {/* Heading */}
      <div className="flex justify-center mt-12 font-jersey10 text-[#E2D223] text-4xl md:text-5xl lg:text-7xl">
        What's Tokenomics
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-8 lg:mt-12 max-w-screen-xl mx-auto min-h-[70vh]">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start w-full lg:w-full lg:-mt-11">
          <img 
            src={light} 
            alt="light" 
            className="w-64 sm:w-80 md:w-96 lg:w-[900px] h-auto object-contain" 
          />
        </div>

        {/* Text Section */}
        <div className="relative z-10 max-w-3xl w-full text-center  lg:mt-20 lg:ml-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-jersey10">
            <span className="text-[#E2D223]">Tokenomics</span>
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 font-jersey10">
            EnKrypto is a unique cryptocurrency designed to help protect the investor and give them great insight and help through the crazy schemers and scammers trying to steal your crypto!
          </p>
        </div>
      </div>
    </>
  );
}
