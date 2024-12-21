import React from 'react';
import logo from '../assets/logo.png';  // Path to your logo image
import coins from '../assets/coins.png';  // Path to your coins image

export default function Hero() {
  return (
    <div className="flex items-center justify-between w-full p-6 md:p-12 mt-9">
      {/* Leftmost Div with Text */}
   
      <div className="max-w-3xl z-10 pl-8 -mt-9">
          <h1 className="text-4xl md:text-5xl lg:text-7xl space-y-4 font-jersey10  leading-[77]">
            <div className="flex flex-col">
              <span className='pb-4'>
                <span className="text-white">Your </span>
                <span className="text-[#E2D223]">Superhero </span>
                <span className="text-[#E2D223]">Dog</span>
              </span>
            
              <span className='pb-4'>
              <span className="text-white">That Will </span>
                <span className="text-[#E2D223]">Protect Your </span>
              </span>
              <span className="text-[#E2D223]">Crypto!</span>
            </div>
          </h1>
        </div>


      {/* Middle Div with Coins Image */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-28 lg:h-[700px]">
  <img src={coins} alt="Coins" className=" " />
</div>
      {/* Rightmost Div with Logo Image */}
      <div className="overflow-hidden -mt-20  flex justify-center sm:h-[300px] md:h-[400px]  lg:h-[500px] lg:-mr-12 ">
        <img src={logo} alt="Logo" className=" " />
      </div>
    </div>
  );
};

