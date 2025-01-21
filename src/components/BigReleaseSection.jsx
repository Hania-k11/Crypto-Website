import * as React from "react";
import comicBook from '../assets/comicBook.png';

export default function BigReleaseSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 max-md:flex-col px-10">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="font-jersey10 flex flex-col self-stretch my-auto leading-none text-white text-[80px] sm:text-[120px] md:text-[150px] lg:text-[154px] max-md:max-w-full">
            <div className="text-white md:-mb-20">
              BIG RELEASE
            </div>
            <div className="text-[#E2D223] self-start md:-mb-10 md:mt-6">
              FULL
            </div>
            <div className="text-[#E2D223] self-start md:-mb-12">
              EDITION
            </div>
            <div className="text-white mr-11 max-md:mr-2.5 max-md:max-w-full">
              FULL COLOR
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={comicBook}
            alt="Comic Book"
            className="object-contain grow w-[80rem] aspect-[0.84] max-md:max-w-full animate-pulse hover:animate-shake"
          />
        </div>
      </div>

      {/* Centered button with auto width based on text */}
      <div className="flex justify-center mt-8">
        <button className="inline-flex items-center justify-center rounded-lg bg-[#E2D223] text-black font-jersey10 md:text-3xl cursor-pointer py-2 px-5" onClick={() => window.open("https://enkrypto.io/wp-content/uploads/2024/10/Enkrypto-Comics-v1.pdf", "_blank")}>
          Click to open the Enkrypto Comics in your Web Browser
        </button>
      </div>
    </div>
  );
}
