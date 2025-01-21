import { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const Box = ({ number, title, content }) => (
  <div className="flex-shrink-0 w-72 h-72 m-4 text-white text-lg font-semibold rounded-xl p-6 flex flex-col items-center justify-center text-center border-2 border-[#E2D223]">
    <h3 className="text-[#E2D223] text-xl font-bold mb-2">{title}</h3>
    <p className="text-white text-sm mb-4">STEP {number}</p>
    <p className="text-gray-400">{content}</p>
  </div>
);

const Arrow = () => (
  <ChevronRight className="w-12 h-12 text-[#E2D223] self-center flex-shrink-0" />
);

export default function StepsToBuy() {
  const stepsData = [
    {
      number: 1,
      title: "Download Phantom Wallet",
      content: "Download and install the Phantom Wallet from the App Store or as a browser extension.",
    },
    {
      number: 2,
      title: "Buy SOL",
      content: "Purchase $SOL from an exchange or bridge $SOL to your Phantom wallet.",
    },
    {
      number: 3,
      title: "Swap for $KRYPT",
      content: "Visit Raydium or another DEX and paste the $KRYPT contract address to swap $SOL for $KRYPT.",
    },
    {
      number: 4,
      title: "Add $KRYPT to Wallet",
      content: "Add the $KRYPT contract address to Phantom Wallet to view your tokens.",
    },
  ];

  const boxesAndArrows = stepsData.flatMap((step, index) => [
    <Box key={`box-${index}`} {...step} />,
    <Arrow key={`arrow-${index}`} />,
  ]);

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    // Defer cloning logic until the DOM is fully rendered
    setTimeout(() => {
      const sliderItems = slider.children[0];
      if (!sliderItems) return;

      const clone = sliderItems.cloneNode(true);
      slider.appendChild(clone);

      const scrollSlider = () => {
        scrollAmount += 2; // Adjust for scroll speed
        if (scrollAmount >= sliderItems.scrollWidth) {
          scrollAmount = 0; // Reset to start
        }
        slider.scrollLeft = scrollAmount;
      };

      const interval = setInterval(scrollSlider, 16); // Smooth animation
      return () => clearInterval(interval);
    }, 0);
  }, []);

  return (
    <div className="w-full min-h-[50vh] p-8">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#E2D223] mb-12 font-jockey">
        STEPS TO BUY
      </h1>
      <div
        ref={sliderRef}
        className="flex items-center w-full overflow-hidden relative font-jockey"
      >
        <div className="flex">{boxesAndArrows}</div>
      </div>
    </div>
  );
}
