import React, { useState, useEffect, useRef } from 'react';
import yellowBg from '../assets/yellow-bg.png'; // Path to your yellow-bg image

export default function AnimatedBackground() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null); // Reference to the component's container

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when 20% of the component is visible
        if (entry.intersectionRatio >= 0.2) {
          setAnimate(true);
        }
      },
      { threshold: [0, 0.2, 1] } // Set thresholds (20% visibility)
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
      ref={ref} // Attach the reference
      className="relative w-full h-screen flex justify-center items-center overflow-hidden"
    >
      {/* Animated Image */}
      <div
        className={`absolute bottom-0 transition-opacity duration-500 ${
          animate ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={yellowBg}
          alt="Yellow Background"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
