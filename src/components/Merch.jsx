import React from "react";
import merchdog from "../assets/merchdog.png"; 
import merchsuper from "../assets/merchsuper.png"; 

export default function Merch() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-4">
        {/* Left Section: Text and Buttons */}
        <div className="mt-32 text-white p-6 flex flex-col items-center md:items-start w-full md:w-[40rem] space-y-4">
          <div className="text-2xl md:text-4xl font-bold">
            <div className="font-jersey10 text-[8rem] text-[#E2D223]">Enkryption</div>
            <div className="font-jersey10 text-[8rem] mt-12 mb-5">Shirt</div>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#FFE135] font-jersey10 text-4xl text-[#02001E] px-6 py-2  font-bold hover:bg-[#FFE135]/90 transition-colors">
              GET THE SHIRT
            </button>
            <button className="border-2 font-jersey10 text-4xl border-[#FFE135] text-[#FFE135] px-6 py-2  font-bold hover:bg-[#FFE135]/10 transition-colors">
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
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start -mt-16 p-4">

     
        <div className="w-full md:w-[38rem] mt-4 md:mt-0">
          <img
            src={merchdog}
            alt="Merchandise"
            className="w-full h-auto object-cover "
          />
        </div>
       
        <div className="mt-40 text-white p-6 flex flex-col items-center md:items-start w-full md:w-[40rem] space-y-4">
          <div className="text-2xl md:text-4xl font-bold">
            <div className="font-jersey10 text-[7rem] text-[#E2D223] mb-5">Enkrypto hero</div>
            <div className="font-jersey10 text-[8rem] mt-12 mb-5">Shirt</div>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#FFE135] font-jersey10 text-4xl text-[#02001E] px-6 py-2  font-bold hover:bg-[#FFE135]/90 transition-colors">
              GET THE SHIRT
            </button>
            <button className="border-2 font-jersey10 text-4xl border-[#FFE135] text-[#FFE135] px-6 py-2  font-bold hover:bg-[#FFE135]/10 transition-colors">
              View More
            </button>
          </div>
        </div>

      
      </div>


    </>
  );
}
