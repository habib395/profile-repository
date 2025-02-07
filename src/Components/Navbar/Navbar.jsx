import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo3.jpg.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-container'>
      <img className="h-12 w-auto transform hover:scale-110 transition-transform duration-300 cursor-pointer" src={logo} alt="Logo" />

      <div className="lg:hidden flex items-center" onClick={toggleMenu}>
        <span className="text-3xl text-white">☰</span>
      </div>

      <ul className={`flex items-center list-none sm:gap-14 text-xl font-medium ${isMenuOpen ? 'isMenuOpen' : 'lg:flex lg:flex-row lg:static lg:bg-transparent hidden'}`}>
        <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
          <AnchorLink className="anchor-link" offset={50} href='#home'><p>Home</p></AnchorLink>
        </li>
        <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
          <AnchorLink className="anchor-link" offset={50} href='#about'><p>About Me</p></AnchorLink>
        </li>
        <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
          <AnchorLink className="anchor-link" offset={50} href='#services'><p>Skills</p></AnchorLink>
        </li>
        <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
          <AnchorLink className="anchor-link" offset={50} href='#portfolio'><p>Projects</p></AnchorLink>
        </li>
        <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
          <AnchorLink className="anchor-link" offset={50} href='#contact'><p>Contact</p></AnchorLink>
        </li>
      </ul>

      <div className="connect-button px-6 py-3 flex items-center text-xl font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-white shadow-lg hover:shadow-xl">
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
