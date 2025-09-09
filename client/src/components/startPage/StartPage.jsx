import { Phone } from "lucide-react";

export default function Start() {
  return (
    <div className="min-h-screen flex flex-col mt-14 mb-7 items-center bg-white text-gray-900">
     
      <main className="flex-1 flex flex-col items-center text-center px-4 mt-12">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-green-500 bg-white shadow-md relative">
          <div className="absolute w-14 h-14 rounded-full border-2 border-green-200 animate-pulse"></div>
          <span className="text-green-700 text-xl">🏠</span>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-semibold">
          Hi, I'm Betsy!
          <br />
          <span className="text-gray-800">What can I help you with?</span>
        </h1>

        {/* Options */}
        <div className="flex flex-col gap-4 mt-8 w-full max-w-md">
          <button className="flex items-center gap-3 px-5 py-4 border rounded-md hover:shadow-md transition bg-white">
            <span className="text-green-700 text-lg">💵</span>
            <span className="font-medium text-gray-800">Buying a home</span>
          </button>

          <button className="flex items-center gap-3 px-5 py-4 border rounded-md hover:shadow-md transition bg-white">
            <span className="text-green-700 text-lg">🏡</span>
            <span className="font-medium text-gray-800">
              Refinancing my mortgage
            </span>
          </button>

          <button className="flex items-center gap-3 px-5 py-4 border rounded-md hover:shadow-md transition bg-white">
            <span className="text-green-700 text-lg">💰</span>
            <span className="font-medium text-gray-800">
              Get cash from my home
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-16 mt-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">$500B</p>
            <p className="text-sm text-gray-600">
              home loans funded entirely online
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">300K</p>
            <p className="text-sm text-gray-600">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>

        {/* Unlock Box */}
        <div className="mt-10 bg-green-50 rounded-md p-6 max-w-md text-left shadow-sm">
          <p className="text-gray-700 font-medium mb-3">
            After a few questions, you'll unlock:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              ✅ Custom mortgage rates
            </li>
            <li className="flex items-center gap-2">💲 Exclusive offers</li>
            <li className="flex items-center gap-2">
              📱 A personalized dashboard
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
