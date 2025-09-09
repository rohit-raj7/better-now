import { useState } from "react";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(1556000);
  const [downPayment, setDownPayment] = useState(311200);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState("800020");

  // Extra costs
  const [propertyTax, setPropertyTax] = useState(351);
  const [insurance, setInsurance] = useState(0);
  const [hoa, setHoa] = useState(0);
  const [utilities, setUtilities] = useState(0);

  const loanAmount = Math.max(homePrice - downPayment, 0);

  const monthlyRate = interestRate / 100 / 12;

  const numberOfPayments = loanTerm * 12;

  const monthlyPrincipalInterest =
    interestRate === 0
      ? loanAmount / numberOfPayments
      : (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const monthlyPayment =
    monthlyPrincipalInterest + propertyTax + insurance + hoa + utilities;

  const formatCurrency = (num) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  const principalPct = (monthlyPrincipalInterest / monthlyPayment) * 100;
  const taxPct = (propertyTax / monthlyPayment) * 100;
  const insurancePct = (insurance / monthlyPayment) * 100;
  const hoaPct = (hoa / monthlyPayment) * 100;
  const utilitiesPct = (utilities / monthlyPayment) * 100;

  return (
    <div className="min-h-screen mt-20 bg-green-50 flex flex-col items-center p-4 md:p-8">
    <h1 className="text-left text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-snug">
  Estimate your monthly <br className="md:hidden" /> mortgage payments
</h1>

      {/* Main Card */}
      <div className="bg-white shadow rounded-2xl p-6 md:p-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Inputs */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Home Price */}
            <div>
              <label className="block text-sm md:text-base text-gray-600">
                Home price
              </label>
              <div className="flex items-center border rounded-lg p-3 mt-2 text-lg">
                <span className="mr-2">$</span>
                <input
                  type="number"
                  min="0"
                  value={homePrice}
                  onChange={(e) => setHomePrice(+e.target.value || 0)}
                  className="w-full outline-none text-base md:text-lg text-black"
                />
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="block text-sm md:text-base text-gray-600">
                Down payment
              </label>
              <div className="flex border rounded-lg mt-2 text-lg">
                <div className="flex items-center px-3 w-full">
                  <span>$</span>
                  <input
                    type="number"
                    min="0"
                    value={downPayment}
                    onChange={(e) => setDownPayment(+e.target.value || 0)}
                    className="w-full outline-none ml-2 text-base md:text-lg text-black"
                  />
                </div>
                <div className="flex items-center border-l px-3 md:px-5 bg-gray-50 text-sm md:text-lg font-medium">
                  {homePrice > 0
                    ? ((downPayment / homePrice) * 100).toFixed(0)
                    : 0}
                  %
                </div>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="block text-sm md:text-base text-gray-600">
                Length of loan
              </label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(+e.target.value)}
                className="w-full border rounded-lg p-3 mt-2 text-base md:text-lg text-black"
              >
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
              </select>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm md:text-base text-gray-600">
                Interest rate
              </label>
              <div className="flex items-center border rounded-lg p-3 mt-2 text-lg">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={interestRate}
                  onChange={(e) => setInterestRate(+e.target.value || 0)}
                  className="w-full outline-none text-base md:text-lg text-black"
                />
                <span className="ml-2">%</span>
              </div>
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm md:text-base text-gray-600">
                ZIP code
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full border rounded-lg p-3 mt-2 text-base md:text-lg text-black"
              />
            </div>
          </div>

          {/* Right Side - Monthly Payment */}
          <div className="flex flex-col justify-between bg-gray-50 rounded-lg p-6 mt-4 lg:mt-0">
            <p className="text-sm md:text-base text-gray-600">
              Monthly payment
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              {monthlyPayment ? formatCurrency(monthlyPayment) : "$0"}/mo
            </p>
            <button className="bg-green-700 text-white py-3 md:py-4 mt-5 rounded-lg text-base md:text-lg font-semibold hover:bg-green-800 transition">
              Get pre-approved
            </button>
          </div>
        </div>

        {/* Home Price Slider */}
        <div className="mt-6 md:mt-8">
          <input
            type="range"
            min="50000"
            max="2000000"
            step="1000"
            value={homePrice}
            onChange={(e) => setHomePrice(+e.target.value)}
            className="w-full accent-green-700 h-2"
          />
        </div>
      </div>

      {/* Breakdown Section */}
      <div className="flex flex-col lg:flex-row bg-green-50 p-6 md:p-12 rounded-lg max-w-7xl mx-auto mt-8 w-full gap-8">
        {/* Left Section - Progress bar */}
        <div className="flex-1">
          <h2 className="text-gray-900 font-semibold mb-4 md:mb-6 text-lg md:text-xl">
            Monthly payment breakdown
          </h2>
          <div className="flex w-full h-10 md:h-[70px] rounded-full overflow-hidden shadow-md text-xs md:text-xl">
            <div
              className="bg-green-800 font-semibold flex items-center justify-center text-white"
              style={{ width: `${principalPct}%` }}
            >
              {principalPct.toFixed(0)}%
            </div>
            <div className="bg-purple-600" style={{ width: `${taxPct}%` }} />
            <div
              className="bg-purple-300"
              style={{ width: `${insurancePct}%` }}
            />
            <div className="bg-yellow-300" style={{ width: `${hoaPct}%` }} />
            <div className="bg-red-300" style={{ width: `${utilitiesPct}%` }} />
          </div>
        </div>

        {/* Right Section - Breakdown */}
        <div className="flex-1">
          <h2 className="text-gray-900 font-semibold mb-4 text-lg md:text-xl">
            Monthly payment breakdown
          </h2>
          <div className="text-2xl md:text-4xl text-black font-bold mb-6">
            {formatCurrency(monthlyPayment)}/mo
          </div>

          <div className="space-y-6 md:space-y-8 mb-6">
            {/* Principal & Interest */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-6 md:h-8 rounded bg-green-800"></div>
                <span className="text-gray-900 text-sm md:text-lg">
                  Principal & interest
                </span>
              </div>
              <span className="font-bold text-gray-900 text-sm md:text-lg">
                {formatCurrency(monthlyPrincipalInterest)}
              </span>
            </div>

            {/* Property Taxes */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-6 md:h-8 rounded bg-purple-600"></div>
                <span className="text-gray-700 text-sm md:text-lg">
                  Property taxes
                </span>
              </div>
              <div className="flex items-center border border-gray-300 bg-white rounded-md px-3 py-2 md:px-4 md:py-3 w-[120px] md:w-[160px]">
                <span className="text-gray-600 mr-1 md:mr-2">$</span>
                <input
                  type="number"
                  min="0"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(+e.target.value || 0)}
                  className="w-full outline-none font-bold text-gray-900 text-sm md:text-lg"
                />
              </div>
            </div>

            {/* Insurance */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-6 md:h-8 rounded bg-purple-300"></div>
                <span className="text-gray-700 text-sm md:text-lg">
                  Homeowners insurance
                </span>
              </div>
              <div className="flex items-center border border-gray-300 bg-white rounded-md px-3 py-2 md:px-4 md:py-3 w-[120px] md:w-[160px]">
                <span className="text-gray-600 mr-1 md:mr-2">$</span>
                <input
                  type="number"
                  min="0"
                  value={insurance}
                  onChange={(e) => setInsurance(+e.target.value || 0)}
                  className="w-full outline-none font-bold text-gray-900 text-sm md:text-lg"
                />
              </div>
            </div>

            {/* HOA Fees */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-6 md:h-8 rounded bg-yellow-300"></div>
                <span className="text-gray-700 text-sm md:text-lg">HOA fees</span>
              </div>
              <div className="flex items-center border border-gray-300 bg-white rounded-md px-3 py-2 md:px-4 md:py-3 w-[120px] md:w-[160px]">
                <span className="text-gray-600 mr-1 md:mr-2">$</span>
                <input
                  type="number"
                  min="0"
                  value={hoa}
                  onChange={(e) => setHoa(+e.target.value || 0)}
                  className="w-full outline-none font-bold text-gray-900 text-sm md:text-lg"
                />
              </div>
            </div>

            {/* Utilities */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-6 md:h-8 rounded bg-red-300"></div>
                <span className="text-gray-700 text-sm md:text-lg">
                  Utilities
                </span>
              </div>
              <div className="flex items-center border border-gray-300 bg-white rounded-md px-3 py-2 md:px-4 md:py-3 w-[120px] md:w-[160px]">
                <span className="text-gray-600 mr-1 md:mr-2">$</span>
                <input
                  type="number"
                  min="0"
                  value={utilities}
                  onChange={(e) => setUtilities(+e.target.value || 0)}
                  className="w-full outline-none font-bold text-gray-900 text-sm md:text-lg"
                />
              </div>
            </div>
          </div>

          <button className="bg-gray-200 text-gray-900 font-bold py-3 px-6 md:py-4 md:px-10 rounded-md hover:bg-gray-300 transition text-sm md:text-lg">
            Copy estimate link
          </button>
        </div>
      </div>
    </div>
  );
}
