import React from 'react';
import roadmap from '../assets/roadmap.png';

export default function RoadmapTK() {
  return (
    <div id="roadmap" className="lg:pt-20 md:pt-20 xl:pt-20 sm:pt-20 lg:min-h-[40rem] md:min-h-[40rem] xl:min-h-[40rem] sm:min-h-[40rem] flex flex-col items-center">
      {/* Heading */}
      <div className="font-jersey10 text-[#E2D223] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 sm:mt-10 mb-6 sm:mb-12 text-center">
        RoadMap
      </div>

      {/* Roadmap Image */}
      <div className="w-full sm:w-full md:w-3/4 lg:w-2/3 px-4 sm:w-full">
  <img
    src={roadmap}
    alt="Roadmap"
    className=""
  />
</div>

    </div>
  );
}
