import React from "react";
import nftImage from "../assets/logo.png"; // Replace with your NFT image path
import Navbar from "./NavbarAboutus";

export default function NFTPage() {
  return (
    <>
    <Navbar/>
    <div
      id="nft"
      className="min-h-screen flex flex-col justify-center items-center bg-[#02001E] text-white"
      style={{ overflowX: "hidden" }}
    >
      {/* Header Section */}
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-jersey10 text-[#E2D223]">
          NFT COLLECTION
        </h1>
        <h2 className="text-3xl md:text-5xl font-jersey10 mt-4">
          Coming Soon 🚀
        </h2>
      </div>

      {/* Image Section */}
      <div className="mt-12 flex justify-center">
        <img
          src={nftImage}
          alt="NFT Coming Soon"
          className="w-full max-w-2xl h-auto object-contain"
        />
      </div>

      {/* Description Section */}
      <div className="mt-8 px-4 text-center text-lg md:text-2xl font-jockey text-gray-300">
        <p>
          Get ready to own a piece of the <span className="text-[#E2D223]">Enkrypto Universe</span>. 
          Our unique and exclusive NFTs are launching soon!
        </p>
        <p className="mt-4">
          Stay tuned for more updates and prepare to join the Enkrypto adventure.
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <button
          className="bg-[#E2D223] text-black text-2xl font-jersey10 px-6 py-3 rounded-lg hover:bg-red-900 hover:text-[#E2D223] transition-colors"
        >
          Coming Soon
        </button>
    
      </div>
    </div>
    </>

  );
}
