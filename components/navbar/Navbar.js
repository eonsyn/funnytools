'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import TrialInitializer from '@/components/TrialInitializer';
import DowryButton from './DowryButton';
import { IoMdAdd } from "react-icons/io";
import { useTrialState } from '@/lib/redux/slices/trialSlice';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname(); 
   const navpaths = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {name:"People Dowry",path:"/other-dowry"},
    { name: "Privacy", path: "/privacy" },
  ];

  const trial = useSelector(useTrialState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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
    <nav className="w-full z-40 h-12 sticky top-0 bg-pink-100/70 backdrop-blur-md flex items-center justify-between px-4 md:px-6  ">

      {/* Logo */}
      <div className="flex items-center min-w-[15%]   font-semibold text-2xl text-pink-600  gap-2">
<Link className="flex items-center" href={'/'}>        {/* <Image src={Logo} height={36} alt="Logo" /> */}
<Image src={Logo} height={30} width={30} alt="Logo"></Image>
        DowryAi
        </Link>
      </div>
      {/* center naviagtaion menu here  */}
      <div className='w-[50%]  h-full hidden md:flex items-center  justify-evenly '>
      {navpaths.map((nav, index) => (
        <div key={index}>
           <Link
           
          href={nav.path}
          className="relative text-lg text-pink-600 "
        >
          <span
            className={`relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-600 after:transition-all after:duration-300 ${
              pathname === nav.path
                ? "after:w-full" // If current route, show full underline
                : "after:w-0 hover:after:w-full" // Else animate underline on hover
            }`}
          >
            {nav.name}
          </span>
        </Link>
        </div>
       
      ))}
      </div>
      {/* Desktop Menu */}
      

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
