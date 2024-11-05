// src/components/navbar.js
import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">My Portfolio</div>
        <div>
          <a href="/" className="mr-4">Home</a>
          <a href="/projects" className="mr-4">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

console.log(Navbar);


export default Navbar;
