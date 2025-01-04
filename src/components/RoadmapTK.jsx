import React from 'react';
import roadmap from '../assets/roadmap.png';

export default function RoadmapTK() {
  return (
    <div id="roadmap" className="min-h-screen flex flex-col items-center">
      {/* Heading */}
      <div className="font-jersey10 text-[#E2D223] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 sm:mt-10 mb-6 sm:mb-12 text-center">
        RoadMap
      </div>

      {/* Roadmap Image */}
      <div className="w-full px-4 sm:px-8">
        <img
          src={roadmap}
          alt="Roadmap"
          className=""
        />
      </div>
    </div>
  );
}
