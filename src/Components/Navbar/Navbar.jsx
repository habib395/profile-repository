import React, { useState } from "react";
import logo from "../../assets/logo3.jpg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Skills" },
    { id: "portfolio", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0f0f0f]/70 border-b border-white/10 px-4 sm:px-8 py-4 flex justify-between items-center shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <AnchorLink offset={50} href="#home">
  <img
    src={logo}
    alt="Logo"
    className="h-10 w-auto cursor-pointer transition-transform duration-500 hover:rotate-180"
  />
</AnchorLink>


      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-10 text-white text-base font-semibold tracking-wide">
        {navItems.slice(0, 4).map(({ id, label }) => (
          <li key={id}>
            <AnchorLink
              offset={50}
              href={`#${id}`}
              className="hover:text-[#B923E1] transition duration-300 relative group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#B923E1] to-[#ff004f] group-hover:w-full transition-all duration-300" />
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div className="hidden lg:flex">
        <AnchorLink
          href="#contact"
          offset={50}
          className="px-5 py-2 bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-white rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Contact Me
        </AnchorLink>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden z-50 text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-[#0f0f0f]/90 backdrop-blur-md border-t border-white/10 flex flex-col items-center gap-8 py-8 text-white z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map(({ id, label }) => (
              <AnchorLink
                key={id}
                offset={50}
                href={`#${id}`}
                className="text-lg font-semibold hover:text-[#B923E1] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </AnchorLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
