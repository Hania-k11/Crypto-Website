import mexo from '../assets/mexo.png';
import frog from '../assets/frog.png';
import okx from '../assets/okx.png';
import lines from '../assets/lines.png';
import okfun from '../assets/okfun.png';
import z from '../assets/z.png';
import lbbank from '../assets/lbbank.png';
import pay from '../assets/pay.png';
import visa from '../assets/visa.png';
import bird from '../assets/bird.png';
import m from '../assets/m.png';
import paypal from '../assets/paypal.png';


export default function AvailableTK() {
    return (
      <div id="available" className="min-h-screen -mt-80 md:mt-16 lg:mb-28">
        <h1 className="text-center text-[#E2D223] font-jersey10 text-3xl md:text-4xl lg:text-7xl mb-12">
          Available On
        </h1>
  
        <div className="px-11 w-58 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <img src={mexo} alt="Mexo" className="w-28 h-18" /> },
            { icon: <img src={frog} alt="frog" className="w-20 h-20" /> },
            { icon: <img src={okx} alt="okx" className="w-28 h-18" /> },
            { icon: <img src={lines} alt="lines" className="w-20 h-20" /> },
            { icon: <img src={okfun} alt="okfun" className="w-20 h-20" /> },
            { icon: <img src={z} alt="z" className="w-18 h-20" /> },
            { icon: <img src={lbbank} alt="lbbank" className="w-28 h-22" /> },
            { icon: <img src={pay} alt="pay" className="w-22 h-20" /> },
            { icon: <img src={visa} alt="visa" className="w-28 h-18" /> },
            { icon: <img src={bird} alt="bird" className="w-20 h-22" /> },
            { icon: <img src={m} alt="m" className="w-20 h-22" /> },
            { icon: <img src={paypal} alt="paypal" className="w-28 h-18" /> },
          ].map((provider, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:rotate-6 cursor-pointer"
            >
              <div
                className="rounded-3xl h-32 flex items-center justify-center bg-[#E2D223] shadow-none hover:shadow-[0_0_50px_10px_rgba(255,0,0,0.9)]"
              >
                <div className="text-red-500 font-bold text-3xl">
                  {provider.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  