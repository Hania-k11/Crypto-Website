import mexo from "../assets/mexo.png";
import frog from "../assets/frog.png";
import okx from "../assets/okx.png";
import lines from "../assets/lines.png";
import okfun from "../assets/okfun.png";
import z from "../assets/z.png";
import bird from "../assets/bird.png";
import m from "../assets/m.png";
import meteora from "../assets/meteora.svg";
import coinbase from "../assets/coinbase.svg";

export default function AvailableTK() {
  const providers = [
    { icon: <img src={mexo} alt="Mexo" className="w-28 h-18" />, link: "https://www.mexo.io" },
    { icon: <img src={frog} alt="Frog" className="w-20 h-20" />, link: "https://www.coingecko.com/en/coins/enkrypto" },
    { icon: <img src={okx} alt="OKX" className="w-28 h-18" />, link: "https://www.okx.com" },
    { icon: <img src={lines} alt="Lines" className="w-20 h-20" />, link: "https://www.lines.com" },
    { icon: <img src={okfun} alt="OKFun" className="w-20 h-20" />, link: "https://www.okfun.com" },
    { icon: <img src={z} alt="Z" className="w-18 h-20" />, link: "https://www.dextools.io/app/en/solana/pair-explorer/54CEa3jamjox6km84JecwzgpsQoLVFVnDMZmUs1KiTaF?t=1732511157932" },
    { icon: <img src={bird} alt="Bird" className="w-20 h-22" />, link: "https://dexscreener.com/solana/54cea3jamjox6km84jecwzgpsqolvfvndmzmus1kitaf" },
    { icon: <img src={m} alt="M" className="w-20 h-22" />, link: "https://www.m.com" },
    { icon: <img src={coinbase} alt="Coinbase" className="w-15 h-[4rem]" />, link: "https://www.coinbase.com" },
    { icon: <img src={meteora} alt="Meteora" className="w-15 h-[4rem]" />, link: "https://app.meteora.ag/" },
  ];

  return (
    <div id="available" className="min-h-screen md:mt-16 lg:mb-28">
      <h1 className="text-center text-[#E2D223] font-jersey10 text-3xl md:text-4xl lg:text-7xl mb-12">
        Available On
      </h1>

      <div className="px-11 w-58 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {providers.map((provider, index) => (
          <a
            key={index}
            href={provider.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:rotate-6 cursor-pointer"
          >
            <div className="rounded-3xl h-32 flex items-center justify-center bg-[#E2D223] shadow-none hover:shadow-[0_0_50px_10px_rgba(255,0,0,0.9)]">
              <div className="text-red-500 font-bold text-3xl">
                {provider.icon}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
