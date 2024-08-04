// import React, {useState} from 'react';
// import { BiSearch } from "react-icons/bi";
// import { BsPerson } from "react-icons/bs";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from 'react-icons/ai'
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// import './NavbarStyles.css';

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const handleNav = () =>setNav(!nav);
//   return (
//     <div className={nav ? 'navbar navbar-bg' : 'navbar'} >
//       <div className={nav ? 'logo dark' : 'logo'}>
//         <h2>Trippy.</h2>
//       </div>
//       <ul className='nav-menu'>
//         <li>Home</li>
//         <li>Destinations</li>
//         <li>About us</li>
//         <li>Contact us</li>
//       </ul>
   
//       <div className='hamburger' onClick={handleNav}>
//       {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
//       </div>
//       <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
//         <ul className='mobile-nav'>
//         <li>Home</li>
//         <li>Destinations</li>
//         <li>About us</li>
//         <li>Contact us</li>
//         </ul>
//         <div className='mobile-menu-bottom'>
//         <div className='menu-icons'>
//           <button>Search</button>
//           <button>Account</button>
//         </div>
     
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar;

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 z-30 mb-4">
      <h1 className="text-4xl font-bold text-white">Trippy.</h1>
      <ul className="hidden md:flex">
        {navItems.map(item => (
          <li
            key={item.id}
            className="p-4 text-white hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden text-white">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={`fixed md:hidden top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600 ease-in-out duration-500 ${
          nav ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Trippy.</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className="p-4 text-white border-b border-gray-600 hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
