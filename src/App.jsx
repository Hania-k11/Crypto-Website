import bg from './assets/bg.png';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div
      className="relative w-full bg-gray-200 bg-no-repeat bg-top"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', // Ensures the image covers the full container
        backgroundRepeat: 'repeat', // Ensures the image repeats
        minHeight: '100vh', // Ensures at least full viewport height
      }}
    >
      {/* Components on top of the background */}
      <div className="relative flex flex-col items-center justify-center py-20 text-white">
        {/* Your components here */}
        <Navbar/>
        <Hero/>
      </div>
    </div>
  );
}