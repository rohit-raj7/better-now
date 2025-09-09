import { useRef, useState } from "react";

const customerStories = [
  {
    name: "Paul",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.",
    customerInfo: "Paul — Better Mortgage customer",
  },
  {
    name: "Amanda",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Working with Better was a game-changer. The entire process was so transparent and easy to follow. I’d recommend them to anyone looking to buy a home.",
    customerInfo: "Amanda — First-time home buyer",
  },
  {
    name: "Tiara",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "The online portal made everything straightforward. From application to closing, Better made me feel confident and informed every step of the way.",
    customerInfo: "Tiara — Real estate investor",
  },
];

export default function Card1() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(customerStories[0]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) videoRef.current.play();
  };

  const handleCustomerSelect = (customer) => {
    setCurrentCustomer(customer);
    setIsPlaying(false);
    // Optionally, you could reset the video here as well
  };

  return (
    <div className="bg-[#fdfcf9] py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Side - Video Card */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            {/* Thumbnail */}
            {!isPlaying && (
              <div
                className="w-full h-64 sm:h-80 md:h-[500px] bg-cover bg-center relative transition-opacity duration-500 rounded-xl"
                style={{
                  backgroundImage:
                    "url('https://via.placeholder.com/800x500.png?text=Video+Thumbnail')",
                }}
              >
                {/* Play Button */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 w-7 h-7 sm:w-8 sm:h-8 text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.348 2.75-1.657l11.54 6.347a1.5 1.5 0 0 1 0 2.61l-11.54 6.347a1.5 1.5 0 0 1-2.75-1.657V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            )}

            {/* Video */}
            {isPlaying && (
              <video
                key={currentCustomer.name} // Key is important to force re-render on video source change
                ref={videoRef}
                src={currentCustomer.videoSrc}
                className="w-full h-64 sm:h-80 md:h-[500px] object-cover transition-opacity duration-500 opacity-100 rounded-xl"
                muted
                loop
                playsInline
                controls
              />
            )}

            {/* Caption - Now hidden after video starts playing */}
            {!isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 sm:p-6 text-sm sm:text-base md:text-lg">
                <p>{currentCustomer.caption}</p>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-300">
                  {currentCustomer.customerInfo}
                </p>
              </div>
            )}
          </div>

          {/* Buttons under video - Updated with dynamic styling and click handlers */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {customerStories.map((customer) => (
              <button
                key={customer.name}
                onClick={() => handleCustomerSelect(customer)}
                className={`px-5 py-2 rounded-full font-medium transition-colors ${
                  currentCustomer.name === customer.name
                    ? "border-2 border-green-700 text-green-700 bg-green-50"
                    : "border text-gray-700 bg-white"
                }`}
              >
                {customer.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-snug">
            Find out why <br /> we’re better.
          </h2>

          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-[#112615] text-white rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#1f3e25] transition w-fit mx-auto md:mx-0">
            See all our stories
          </button>

          <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-6 justify-center md:justify-start text-sm sm:text-base md:text-lg">
            <span className="text-green-700 font-medium">★</span>
            <span className="text-gray-800 font-medium">Trustpilot</span>
            <span className="text-gray-600">Excellent</span>
            <span className="text-gray-600">4.4 out of 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}