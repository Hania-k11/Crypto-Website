import * as React from "react";
import MaskImage from "../assets/Mask.png"; // Replace with the actual path to your image
import Navbar from "./Navbar"; 
import NavbarTK from "./NavbarTK";// Adjust the path to Navbar based on your folder structure
import HeroTK from "./HeroTK";
import WhatsTK from "./WhatsTK";
import DashboardTK from "./DashboardTK";

export default function Tokenomics() {
  return (
    <div>
      {/* Add the Navbar */}
      <NavbarTK />
      <HeroTK/>
      <WhatsTK/>
      <DashboardTK/>
      
      {/* Tokenomics Content */}
      
    </div>
  );
}
