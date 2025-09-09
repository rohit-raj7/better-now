import React, { useState } from "react";
import cityLogo from "../assets/city.webp";
import goldmanLogo from "../assets/OIP (2).webp";

// Reusable Section Component
const Section = ({ bg, children, className = "" }) => {
  return (
    <section className={`${bg} py-20 px-4 sm:px-6 md:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

const StorySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const logos = [
    { src: cityLogo, alt: "City" },
    { src: goldmanLogo, alt: "Goldman Sachs" },
    { src: cityLogo, alt: "City" },
    { src: goldmanLogo, alt: "Goldman Sachs" },
    { src: cityLogo, alt: "City" },
    { src: goldmanLogo, alt: "Goldman Sachs" },
    { src: cityLogo, alt: "City" },
  ];

  const timelineData = [
    { year: "2014", text: "After Vishal Garg’s first attempt to purchase his own dream home, and automating home finance to make it cheaper, easier, and faster for all." },
    { year: "2015", text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)." },
    { year: "2016", text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors." },
    { year: "2017", text: "Better expands into the real estate market with Better Real Estate." },
    { year: "2018", text: "Better Mortgage partners with Ally Bank to build Ally powered by Better." },
    { year: "2019", text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers." },
    { year: "2022", text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online." },
    { year: "2023", text: "Better Mortgage launches One Day Mortgage: The first offering to customers." },
  ];

  return (
    <div className="w-full">
      {/* Our Mission Section */}
      <Section bg="bg-[#FFFCF9] text-center">
        <h1 className="text-green-700 text-4xl sm:text-5xl font-bold mb-6">Our mission</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug max-w-3xl mx-auto">
          We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
        </p>
      </Section>

      {/* The Status Quo Section */}
      <Section bg="bg-[#faf9f6] py-16">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The status quo is broken</h2>
            <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-4 rounded-lg transition">
              Read Vishal’s story
            </button>
          </div>

          {/* Right Video Section */}
          <div className="relative w-full">
            {isPlaying ? (
              <video
                className="rounded-md w-full h-auto"
                autoPlay
                controls
                playsInline
                poster="https://via.placeholder.com/600x400"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <>
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.A_0Qq1PoIMpLxTJ-UsTq2AHaE7?r=0&cb=thfvnext&w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Video thumbnail"
                  className="rounded-md w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white bg-opacity-80 flex items-center justify-center hover:bg-opacity-100 transition shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </Section>

      {/* How We're Changing Things Section */}
      <Section bg="bg-green-700 text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">How we’re changing things</h2>
        <div className="space-y-6 text-lg sm:text-xl md:text-lg leading-relaxed max-w-5xl mx-auto">
          <p>
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
          </p>
          <p>
            That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </Section>

      {/* Logos Section */}
      <section className="py-12 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Backed by</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center grayscale hover:grayscale-0 transition">
              <img src={logo.src} alt={logo.alt} className="h-10 sm:h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Company timeline</h2>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block" />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div key={index} className="mb-12 flex flex-col md:flex-row justify-between items-center w-full">
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-5/12 w-full p-6 bg-gray-100 rounded-lg shadow-lg mb-4 md:mb-0">
                    <p className="text-gray-700 text-lg sm:text-xl">{item.text}</p>
                  </div>
                  <div className="relative flex items-center justify-center w-20 h-12 sm:w-24 sm:h-14 bg-green-600 text-white text-lg sm:text-2xl font-bold rounded-xl shadow-lg mb-4 md:mb-0">
                    {item.year}
                  </div>
                  <div className="md:w-5/12 w-full"></div>
                </>
              ) : (
                <>
                  <div className="md:w-5/12 w-full"></div>
                  <div className="relative flex items-center justify-center w-20 h-12 sm:w-24 sm:h-14 bg-green-600 text-white text-lg sm:text-2xl font-bold rounded-xl shadow-lg mb-4 md:mb-0">
                    {item.year}
                  </div>
                  <div className="md:w-5/12 w-full p-6 bg-gray-100 rounded-lg shadow-lg mb-4 md:mb-0">
                    <p className="text-gray-700 text-lg sm:text-xl">{item.text}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StorySection;
