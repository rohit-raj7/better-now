import React from "react";

const LoanUI = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Phone Mockup */}
      <div className="relative w-[280px] h-[452px]">
        <div className="absolute inset-0 rounded-[1.6rem] bg-black/40 border-[3px] border-black"></div>

        {/* Card 1 (Loan Approval) */}
        <div className="absolute -top-5 -left-10  bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 w-52">
          <div className="flex items-start space-x-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-white">
                Congrats, you're
                <br />
                pre-approved for a loan up to
              </p>
              <p className="text-xl font-bold text-green-400">$450,000</p>
            </div>
          </div>
        </div>

        {/* Card 2 (FICO Score) */}
        <div className="absolute top-10 -right-11 bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 w-52">
          <div className="flex items-center space-x-2">
            {/* Circular Progress */}
            <div className="relative w-11 h-11">
              <svg
                className="absolute inset-0 transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="#2d473b"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="#22c55e"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="100"
                  strokeDashoffset="40"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[10px] font-bold text-white">
                580 <span className="text-[8px]">FICO</span>
              </div>
            </div>
            <p className="text-xs text-white">
              You don't need
              <br />
              perfect credit to qualify.
            </p>
          </div>
        </div>

        {/* Card 3 (Instant Answers) */}
        <div className="absolute bottom-24 -right-11 bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 w-52">
          <div className="flex items-start space-x-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-xs text-white">
              Instant answers — anytime, anywhere with Betsy™ AI.
            </p>
          </div>
        </div>

        {/* Card 4 (Rate Options) */}
        <div className="absolute bottom-5 -left-10 bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 w-52">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <p className="text-xs text-white">
              See your customized rate options in seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanUI;
