"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link'; // Use Link for internal routing
import Image from 'next/image';
import Logo from '@/public/preview.png'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full z-40 h-14 sticky top-0 flex items-center justify-between bg-pink-100 px-6'>
      {/* Logo or site title */}
      <div className='text-2xl font-bold text-pink-600'>
        <Image
        src={Logo}
        height={40}
        />
      </div>

      {/* Desktop Nav */}
      <div className='hidden md:flex space-x-6'>
        <Link href='/' className='text-lg text-pink-600 hover:text-pink-800'>
          Home
        </Link>
        <Link href='/about' className='text-lg text-pink-600 hover:text-pink-800'>
          About
        </Link>
        <Link href='/privacy' className='text-lg text-pink-600 hover:text-pink-800'>
          Privacy Policy
        </Link>
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
        } md:hidden absolute top-14 left-0 w-full bg-pink-100 text-center py-4 transition-all duration-300 ease-in-out`}
      >
        <Link href='/' className='block text-lg text-pink-600 py-2 hover:text-pink-800'>
          Home
        </Link>
        <Link href='/about' className='block text-lg text-pink-600 py-2 hover:text-pink-800'>
          About
        </Link>
        <Link href='/privacy' className='block text-lg text-pink-600 py-2 hover:text-pink-800'>
          Privacy Policy
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
