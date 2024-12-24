import React from "react";

export default function Merch() {
  return (
    <>
      <div className="overflow-hidden px-4 sm:px-8 md:px-16 flex items-center justify-start max-w-full w-full -mx-4 sm:-mx-6 md:-mx-10">
        <h1
          className="flex justify-start text-transparent bg-clip-text font-bold text-[10rem] sm:text-[12rem] md:text-[18rem] lg:text-[20rem] font-jersey10"
          style={{
            WebkitTextStroke: "2px #E2D223", // Yellow outline
            color: "transparent", // Transparent text fill
          }}
        >
          Merch
        </h1>
      </div>
    </>
  );
}
