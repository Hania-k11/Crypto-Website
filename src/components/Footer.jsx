import React from "react";
import logo from "../assets/logo.png";
import pig from "../assets/pig.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white lg:ml-10 md:mb-52 lg:-mb-16 py-8 px-6 mt-8">
      <div className="container mx-auto max-w-6xl">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8 text-center md:text-left">
            <img
              src={logo}
              alt="Crypto Dog Logo"
              className="w-32 h-auto mx-auto md:mx-0 lg:w-48"
            />
            <p className="font-jockey text-sm md:text-base text-gray-300 max-w-md mx-auto md:mx-0">
              The superhero dog on Solana, battling scams and protecting your crypto with hope, humor, and cutting-edge tech. Together, let’s make the crypto world safer and brighter! 🐾✨
            </p>
          </div>

          {/* Middle Column */}
          <div className="text-center md:text-left">
            <h3 className="text-[#E2D223] text-2xl lg:text-3xl font-bold mb-4 font-jersey10">
              Menu
            </h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="font-jockey text-gray-300 hover:text-yellow-400 text-sm lg:text-base mb-80"
              >
                Home
              </Link>
              <br/>
              <Link
                to="/tokenomics"
                className="font-jockey text-gray-300 hover:text-yellow-400 text-sm lg:text-base mb-80"
              >
                Tokenomics
              </Link>
           
            </nav>
          </div>

          {/* Right Column */}
          <div className="text-center md:text-left">
            <h3 className="text-[#E2D223] text-2xl lg:text-3xl font-bold mb-4 font-jersey10">
              Say Hello
            </h3>
            <a
              href="mailto:Enkrypted@enkrypto.ai"
              className="font-jockey block text-gray-300 hover:text-[#E2D223] text-sm lg:text-base"
            >
              Enkrypted@enkrypto.ai
            </a>
            <img
              src={pig}
              alt="Coins Illustration"
              className="mt-4 w-32 md:w-48 lg:w-64 h-auto mx-auto md:mx-0 animate-pulse"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-discord text-lg lg:text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-tiktok text-lg lg:text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-reddit text-lg lg:text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-lg lg:text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-telegram text-lg lg:text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube text-lg lg:text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook text-lg lg:text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter text-lg lg:text-xl"></i>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-2 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="/terms" className="hover:text-white">
                Terms and Conditions
              </a>
              <span>|</span>
              <span>&copy; 2025-2026 Enkrypto. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
