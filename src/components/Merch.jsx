import React from "react";
import merchdog from "../assets/merchdog.png"; 
import merchsuper from "../assets/merchsuper.png"; 

export default function Merch() {
  return (
    <>
      {/* First Section */}
      <div
        id="merch"
        className="flex flex-col  md:flex-row justify-center items-center md:items-start p-4 md:space-y-0 min-h-[70vh] max-w-full"
        style={{ overflowX: "hidden" }}
      >
        {/* Left Section: Text and Buttons */}
        <div className="text-white  p-6 flex lg:mt-40 flex-col items-center md:items-start w-full md:w-[40rem] space-y-4 mt-10 md:mt-0">
          <div className="text-3xl md:text-4xl font-bold text-center md:text-left">
            <div className="font-jersey10 text-[3rem] md:text-[6rem] lg:text-[6rem] text-[#E2D223]">Enkryption</div>
            <div className="font-jersey10 text-[3rem] md:text-[6rem] lg:text-[6rem] mt-3 md:mt-12 md:mb-5">Shirt</div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#E2D223] font-jersey10 rounded-lg text-3xl md:text-4xl text-[#02001E] px-6 py-2 font-bold hover:bg-red-900 hover:text-[#E2D223] transition-colors w-full md:w-auto">
              GET THE SHIRT
            </button>
            <button className="border-2 font-jersey10 text-3xl md:text-4xl rounded-lg border-[#E2D223] text-[#E2D223] px-6 py-2 font-bold hover:bg-[#FFE135]/10 transition-colors w-full md:w-auto">
              View More
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-[38rem] mt-4 md:mt-0">
          <img
            src={merchdog}
            alt="Merchandise"
            className="w-full h-auto object-cover "
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>

      {/* Second Section */}
      <div
        className=" md:-mt-64 lg:-mt-20 flex flex-col-reverse md:flex-row justify-center items-center md:items-start p-4 space-y-8 md:space-y-0 min-h-[50vh] w-full"
        style={{ paddingBottom: "200px", overflowX: "hidden" }}
      >
        {/* Left Section: Image */}
        <div className="w-full md:w-[38rem] mt-12 md:mt-0">
          <img
            src={merchsuper}
            alt="Merchandise"
            className="w-full h-auto object-cover "
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Right Section: Text and Buttons */}
        <div className="text-white p-6 flex flex-col lg:mt-36 items-center md:items-start w-full md:w-[40rem] space-y-4 mt-0 md:mt-0">
          <div className="text-3xl md:text-4xl font-bold lg:mt-40 text-center md:text-left">
            <div className="font-jersey10 text-[3rem] md:text-[5rem] lg:text-[6rem]  text-[#E2D223] lg:-mb-7 md:mb-5">Enkrypto hero</div>
            <div className="font-jersey10 text-[3rem] md:text-[5rem] lg:text-[6rem] mt-4 md:mt-12 mb-1 md:mb-5">Shirt</div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row-reverse md:gap-4">
            <button className="bg-[#E2D223] rounded-lg font-jersey10 text-3xl md:text-4xl text-[#02001E] px-6 py-2 font-bold hover:bg-red-900 hover:text-[#E2D223] transition-colors w-full md:w-auto">
              GET THE SHIRT
            </button>
            <button className="border-2 font-jersey10 text-3xl md:text-4xl rounded-lg border-[#E2D223] text-[#E2D223] px-6 py-2 font-bold hover:bg-[#FFE135]/10 transition-colors w-full md:w-auto">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
