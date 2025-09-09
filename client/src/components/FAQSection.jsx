import { useState } from "react";

// ----------------- Reusable Components -----------------
const RoundedRect = ({ width, height, color, children }) => (
  <div
    className="flex items-center justify-center text-white font-normal text-xs flex-shrink-0 rounded-[12px]"
    style={{ width, height, backgroundColor: color }}
  >
    {children}
  </div>
);

const MortgageCalculator = () => (
  <div className="bg-[#def0e3] p-6 rounded-lg flex flex-col justify-between w-full max-w-sm mx-auto box-border">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-[#083d33] font-bold text-lg sm:text-xl">
        Mortgage calculator
      </h3>
      <button className="w-9 h-9 rounded-full border text-gray-900 border-gray-600 bg-transparent flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
        →
      </button>
    </div>

    <div className="flex bg-[#1de582] rounded-xl p-3 items-center w-full overflow-x-auto gap-2">
      <div className="flex items-center justify-center text-white text-sm font-normal text-center rounded-full flex-shrink-0 bg-[#026844] w-20 h-20">
        40%
      </div>
      <div className="flex items-center justify-center text-white text-sm font-normal text-center rounded-full flex-shrink-0 bg-[#02402b] w-16 h-16">
        30%
      </div>
      <RoundedRect width={30} height={60} color="#a34b00">
        20%
      </RoundedRect>
      <RoundedRect width={24} height={60} color="#ffc107">
        5%
      </RoundedRect>
      <RoundedRect width={24} height={60} color="#6655ff">
        5%
      </RoundedRect>
    </div>
  </div>
);

const AffordabilityCalculator = () => (
  <div className="bg-[#def0e3] p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between w-full max-w-lg mx-auto box-border gap-6">
    <div className="max-w-md flex-1">
      <h3 className="mb-3 font-bold text-lg sm:text-xl text-[#083d33]">
        Affordability calculator
      </h3>
      <p className="mb-4 text-[#19332f] text-sm leading-snug">
        Got homeownership dreams? Let's put some numbers behind them. Our
        affordability calculator estimates the maximum home you can afford.
      </p>
      <button className="w-9 h-9 rounded-full border text-gray-900 border-gray-600 bg-transparent flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
        →
      </button>
    </div>

    <div className="flex-shrink-0">
      <img
        src="https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp"
        alt="Affordability Calculator"
        className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
      />
    </div>
  </div>
);

const HELOCCalculator = () => (
  <div className="bg-[#def0e3] p-6 rounded-lg flex flex-col md:flex-row w-full max-w-2xl mx-auto box-border items-center gap-6 md:gap-8">
    <div className="w-40 h-36 sm:w-[230px] sm:h-[200px] rounded-b-[120px] bg-[#026844] relative overflow-hidden flex-shrink-0">
      <div className="w-full h-[70px] bg-[#026844] absolute top-0 left-0 rounded-b-[120px] text-white font-semibold text-xs sm:text-sm flex items-center justify-center">
        70%
      </div>
      <div className="w-full h-[70px] bg-[#00402a] absolute bottom-0 left-0 rounded-t-[120px] text-white font-semibold text-xs sm:text-sm flex items-center justify-center">
        30%
      </div>
    </div>
    <div className="max-w-md text-center md:text-left">
      <h3 className="mb-3 font-bold text-lg sm:text-xl text-[#083d33]">
        HELOC calculator
      </h3>
      <p className="mb-6 text-[#19332f] text-sm leading-snug">
        Need cash? Quickly see how much equity you can borrow from your home
        and what your monthly payments might be.
      </p>
      <button className="w-9 h-9 rounded-full border text-gray-900 border-gray-600 bg-transparent flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
        →
      </button>
    </div>
  </div>
);

const FixedRateLoanComparison = () => (
  <div className="bg-[#def0e3] p-6 rounded-lg flex flex-col justify-between w-full max-w-sm mx-auto box-border">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-[#083d33] font-bold text-lg sm:text-xl">
        Fixed-rate loan comparison calculator
      </h3>
      <button className="w-9 h-9 rounded-full border text-gray-900 border-gray-600 bg-transparent flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
        →
      </button>
    </div>

    <img
      src="https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp"
      alt="Fixed Rate Loan Comparison"
      className="w-full h-32 object-contain"
    />
  </div>
);

// ----------------- Guides Cards Data -----------------
const cards = [
  {
    title: "What is a good debt-to-income ratio for a home loan?",
    description: null,
    readingTime: "5 minutes",
    image: (
      <div className="flex items-center justify-center p-4 bg-[#32906c] rounded-lg h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#f3bd4e]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12H3" />
          <path d="M12 21V3" />
          <circle cx="12" cy="12" r="8" />
          <path d="M8 8l8 8M8 16l8-8" />
        </svg>
      </div>
    ),
  },
  {
    title: "Buying a house without realtor",
    description: "Thinking about buying a house without a real estate agent? Read this first.",
    readingTime: "5 minutes",
    image: (
      <img
        src="https://placehold.co/200x150/d1d5db/000000?text=House"
        alt="A photograph of a house"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
  },
  {
    title: "Timeline for homebuying process",
    description: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
    readingTime: "3 minutes",
    image: (
      <div className="flex items-center justify-center p-4 bg-[#23684d] rounded-lg h-full">
        <div className="flex space-x-4">
          <div className="w-8 h-8 rounded-full bg-[#f3bd4e]" />
          <div className="w-8 h-8 rounded-full bg-[#f3bd4e]" />
          <div className="w-8 h-8 rounded-full bg-[#f3bd4e]" />
        </div>
      </div>
    ),
  },
  {
    title: "Conventional loan requirements",
    description: null,
    readingTime: "3 minutes",
    image: (
      <img
        src="https://placehold.co/150x200/d1d5db/000000?text=Book"
        alt="A photograph of a book"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
  },
];

const Card = ({ title, description, readingTime, image }) => {
  const isImageRight = title === "Buying a house without realtor";
  const isImageBottom = title === "Conventional loan requirements";
  const isAbstract =
    title === "What is a good debt-to-income ratio for a home loan?" ||
    title === "Timeline for homebuying process";

  return (
    <div
      className={`p-6 bg-green-50 rounded-xl shadow-sm border border-gray-200 flex flex-col ${
        isImageRight
          ? "md:flex-row"
          : isImageBottom
          ? "md:flex-row-reverse"
          : ""
      } transition-all duration-300 hover:shadow-md`}
    >
      <div
        className={`flex flex-col flex-grow ${
          isImageRight ? "pr-6" : ""
        } ${isImageBottom ? "pl-6" : ""}`}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        {description && (
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        )}
        <div className="flex items-center justify-between mt-auto pt-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f1ec] text-[#23684d] transition-all duration-300 hover:bg-[#d4e4da]">
            →
          </button>
          <span className="text-sm text-gray-500 flex items-center">
            ⏱ {readingTime}
          </span>
        </div>
      </div>

      {image && (
        <div
          className={`flex-shrink-0 flex items-center justify-center ${
            isImageRight || isImageBottom
              ? "w-full md:w-1/3"
              : isAbstract
              ? "w-full md:w-1/2"
              : ""
          } mt-4 md:mt-0`}
        >
          {image}
        </div>
      )}
    </div>
  );
};

// ----------------- Main FAQ Section -----------------
export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="bg-[#fdfcf9] py-12 px-4 sm:py-16 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug">
            Got questions?
            <br />
            We’ve got answers
          </h2>

          <div className="flex gap-3 flex-wrap">
            {["products", "calculators", "guides"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full border-2 font-medium text-sm sm:text-base transition ${
                  activeTab === tab
                    ? "border-green-700 text-green-700 bg-green-50"
                    : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                }`}
              >
                {tab === "products"
                  ? "Our products"
                  : tab === "calculators"
                  ? "Calculators"
                  : "Guides & FAQs"}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "products" && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  How AI Mortgage Lending is Transforming the Home Loan Process
                </h3>
                <button className="mt-3 w-10 h-10 flex items-center justify-center border rounded-full border-gray-400 text-gray-600 hover:bg-gray-100">
                  →
                </button>
              </div>
              <img
                src="https://images.pexels.com/photos/984923/pexels-photo-984923.jpeg"
                alt="AI Mortgage"
                className="mt-6 rounded-lg shadow-sm object-cover w-full h-48 sm:h-52"
              />
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  One Day Mortgage<sup>1</sup>
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for
                  traditional lenders. We do it in a single day.<sup>1</sup>
                </p>
                <button className="mt-3 w-10 h-10 flex items-center justify-center border rounded-full border-gray-400 text-gray-600 hover:bg-gray-100">
                  →
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="One Day Mortgage"
                className="mt-6 rounded-lg shadow-sm object-cover w-full h-40"
              />
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6 transition hover:shadow-lg">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
                alt="Better HELOC"
                className="rounded-lg shadow-sm w-full md:w-1/2 object-cover h-40 md:h-auto"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Better HELOC
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of
                    Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup>
                  </p>
                </div>
                <button className="mt-4 w-10 h-10 flex items-center justify-center border rounded-full border-gray-400 text-gray-600 hover:bg-gray-100 self-start">
                  →
                </button>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md flex flex-col justify-between transition hover:shadow-lg">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Insurance</h3>
                <button className="mt-3 w-10 h-10 flex items-center justify-center border rounded-full border-gray-400 text-gray-600 hover:bg-gray-100">
                  →
                </button>
              </div>
              <img
                src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg"
                alt="Insurance"
                className="mt-6 rounded-lg shadow-sm object-cover w-full h-52"
              />
            </div>
          </div>
        )}

        {activeTab === "calculators" && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <MortgageCalculator />
            <AffordabilityCalculator />
            <HELOCCalculator />
            <FixedRateLoanComparison />
          </div>
        )}

        {activeTab === "guides" && (
          <div className="mt-1 text-gray-700 grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
