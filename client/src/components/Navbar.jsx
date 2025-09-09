import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("#047A3A");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("#E5E7EB");
        setTextColor("#02332d");
      } else {
        if (location.pathname === "/") {
          setBgColor("#034634");
          setTextColor("#FFFFFF");
        } else if (location.pathname === "/about") {
          setBgColor("#E5E7EB");
          setTextColor("#02332d");
        } else if (location.pathname === "/mortgage-calculator") {
          setBgColor("#0d6541");
          setTextColor("#FFFFFF");
        } else {
          setBgColor("#034634");
          setTextColor("#FFFFFF");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const getLinkClass = (path) =>
    `hover:underline ${
      location.pathname === path ? "border-b-2 border-green-500 font-bold" : ""
    }`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 py-4 sm:py-6 transition-colors duration-300 border-b"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderBottomColor: "#045C2C",
        borderBottomWidth: "1px",
      }}
    >
      {/* Logo */}
      <div className="font-bold text-xl select-none cursor-default">
        <Link to="/" className="hover:underline" style={{ color: textColor }}>
          Assignment
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex space-x-8 text-lg font-medium">
        
        <li>
          <Link
            to="/about"
            className={getLinkClass("/about")}
            style={{ color: textColor }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/mortgage-calculator"
            className={getLinkClass("/mortgage-calculator")}
            style={{ color: textColor }}
          >
            Mortgage Calculator
          </Link>
        </li>
        <li>
          <Link
            to="/start-now"
            className={getLinkClass("/start-now")}
            style={{ color: textColor }}
          >
            Start Now
          </Link>
        </li>
         
      </ul>

      {/* Desktop Right Menu */}
      <div className="hidden sm:flex items-center space-x-4">
        <button
          aria-label="Call"
          className="border rounded-full p-2 flex items-center justify-center transition"
          style={{ borderColor: textColor, color: textColor }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
              19.79 19.79 0 0 1-8.63-3.07 
              19.5 19.5 0 0 1-6-6 
              19.79 19.79 0 0 1-3.07-8.67 
              A2 2 0 0 1 4.11 2h3a2 2 0 0 
              1 2 1.72c.13 1.21.38 2.39.73 
              3.53a2 2 0 0 1-.45 2.11L9 
              10.91a16 16 0 0 0 6 6l1.54-1.54
              a2 2 0 0 1 2.11-.45c1.14.35 
              2.32.6 3.53.73a2 2 0 0 1 1.72 
              2z" />
          </svg>
        </button>
        <a
          href="#"
          className="hover:underline text-xl"
          style={{ color: textColor }}
        >
          Sign in
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="sm:hidden flex items-center p-2 border rounded-md"
        style={{ borderColor: textColor, color: textColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full sm:hidden flex flex-col items-center space-y-4 py-4 z-50"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <Link
            to="/"
            className={getLinkClass("/")}
            style={{ color: textColor }}
          >
            Buy
          </Link>
          <Link
            to="/about"
            className={getLinkClass("/about")}
            style={{ color: textColor }}
          >
            About
          </Link>
          <a href="#" className="hover:underline" style={{ color: textColor }}>
            HELOC
          </a>
          <a href="#" className="hover:underline" style={{ color: textColor }}>
            Rates
          </a>
          <a href="#" className="hover:underline" style={{ color: textColor }}>
            Better+
          </a>
          <div className="flex items-center space-x-4 mt-2">
            <button
              aria-label="Call"
              className="border rounded-full p-2 flex items-center justify-center transition"
              style={{ borderColor: textColor, color: textColor }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                  19.79 19.79 0 0 1-8.63-3.07 
                  19.5 19.5 0 0 1-6-6 
                  19.79 19.79 0 0 1-3.07-8.67 
                  A2 2 0 0 1 4.11 2h3a2 2 0 0 
                  1 2 1.72c.13 1.21.38 2.39.73 
                  3.53a2 2 0 0 1-.45 2.11L9 
                  10.91a16 16 0 0 0 6 6l1.54-1.54
                  a2 2 0 0 1 2.11-.45c1.14.35 
                  2.32.6 3.53.73a2 2 0 0 1 1.72 
                  2z" />
              </svg>
            </button>
            <a href="#" className="hover:underline" style={{ color: textColor }}>
              Sign in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
