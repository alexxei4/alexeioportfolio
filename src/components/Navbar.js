import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          <span
            className={`line line1 ${isOpen ? 'line1-active' : ''}`}
          ></span>
          <span
            className={`line line2 ${isOpen ? 'line2-active' : ''}`}
          ></span>
          <span
            className={`line line3 ${isOpen ? 'line3-active' : ''}`}
          ></span>
        </div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="dropdown-menu"
            style={{
              color: 'white',
              position: 'absolute',
              top: '95px',
              left: '20px',
              width: '100%',
            }}
          >
            <ul className="text-outline">
              {[{ label: 'About', href: '#about' }, { label: 'Work', href: '#work' }, { label: 'Projects', href: '#projects' }, { label: 'Skills', href: '#skills' }, { label: 'Contact', href: '#contact' }].map((item, index) => (
                <MenuItem
                  key={index}
                  label={item.label}
                  href={item.href}
                  delay={index * 0.1}
                  onClick={toggleMenu} // Close menu on click
                />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Optional: add a background overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}
