import donut from '../assets/donut.png';

export default function DashboardTK() {
  return (
    <div id="tokenomics" className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <h1 className="text-[#FFE135] lg:mb-20 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-8 font-jersey10">
          Tokenomics
        </h1>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-8">
            {/* Text Section */}
            <div className="text-[#FFE135] text-left space-y-4 mb-10 lg:mb-20">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jersey10 lg:-mt-20">Buy/Sell TAX: 0%</p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jersey10">SUPPLY:</p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jersey10">1,000,000,000,000</p>
            </div>

            {/* Contract Section */}
            <div className="space-y-4">
              <p className="text-[#FFE135] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-jersey10">Contract Address</p>
              <button
                className="bg-[#FFE135] text-black font-jersey10 text-sm sm:text-base lg:text-3xl px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FFD700] transition-colors"
                onClick={() => navigator.clipboard.writeText('contract-address-here')}
              >
                Copy
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Center Column (Donut Chart) */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 animate-pulse">
              <img src={donut} alt="Donut Chart" />
            </div>
            {/* Buy Button */}
            <button className="bg-[#FFE135] text-[#02001E] text-lg sm:text-xl lg:text-4xl px-6 sm:px-8 py-2 sm:py-3 rounded-md font-bold hover:bg-[#FFD700] transition-transform transform hover:scale-105 font-jersey10">
              Buy Tokenomics
            </button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-end text-right space-y-4 mt-8 lg:-mt-60">
            {/* Text Section */}
            <div className="text-[#FFE135]">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-jersey10 lg:-mt-28">Liquidity Burned</p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-jersey10 lg:-mt-18">Ownership Revoked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
