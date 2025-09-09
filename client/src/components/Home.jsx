import React from "react";
import Card from "./Card";

import FAQSection from "./FAQSection";
import Card1 from "./Card1";

const Home = () => {
  return (
    <>
     <main className="flex flex-col justify-center items-center px-6 text-center max-w-[960px] mx-auto mt-20">
      <h1 className="mt-4 text-6xl font-extrabold leading-tight max-w-[900px] text-white">
        The first{" "}
        <span className="bg-gradient-to-r from-green-400 via-teal-400 to-purple-600 bg-clip-text text-transparent">
          AI-powered
        </span>{" "}
        Mortgage
      </h1>

      <p className="mt-6 text-lg max-w-md mx-auto leading-relaxed text-white/90">
        Our tech unlocks lower rates, higher chances of approval, and a lightning-fast process from approval to closing. Over $100 billion funded.
      </p>

      <button className="mt-10 bg-green-500 hover:bg-green-400 transition rounded-full px-10 py-4 text-black font-medium text-lg">
        Start my pre-approval
      </button>

      <div className="mt-3 text-sm flex items-center justify-center space-x-3 text-white/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>3 min</span>
        <span className="mx-2">|</span>
        <span>No hard credit check</span>
      </div>
    </main>
    <Card />
    <Card1 /> 
    <FAQSection /> 
    
    </>
  );
};

export default Home;
