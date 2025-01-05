import bg from './assets/bg.png';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import Hand from './components/Hand';
import EnkryptoAbout from './components/EnkryptoAbout';
import Comics from './components/Comics';
import  BigReleaseSection from './components/BigReleaseSection';
import Mask from './components/Mask';
import Merch from './components/Merch';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tokenomics from './components/Tokenomics';

export default function App() {
  return (
    <Router>
    <div
      className="relative w-full  bg-no-repeat bg-top"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'repeat', 
        minHeight: '100vh', 
      }}
    >
     
      <div className="relative flex flex-col items-center justify-center py-20 text-white">
     
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}