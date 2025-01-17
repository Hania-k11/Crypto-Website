import React, { useState, useEffect, useRef } from 'react';
import hand from '../assets/hand.png';

export default function Hand() {
  const [isVisible, setIsVisible] = useState(false);
  const handRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setIsVisible(true); 
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (handRef.current) {
      observer.observe(handRef.current); 
    }

    return () => {
      if (handRef.current) {
        observer.unobserve(handRef.current); 
      }
    };
  }, []);

  return (
    <div
      id="about-us"
      className="flex justify-between overflow-x-hidden"
      ref={handRef}
    >
      <div
        className={`justify-end ml-2 md:-ml-18 w-full sm:w-1/2 transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-48 opacity-0'
        }`}
      >
        <img
          src={hand}
          alt="hand"
          className="w-full h-auto object-contain hover:animate-bounce z-0"
        />
      </div>

      <div className="w-full sm:w-1/2 flex flex-col justify-center sm:-mr-6 md:pr-4">
        <div className="z-10 pl-0 md:pl-8 text-right">
          <h1 className="text-2xl md:text-5xl lg:text-7xl md:space-y-4 font-jersey10 pr-16">
            <div className="flex flex-col">
              <span className="md:pb-4">
                <span className="text-white">Your </span>
                <span className="text-[#E2D223]">Superhero </span>
                <span className="text-[#E2D223]">Dog </span>
                <span className="text-white">That Will </span>
                <span className="text-[#E2D223]">Protect Your </span>
                <span className="text-[#E2D223]">Crypto!</span>
              </span>
            </div>
          </h1>
        </div>

        <div className="flex justify-end pr-16 mt-4 mb-16">
          <button
            onClick={() => { window.location.href = '/aboutus'; }}
            className="bg-[#E2D223] sm:w-28 md:w-44 lg:w-56 text-black font-jersey10 1xl md:2xl lg:text-4xl px-6 py-2 rounded-lg shadow-md hover:bg-red-900 hover:text-[#E2D223] transition duration-300"
          >
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
}
