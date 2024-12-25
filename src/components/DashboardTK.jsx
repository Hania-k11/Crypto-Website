import donut from '../assets/donut.png';

export default function DashboardTK() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="text-[#FFE135] text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-8 font-jersey10">
          Tokenomics
        </h1>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-8">
            {/* Text Section */}
            <div className="text-[#FFE135] text-left">
              <p className="text-6xl font-jersey10">Buy/Sell TAX: 0%</p>
              <p className="text-6xl font-jersey10">SUPPLY:</p>
              <p className="text-6xl font-jersey10">1,000,000,000,000</p>
            </div>

            {/* Contract Section */}
            <div className="space-y-4 text-left">
              <p className="text-[#FFE135] text-xl font-jersey10">Contract Address</p>
              <button
                className="bg-[#FFE135] text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FFD700] transition-colors"
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

          {/* Right Column */}
          <div className="text-right space-y-2">
            <p className="text-[#FFE135] text-xl font-jersey10">Liquidity Burned</p>
            <p className="text-[#FFE135] text-xl font-jersey10">Ownership Revoked</p>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="relative w-64 h-64 lg:w-96 mx-auto -mt-24">
          <img src={donut} alt="Donut Chart" />
        </div>

        {/* Buy Button */}
        <div className="text-center mt-8">
          <button className="bg-[#FFE135] text-black px-8 py-3 rounded-md text-lg font-bold hover:bg-[#FFD700] transition-colors transform hover:scale-105 font-jersey10">
            Buy Tokenomics
          </button>
        </div>
      </div>
    </div>
  );
}
