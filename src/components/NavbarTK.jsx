import { useState } from 'react';
import { Search } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function NavbarTK() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-2 flex w-full items-center justify-between -mt-16">
      {/* Logo Section */}
      <div className="lg:ml-16  w-16 md:w-48  rounded-full overflow-hidden">
  <img
    src={logo}
    alt="Logo"
    className=""
  />
</div>
      

      {/* Navigation Links - Centered for larger screens */}
      <div className="overflow-hidden md:pl-8 bg-[#080253] lg:ml-36 lg:pl-11 lg:pr-4 w-full hidden md:flex items-center justify-between rounded-full mb-8">
        <div className="flex-grow flex items-center justify-center space-x-6 text-white h-[60px] ">
        <Link to="/" className="text-lg py-16 px-3 font-jockey hover:bg-[#0F0775] transition-colors duration-200">
  HOME
</Link>
<Link to="/aboutus" className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200">
  ABOUT US
</Link>
<Link to="/merch" className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200">
  MERCH
</Link>
<Link to="/nft" className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200">
  NFT
</Link>
<Link to="/media" className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200">
  MEDIA
</Link>
<Link to="/game" className="text-lg font-jockey py-16 px-3 hover:bg-[#0F0775] transition-colors duration-200">
  GAME
</Link>
        </div>

        {/* Search Bar - Positioned to the right for larger screens */}
        <div className="relative hidden  md:block lg:block lg:mr-8 ">
          <input
            type="text"
            placeholder="TYPE HEADER AND HIT ENTER"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#0F0775] text-[#9F8E8E] font-jockey placeholder-[#9F8E8E]  px-4 py-1 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500  md:w-64 lg:w-80" // Increased width
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4" />
        </div>
      </div>

     

      {/* Mobile Search Bar - Hidden on medium and larger screens */}
      <div className="relative md:hidden w-full hidden">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-[#000044] text-white placeholder-gray-400 px-4 py-1 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      </div>


      <div className=" ">
  {/* Hamburger or Close Icon */}
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="text-white md:hidden focus:outline-none p-2 rounded-full bg-[#080253] hover:bg-[#0F0775] transition-all duration-300"
  >
    {isMenuOpen ? (
      // Cross Icon (Vertical "X")
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      // Hamburger Icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    )}
  </button>

  {/* Dropdown Menu */}
  {isMenuOpen && (
    <div className="mt-12 absolute top-12 left-0 right-0 bg-[#080253] w-full text-center py-4 rounded-b-lg shadow-lg">
      <a
        href="#"
        className="block text-white hover:text-gray-300 mb-2 text-lg font-medium"
      >
        HOME
      </a>
      <a
        href="#"
        className="block text-white hover:text-gray-300 text-lg font-medium"
      >
        TOKENNOMICS
      </a>
    </div>
  )}
</div>

    </nav>
  );
}
