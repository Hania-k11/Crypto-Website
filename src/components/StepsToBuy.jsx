import React from 'react';
import { ChevronRight } from 'lucide-react';

const Box = ({ number }) => (
  <div
    className="overflow-hidden flex-shrink-0 w-64 h-64 bg-blue-500 m-4  justify-center text-white text-4xl font-bold rounded-3xl p-8 border-[#E2D223] flex flex-col items-center text-center"
    style={{
      backgroundColor: 'rgba(17, 10, 47, 0.6)', // Semi-transparent background
      border: '5px solid rgba(226, 210, 35, 0.8)', // Increased border width
    }}
  >
    <h3 className="text-white text-2xl font-semibold mb-4">STEP {number}</h3>
    <p className="text-gray-300 text-xl">Action {number}</p>
  </div>
);

const Arrow = () => (
  <ChevronRight className="w-20 h-20 text-red-600 self-center flex-shrink-0" />
);

export default function StepsToBuy() {
  const boxesAndArrows = [1, 2, 3, 4].flatMap((num) => [
    <Box key={`box-${num}`} number={num} />,
    <Arrow key={`arrow-${num}`} />
  ]);

  return (
    <div className="flex items-center justify-center w-screen overflow-hidden">
      <style jsx>{`
        @keyframes moveHorizontally {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-30%);
          }
        }
      `}</style>
      <div className="flex animate-[moveHorizontally_16s_linear_infinite]">
        {boxesAndArrows}
        {boxesAndArrows}
      </div>
    </div>
  );
}
