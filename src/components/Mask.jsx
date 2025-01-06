import * as React from "react";
import MaskImage from "../assets/Mask.png"; 
export default function Mask() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const text = "Merch"; // The text to animate

  return (
    <div className="w-full mt-24 px-5 sm:px-10 md:px-20 min-h-[15rem]"> {/* Ensures the container can grow with content */}
      {/* Outer Div for Padding */}
      <div className="relative rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Background Image */}
        <img
          src={MaskImage}
          alt="Mask"
          className="object-cover w-full h-full absolute top-0 left-0 rounded-2xl"
        />
        
        {/* Text Over Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-bold font-jersey10">
            I will teach you a
          </p>
          <p className="text-yellow-400 text-4xl sm:text-5xl md:text-[17rem] lg:text-[18rem] font-bold font-jersey10">
            lesson
          </p>
        </div>
      </div>
      
      {/* Merch Title */}
      <div
      ref={sectionRef}
      className="typing-container flex items-center justify-center md:justify-start px-4 sm:px-8 md:px-16 w-full mt-1"
    >
      <h1
        className="typing-text font-bold flex justify-center md:justify-start"
        style={{
          WebkitTextStroke: "2px #E2D223", // Yellow outline
          color: "transparent", // Transparent text fill
        }}
      >
        {text.split("").map((letter, index) => (
          <span
            key={index}

            className={`letter ${isVisible ? "visible" : ""}`}
            style={{
              animationDelay: `${index * 0.5}s`,
              fontSize:"16rem"
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
    </div>
  );
}
