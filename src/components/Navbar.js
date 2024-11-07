"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Menu Button */}
      <button onClick={toggleMenu} className="menu-button">
        <div className="hamburger-icon">
          {/* The hamburger icon with 3 lines */}
          <span
            style={{
              transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)',
              transition: 'all 0.3s ease',
              backgroundColor: isOpen ? 'white' : 'black',
            }}
            className="line line1"
          ></span>
          <span
            style={{
              opacity: isOpen ? 0 : 1,
              transition: 'opacity 0.3s ease',
              backgroundColor: isOpen ? 'white' : 'black',
            }}
            className="line line2"
          ></span>
          <span
            style={{
              transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)',
              transition: 'all 0.3s ease',
              backgroundColor: isOpen ? 'white' : 'black',
            }}
            className="line line3"
          ></span>
        </div>
      </button>

      {/* Side Menu */}
      <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
        className="side-menu"
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        <ul>
          {[{ label: 'About', href: '#about' }, { label: 'Work', href: '#work' }, { label: 'Projects', href: '#projects' }, { label: 'Contact', href: '#contact' }].map((item, index) => (
            <MenuItem key={index} label={item.label} href={item.href} delay={index * 0.1} onClick={toggleMenu} />
          ))}
        </ul>
      </motion.nav>

      {/* Optional: add a background overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}
