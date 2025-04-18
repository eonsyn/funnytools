'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Dowry Calculator AI</h2>
          <p className="text-sm text-gray-400">Where satire meets social awareness.</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/privacy" className="hover:text-yellow-400 transition">
            Privacy Policy
          </Link>
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/?text=Try%20this%20crazy%20dowry%20calculator!%20https://dowrycalc3000.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Dowry Calculator 3000. All rights reserved.
        </p>
        <p className="text-red-500 mt-1 font-semibold">Do not accept or give dowry.</p>
      </div>
    </footer>
  );
};

export default Footer;
