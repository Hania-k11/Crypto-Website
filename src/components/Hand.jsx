import React, { useState, useEffect, useRef } from 'react';
import hand from '../assets/hand.png';

export default function Hand() {
  const [isVisible, setIsVisible] = useState(false);
  const handRef = useRef(null); // Ref for the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setIsVisible(true); // Trigger animation when 10% of the component is visible
        }
      },
      {
        threshold: 0.1, // 10% of the component in the viewport
      }
    );

    if (handRef.current) {
      observer.observe(handRef.current); // Start observing the component
    }

    return () => {
      if (handRef.current) {
        observer.unobserve(handRef.current); // Clean up on unmount
      }
    };
  }, []);

  return (
    <div id="about-us" className="flex justify-between" ref={handRef}>
      <div
        className={`justify-end -ml-18 w-1/2 transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-48 opacity-0'
        }`}
      >
        <img
          src={hand}
          alt="hand"
          className="w-full h-auto object-contain hover:animate-bounce z-0"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center pr-4">
        <div className="z-10 pl-8 text-right">
          <h1 className="text-4xl md:text-5xl lg:text-8xl space-y-4 font-jersey10 pr-16">
            <div className="flex flex-col">
              <span className="pb-4">
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

        <div className="flex justify-end pr-16 mt-4">
          <button
            className="bg-[#E2D223] w-56 text-black font-jersey10 text-4xl px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
}
