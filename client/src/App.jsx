import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import About from "./about/About";
import MortgageCalculator from './components/mortgageCalculator/Calculator'
import Start from "./components/startPage/StartPage";

const App = () => {
  return (
    <Router>
      <div className="bg-[#034634] bg-gradient-to-b from-[#034634] via-[#045c42] to-[#0d6541] min-h-screen text-white font-sans">
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/start-now" element={<Start />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
