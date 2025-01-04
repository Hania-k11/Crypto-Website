import React, { useState, useEffect, useRef } from 'react';
import yellowBg from '../assets/yellow-bg.png'; // Path to your yellow-bg image
import bgImage from '../assets/logo.png';
import gold from '../assets/gold.png';

export default function AnimatedBackground() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          setAnimate(true);
        }
      },
      { threshold: [0, 0.2, 1] }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex justify-center items-center w-full h-auto overflow-hidden"
    >
      <div
        className={`z-20 relative w-full px-4 md:px-8  bg-[#E2D223] rounded-t-3xl transition-all duration-1000 ease-out ${
          animate ? 'animate-slideUp opacity-100' : 'opacity-0'
        }`}
      >
        {/* Title */}
        <div className="flex justify-center items-center text-[#080253] pb-5 md:pb-7 text-4xl md:text-6xl mt-4 font-jersey10 text-center">
          Who is Enkrypto?
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pr-3">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-0 z-20">
            <img
              src={gold}
              alt="Gold"
              className="w-3/4 md:w-full h-auto object-contain animate-pulse"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-right px-4 md:px-8 z-20 pb-8 md:pb-10">
            <div className="text-[#880F11] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-jersey10">
              Enkrypto: Your Superhero Against Crypto Scams
            </div>
            <div className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-jockey z-20 mt-4">
              Enkrypto is a unique cryptocurrency project centered around the theme of a superhero dog named Enkrypto, who battles the dark web to protect users. The project aims to offer a fresh, humorous, and hopeful perspective in the cryptocurrency space, especially for those who have suffered financial losses from scams and rug pulls.
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 h-auto opacity-30 z-10 flex justify-end items-center">
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-contain rounded-tr-3xl" // Increased size
          />
        </div>
      </div>
    </div>
  );
}
