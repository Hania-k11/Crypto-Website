import React from "react";

export default function Comics() {
  return (
    <div id="comics" className="overflow-hidden px-16 flex items-center justify-end max-w-full w-full -mx-10">
      <h1
        className="overflow-hidden font-jersey10 text-transparent"
        style={{
          fontSize: "6rem", 
          lineHeight: "1", 
          WebkitTextStroke: "2px #E2D223", 
          WebkitTextFillColor: "transparent", 
        }}
      >
        <span className="block md:hidden" style={{ fontSize: "6rem" }}>
          COMICS
        </span>
        <span className="hidden md:block lg:hidden" style={{ fontSize: "10rem" }}>
          COMICS
        </span>
        <span className="hidden lg:block" style={{ fontSize: "18rem" }}>
          COMICS
        </span>
      </h1>
    </div>
  );
}
