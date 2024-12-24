import React from "react";
import merchdog from "../assets/merchdog.png"; 
import merchsuper from "../assets/merchsuper.png"; 

export default function Merch() {
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 space-y-8 md:space-y-0 min-h-screen">
        {/* Left Section: Text and Buttons */}
        <div className="text-white p-6 flex lg:mt-40 flex-col items-center md:items-start w-full md:w-[40rem] space-y-4 mt-10 md:mt-0">
          <div className="text-3xl md:text-4xl font-bold text-center md:text-left">
            <div className="font-jersey10 text-[3rem] md:text-[6rem] text-[#E2D223]">Enkryption</div>
            <div className="font-jersey10 text-[3rem] md:text-[6rem] mt-3 md:mt-12 md:mb-5">Shirt</div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#FFE135] font-jersey10 rounded-lg text-3xl md:text-4xl text-[#02001E] px-6 py-2 font-bold hover:bg-[#FFE135]/90 transition-colors w-full md:w-auto">
              GET THE SHIRT
            </button>
            <button className="border-2 font-jersey10 text-3xl md:text-4xl rounded-lg border-[#FFE135] text-[#FFE135] px-6 py-2 font-bold hover:bg-[#FFE135]/10 transition-colors w-full md:w-auto">
              View More
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-[20rem] md:w-[38rem] mt-4 md:mt-0">
          <img
            src={merchdog}
            alt="Merchandise"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 space-y-8 md:space-y-0 min-h-screen">
        {/* Left Section: Image */}
        <div className="hidden md:block md:w-[38rem] mt-4 md:mt-0">
          <img
            src={merchdog}
            alt="Merchandise"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Section: Text and Buttons */}
        <div className="text-white p-6 flex flex-col lg:mt-36 items-center md:items-start w-full md:w-[40rem] space-y-4  mt-0 md:mt-0">
          <div className="text-3xl md:text-4xl font-bold lg:mt-40 text-center md:text-left">
            <div className="font-jersey10 text-[3rem] md:text-[6rem] text-[#E2D223] mb-5">Enkrypto hero</div>
            <div className="font-jersey10 text-[3rem] md:text-[6rem] mt-12 mb-5">Shirt</div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#FFE135] rounded-lg font-jersey10 text-3xl md:text-4xl text-[#02001E] px-6 py-2 font-bold hover:bg-[#FFE135]/90 transition-colors w-full md:w-auto">
              GET THE SHIRT
            </button>
            <button className="border-2 font-jersey10 text-3xl md:text-4xl rounded-lg border-[#FFE135] text-[#FFE135] px-6 py-2 font-bold hover:bg-[#FFE135]/10 transition-colors w-full md:w-auto">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
