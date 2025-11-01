'use client';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import TrialInitializer from '@/components/TrialInitializer';
import DowryButton from './DowryButton';
import { useSelector } from 'react-redux';
import { useTrialState } from '@/lib/redux/slices/trialSlice';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname(); 
  const navpaths = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "People Dowry", path: "/other-dowry" },
    { name: "Privacy", path: "/privacy" },
  ];

  const trial = useSelector(useTrialState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  let colorClass = 'text-green-600 shadow-inner bg-green-50';
  let borderClass = 'border-green-300';
  if (trial <= 0) {
    colorClass = 'text-red-700 shadow-inner bg-red-50';
    borderClass = 'border-red-300';
  } else if (trial === 1 || trial === 2) {
    colorClass = 'text-red-500 shadow-inner bg-red-100';
    borderClass = 'border-red-200';
  }

  return (
    <nav
      className={`w-full z-40 h-12 fixed top-0 bg-pink-100/70 backdrop-blur-md flex items-center justify-between px-4 md:px-6 transition-transform duration-300 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center min-w-[15%] font-semibold text-2xl text-pink-600 gap-2">
        <Link className="flex items-center" href="/">
          <Image src={Logo} height={30} width={30} alt="Logo" />
          DowryAi
        </Link>
      </div>

      {/* Center navigation */}
      <div className="w-[50%] h-full hidden md:flex items-center justify-evenly">
        {navpaths.map((nav, index) => (
          <div key={index}>
            <Link
              href={nav.path}
              className="relative text-lg text-pink-600"
            >
              <span
                className={`relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-600 after:transition-all after:duration-300 ${
                  pathname === nav.path
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }`}
              >
                {nav.name}
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-1">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-pink-600" />
          ) : (
            <FaBars className="text-2xl text-pink-600" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-pink-100 shadow-md py-4 flex flex-col items-center gap-3 z-50 md:hidden">
          {navpaths.map((nav, i) => (
            <Link
              key={i}
              href={nav.path}
              className="text-lg text-pink-600 hover:text-pink-800"
            >
              {nav.name}
            </Link>
          ))}
          <TrialInitializer>
            <DowryButton />
          </TrialInitializer>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
