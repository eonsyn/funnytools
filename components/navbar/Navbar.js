'use client';
import React, { useState, useEffect } from 'react';
import { FaHome, FaUserFriends, FaBars } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';

function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 20);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'People Dowry', path: '/other-dowry', icon: <FaUserFriends /> },
  ];

  return (
    <nav
      className={`fixed top-1 left-1/2 -translate-x-1/2 z-50 
        transition-transform duration-300 ease-in-out 
        ${showNavbar ? 'translate-y-0' : '-translate-y-20'}
      `}
    >
      {/* Notch-style container */}
      <div className="backdrop-blur-md bg-pink-100/80 shadow-lg rounded-3xl 
          flex items-center justify-between gap-6 px-6 py-2 
          border border-pink-200 w-fit mx-auto">
        
        {/* Logo (desktop only) */}
        <Link href="/">
          
        <div className="flex items-center gap-2 ">
          <Image src={Logo} className='hidden md:block' alt="Logo" width={28} height={28} />
          <span className="font-semibold text-pink-600">DowryAi</span>
        </div>

        </Link>
        {/* Center Icons */}
        <div className="flex items-center justify-center gap-6 text-pink-600 text-2xl">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`transition-all hover:text-pink-800 ${
                pathname === item.path ? 'text-pink-700 scale-110' : ''
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 
            bg-pink-100/95 rounded-2xl shadow-md py-3 px-4 flex gap-6 z-40 md:hidden">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-pink-600 text-2xl hover:text-pink-800"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
