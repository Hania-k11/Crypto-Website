import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AnimatedBackground from "./AnimatedBackground";
import Hand from "./Hand";
import EnkryptoAbout from "./EnkryptoAbout";
import Comics from "./Comics";
import BigReleaseSection from "./BigReleaseSection";
import Mask from "./Mask";
import Merch from "./Merch";
import Footer from "./Footer";

export default function Home() {
  return (
<>
<Navbar/>
        <Hero/>
        <AnimatedBackground/>
        <Hand/>
        <EnkryptoAbout/>
        <Comics/>
        <BigReleaseSection/>
        <Mask/>
        <Merch/>
        <Footer/>
</>
  )
}