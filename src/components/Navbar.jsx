import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll'; // Importing react-scroll
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenuOnScroll = () => setIsMenuOpen(false);

  return (
    <nav className="px-4 py-2 flex w-full items-center justify-between -mt-16 relative z-50">
      {/* Logo Section */}
      <div className="lg:ml-16 w-16 md:w-48 rounded-full overflow-hidden">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links - Centered for larger screens */}
      <div className="overflow-hidden md:pl-8 bg-[#080253] lg:ml-36 lg:pl-11 lg:pr-4 w-full hidden md:flex items-center justify-between rounded-full mb-8">
        <div className="flex-grow flex items-center justify-center space-x-6 text-white h-[60px]">
        <Link to="/" className="text-lg py-16 px-3 font-jockey hover:bg-[#0F0775] transition-colors duration-200">
  HOME
</Link>
<Link to="/tokenomics" className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200">
  TOKENNOMICS
</Link>
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200 cursor-pointer"
          >
            ABOUT US
          </ScrollLink>
          <ScrollLink
            to="merch"
            smooth={true}
            duration={500}
            className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200 cursor-pointer"
          >
            MERCH
          </ScrollLink>
          <ScrollLink
            to="comics"
            smooth={true}
            duration={500}
            className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200 cursor-pointer"
          >
            COMICS
          </ScrollLink>
          
          
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block lg:block lg:mr-8">
          <input
            type="text"
            placeholder="TYPE HEADER AND HIT ENTER"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#0F0775] text-[#9F8E8E] font-jockey placeholder-[#9F8E8E] px-4 py-1 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-64 lg:w-80"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden focus:outline-none p-2 rounded-full bg-[#080253] hover:bg-[#0F0775] transition-all duration-300"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <div
            className="absolute top-0 left-0 right-0 bg-[#080253] w-full text-center py-4 rounded-b-lg shadow-lg z-50"
            onClick={closeMenuOnScroll}
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 mb-2 text-lg font-medium cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </ScrollLink>

            <Link to="/tokenomics" className="block text-white hover:text-gray-300 mb-2 text-lg font-medium cursor-pointer">
  TOKENNOMICS
</Link>
            <ScrollLink
              to="about-us"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 mb-2 text-lg font-medium cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </ScrollLink>
            
            <ScrollLink
              to="merch"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 mb-2 text-lg font-medium cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              MERCH
            </ScrollLink>
            <ScrollLink
              to="comics"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 mb-2 text-lg font-medium cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              COMICS
            </ScrollLink>
            
          </div>
        )}
      </div>
    </nav>
  );
}
