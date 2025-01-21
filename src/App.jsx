import bg from './assets/bg.png';

import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tokenomics from './components/Tokenomics';
import EnkryptoAboutPage from './components/Aboutus';
import NFT from './components/NFT';
import MEDIA from './components/Media';

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
        <Route path="/aboutus" element={<EnkryptoAboutPage />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/media" element={<MEDIA />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}