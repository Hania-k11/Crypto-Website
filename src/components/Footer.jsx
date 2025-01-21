import React from "react";
import logo from "../assets/logo.png";
import pig from "../assets/pig.png";
import { Link } from "react-router-dom";

import {
  FaDiscord,
  FaReddit,
  FaTiktok,
  FaTelegram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { LuWallet } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="text-white py-8 px-6 mt-8 ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6 text-center sm:text-left">
            <img
              src={logo}
              alt="Crypto Dog Logo"
              className="w-24 lg:w-52 h-auto mx-auto sm:mx-0 md:w-32"
            />
            <p className="font-jockey text-sm text-gray-400 max-w-md lg:text-lg mx-auto sm:mx-0">
              The superhero dog on Solana, battling scams and protecting your
              crypto with hope, humor, and cutting-edge tech. Together, let’s
              make the crypto world safer and brighter! 🐾✨
            </p>
          </div>

          {/* Middle Column */}
          <div className="text-center md:text-left">
            <h3 className="text-[#E2D223] text-2xl lg:text-5xl font-bold mb-4 font-jersey10">
              Menu
            </h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="font-jockey text-gray-400 hover:text-[#E2D223] text-sm lg:text-base"
              >
                Home
              </Link>
              <br />
              <Link
                to="/tokenomics"
                className="font-jockey text-gray-400 hover:text-[#E2D223] text-sm lg:text-base"
              >
                Tokenomics
              </Link>
            </nav>
          </div>

          {/* Right Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-[#E2D223] text-xl lg:text-5xl font-bold mb-4 font-jersey10">
              Say Hello
            </h3>
            <a
              href="mailto:Enkrypted@enkrypto.ai"
              className="font-jockey block text-gray-400 hover:text-[#E2D223] text-sm lg:text-base"
            >
              Enkrypted@enkrypto.ai
            </a>
            <img
              src={pig}
              alt="Coins Illustration"
              className="mt-4 w-20 sm:w-32 lg:w-48 h-auto mx-auto sm:mx-0"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          {/* Follow Us and Social Icons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <span className="font-jersey10 text-lg sm:text-2xl lg:text-5xl text-[#FFE81F] text-center sm:text-left">
              Follow us on:
            </span>
            <div className="border border-white rounded-lg p-3 flex flex-wrap justify-center sm:justify-start space-x-4">
              <a href="https://www.coingecko.com/en/coins/enkrypto" className="hover:text-white transition-opacity">
                <LuWallet className="text-sm sm:text-base lg:text-3xl" />
              </a>
              <a href="https://discord.com/invite/hdmccc66" className="hover:text-white transition-opacity">
                <FaDiscord className="text-sm sm:text-base lg:text-3xl" />
              </a>
              <a href="https://www.reddit.com/r/EnKrypted_solcoin" className="hover:text-white transition-opacity">
                <FaReddit className="text-sm sm:text-base lg:text-3xl" />
              </a>
              <a href="https://www.tiktok.com/@enkrypt0" className="hover:text-white transition-opacity">
                <FaTiktok className="text-sm sm:text-base lg:text-3xl" />
              </a>
              <a href="https://t.me/+EMy0uRgYOixiNDhh" className="hover:text-white transition-opacity">
                <FaTelegram className="text-sm sm:text-base lg:text-3xl" />
              </a>
              <a href="https://www.youtube.com/@OfficialEnKrypto" className="hover:text-white transition-opacity">
                <FaYoutube className="text-sm sm:text-base lg:text-3xl" />
              </a>
              <a href="https://www.facebook.com/people/EnKrypto-Krypt/" className="hover:text-white transition-opacity">
                <FaFacebook className="text-sm sm:text-base lg:text-3xl" />
              </a>
              <a href="https://x.com/krypto_en" className="hover:text-white transition-opacity">
                <FaTwitter className="text-sm sm:text-base lg:text-3xl" />
              </a>
              <a href="https://www.instagram.com/enkrypto_" className="hover:text-white transition-opacity">
                <FaInstagram className="text-sm sm:text-base lg:text-3xl" />
              </a>
            </div>
          </div>

          {/* Privacy Policy and Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-gray-500 text-xs sm:text-sm">
            <span>Privacy Policy | Terms and Conditions</span>
            <span>© 2025-2026 Encrypto. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
