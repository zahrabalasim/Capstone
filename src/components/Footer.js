// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-black">
          2024 © All Rights Reserved
        </span>
        <div className="flex space-x-4">
          <a href="#" className="text-green-800 hover:text-green-600">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
