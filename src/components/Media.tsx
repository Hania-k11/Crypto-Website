import React from "react";
import Navbar from "./NavbarAboutus";

// Video data
const videos = [
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/PfgkFbsK8dU?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fenkrypto.io&widgetid=1",
    title: "Enkrypto Trailer",
  },
  {
    type: "video",
    src: "https://enkrypto.io/wp-content/uploads/2024/11/EnKrypto-cover.mp4",
    title: "Highlight 1",
  },
  {
    type: "video",
    src: "https://enkrypto.io/wp-content/uploads/2024/11/cam-EnKrypto-1.mp4",
    title: "Highlight 2",
  },
  {
    type: "video",
    src: "https://enkrypto.io/wp-content/uploads/2024/11/Kryptopolis.mp4",
    title: "Highlight 3",
  },
  {
    type: "video",
    src: "https://enkrypto.io/wp-content/uploads/2024/11/Don_t-play.mp4",
    title: "Highlight 1",
  },
  {
    type: "video",
    src: "https://enkrypto.io/wp-content/uploads/2024/11/EnKrypto-Superhero-SD-480p.mov",
    title: "Highlight 2",
  },
  {
    type: "video",
    src: "https://enkrypto.io/wp-content/uploads/2024/11/Face-of-my-city.mp4",
    title: "Highlight 3",
  },
  {
    type: "video",
    src: "https://enkrypto.io/wp-content/uploads/2024/11/Superman.mp4",
    title: "Highlight 4",
  },
];

export default function VideoPage() {
  return (
    <>
    <Navbar/>
    
    <div className="bg-[#02001E] text-white min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-jersey10 text-[#E2D223]">
            Enkrypto Videos
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Explore our latest videos, highlights, and trailers.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#1A1134] rounded-lg overflow-hidden shadow-md"
            >
              {/* Video Section */}
              {video.type === "youtube" ? (
                <iframe
                  src={video.src}
                  title={video.title}
                  className="w-full h-48 sm:h-64"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  controls
                  className="w-full h-48 sm:h-64 object-cover"
                  src={video.src}
                ></video>
              )}
              {/* Video Title */}
              <div className="p-4 text-center">
                <h2 className="text-lg md:text-xl font-bold">{video.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  );
}
