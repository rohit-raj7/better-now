import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Logo & description */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold mb-2">MyCompany</h1>
          <p className="text-sm md:max-w-xs">
            We provide the best solutions to help your business grow. Join our community today!
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Company</h3>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Support</h3>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-200"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-green-500 pt-4 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
