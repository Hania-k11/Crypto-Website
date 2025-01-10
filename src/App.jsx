import bg from './assets/bg.png';

import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tokenomics from './components/Tokenomics';
import EnkryptoAboutPage from './components/Aboutus';

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
        </Routes>
      </div>
    </div>
    </Router>
  );
}