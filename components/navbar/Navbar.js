'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import TrialInitializer from '@/components/TrialInitializer';
import DowryButton from './DowryButton';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/preview.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full z-40 h-14 sticky top-0 bg-pink-100 flex items-center justify-between px-4 md:px-6 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={Logo} height={36} alt="Logo" />
        
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-lg text-pink-600 hover:text-pink-800">
          Home
        </Link>
        <Link href="/about" className="text-lg text-pink-600 hover:text-pink-800">
          About
        </Link>
        <Link href="/privacy" className="text-lg text-pink-600 hover:text-pink-800">
          Privacy
        </Link>

        {/* Dowry Button on Desktop */}
        <TrialInitializer>
          <DowryButton />
        </TrialInitializer>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-pink-600" />
          ) : (
            <FaBars className="text-2xl text-pink-600" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-pink-100 shadow-md py-4 flex flex-col items-center gap-3 z-50 md:hidden">
          <Link href="/" className="text-lg text-pink-600 hover:text-pink-800">
            Home
          </Link>
          <Link href="/about" className="text-lg text-pink-600 hover:text-pink-800">
            About
          </Link>
          <Link href="/privacy" className="text-lg text-pink-600 hover:text-pink-800">
            Privacy
          </Link>

          {/* Dowry Button on Mobile */}
          <TrialInitializer>
            <DowryButton />
          </TrialInitializer>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
