
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: "1", text: 'Home' },
    { id: "2", text: 'About' },
    { id: "3", text: 'Recommended' },
       { id: "5", text: 'Contact' },
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
           
        {/* <a key={item.id} href={`#${item.text.toLowerCase()}`}>{item.text}</a> */}

        <AnchorLink href={`#${item.text.toLowerCase()}`} onClick={()=>console.log("TRDST")}>{item.text}</AnchorLink>
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

<a key={item.id} href={`#${item.text.toLowerCase()}`}>{item.text}</a>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
// {navItems.map(item => (
//   <a key={item.id} href={`#${item.text.toLowerCase()}`}>{item.text}</a>
// ))}