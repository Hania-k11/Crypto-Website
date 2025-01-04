import React from 'react';
import { ChevronRight } from 'lucide-react';

const Box = ({ number, title, content }) => (
  <div
    className="flex-shrink-0 w-72 h-72 bg-blue-950 bg-opacity-15 m-6 text-white text-4xl font-bold rounded-3xl p-8 border-4 border-[#E2D223] flex flex-col items-center justify-center text-center"
    
  >
    <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-300 text-xl mb-2">STEP {number}</p>
    <p className="text-gray-300 text-lg">{content}</p>
  </div>
);

const Arrow = () => (
  <ChevronRight className="w-16 h-16 text-red-600 self-center flex-shrink-0" />
);

export default function StepsToBuy() {
  const stepsData = [
    { number: 1, title: 'Download Phontom ', content: 'Download and install the Phantom Wallet either from the app store on your phone or as a browser extension for desktop.' },
    { number: 2, title: 'Buy some Solana', content: 'Purchase $SOL from an exchange or bridge $SOL and send it to your Phantom wallet' },
    { number: 3, title: 'Buy $MAD', content: 'Go to Decentralized Exchanges (DEXs) : Raydium, and paste the $MAD contract address listed on this website to swap your SOL for MA' },
    { number: 4, title: 'Add $MAD to Your Wallet', content: 'Add $MAD contract address to your Phantom Wallet for your $MAD tokens to show. Lets get MAD!' },
  ];

  // Add an arrow after each box
  const boxesAndArrows = stepsData.map((step) => (
    <React.Fragment key={`step-${step.number}`}>
      <Box {...step} />
      <Arrow />
    </React.Fragment>
  ));

  return (
    <div className="w-full ">
      <h1 className="text-center lg:text-6xl font-bold font-jersey10 text-[#E2D223] mb-12 my-8">
        Steps To Buy
      </h1>
      <div className="flex items-center justify-center w-full overflow-hidden">
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
        <div className="flex animate-[moveHorizontally_16s_linear_infinite] font-jockey">
          {boxesAndArrows}
          {boxesAndArrows}
        </div>
      </div>
    </div>
  );
}
