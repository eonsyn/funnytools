"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close button

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu

  // Toggle the menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full z-40 h-14 sticky top-0  flex items-center justify-between bg-pink-100 px-6'>
      {/* Logo or site title */}
      <div className='text-2xl font-bold text-pink-600'>
        Dowry Calculator
      </div>

      {/* Desktop Nav */}
      <div className='hidden md:flex space-x-6'>
        <a href='/' className='text-lg text-pink-600 hover:text-pink-800'>
          Home
        </a>
        <a href='/about' className='text-lg text-pink-600 hover:text-pink-800'>
          About
        </a>
        <a href='/privacy' className='text-lg text-pink-600 hover:text-pink-800'>
          Privacy Policy
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className='text-2xl text-pink-600' />
          ) : (
            <FaBars className='text-2xl text-pink-600' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-14 left-0 w-full bg-pink-100 text-center py-4`}
      >
        <a href='/' className='block text-lg text-pink-600 py-2 hover:text-pink-800'>
          Home
        </a>
        <a href='/about' className='block text-lg text-pink-600 py-2 hover:text-pink-800'>
          About
        </a>
        <a href='/privacy' className='block text-lg text-pink-600 py-2 hover:text-pink-800'>
          Privacy Policy
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
