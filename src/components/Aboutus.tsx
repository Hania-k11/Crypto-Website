import React from 'react';
import logo from '../assets/logo.png';
import Navbar from './NavbarAboutus';

export default function EnkryptoAboutPage() {
  return (
<>
      <Navbar />

   <div className="min-h-screen p-4 md:p-8 lg:p-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* About Heading */}
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="font-mono text-center text-4xl md:text-6xl lg:text-9xl">
              <span className="text-white font-jersey10">ABOUT</span>
              <br />
              <span className="text-yellow-400 font-jersey10">ENKRYPTO</span>
            </h1>
          </div>

          {/* Info Card */}
          <div
            className="rounded-3xl p-8 border-[#E2D223] flex flex-col items-center text-center"
            style={{
              backgroundColor: 'rgba(17, 10, 47, 0.6)',
              border: '5px solid rgba(226, 210, 35, 0.8)',
            }}
          >
            {/* Logo and Heading */}
            <div className="flex items-center gap-4 mb-6 justify-center">
              <img
                src={logo}
                alt="Enkrypto Logo"
                className="w-24 h-24 rounded-full"
              />
              <h2 className="text-white text-5xl font-semibold font-jockey">
                Enkrypto
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-2xl mb-8 leading-relaxed font-jockey">
              Enkrypto is a unique cryptocurrency project centered around the
              theme of a superhero dog named Enkrypto, who battles the dark web
              to protect users. The project offers a fresh, humorous, and
              hopeful perspective in the cryptocurrency space, especially for
              those who have suffered financial losses from scams and rug pulls.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="space-y-4">
              <a
                href="#"
                className="font-jersey10 block w-full bg-[#E2D223] hover:bg-red-900 text-[#880F11] hover:text-[#E2D223] text-3xl font-semibold py-3 px-6 rounded-full text-center transition-colors duration-200"
              >
                Buy Enkrypto on Dexscreener 🚀
              </a>
              <a
                href="#"
                className="font-jersey10 text-3xl block w-full bg-red-900 hover:bg-[#E2D223] text-[#E2D223] hover:text-[#880F11] font-semibold py-3 px-6 rounded-full text-center transition-colors duration-200"
              >
                View Enkrypto on Solscan 👁
              </a>
              <a
                href="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jersey10 flex items-center justify-center w-full bg-[#E2D223] hover:bg-red-900 text-[#880F11] hover:text-[#E2D223] text-3xl font-semibold py-3 px-6 rounded-full text-center transition-colors duration-200"
              >
                Buy Enkrypto on RAYDIUM
                <img src={logo} alt="Raydium Logo" className="ml-2 w-15 h-9" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
}
