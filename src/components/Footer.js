// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" items-center  px-16 bg-green-600 text-white">
      <div className="items-center grid grid-cols-1 justify-between text-white gap-4 border-t border-gray-100 py-6 md:grid-cols-2 ">
        <p className="text-sm/6 text-white max-md:text-center">© 2024 Trippy. All rights reserved.</p>
        <div className="flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end"><a >Privacy policy</a></div></div>     
    </footer>
  );
};

export default Footer;


