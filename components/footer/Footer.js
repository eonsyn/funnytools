'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn  } from 'react-icons/fa';
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 pt-14 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-bold text-pink-400">Dowry Calculator Ai</h2>
          <p className="text-sm text-gray-400 mt-1 italic">
            Where satire meets social awareness.
          </p>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            The Dahej Calculator is a satirical tool created to raise awareness about the problematic nature of dowry practices. Our mission is to educate and promote equality in marriage and relationships.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-pink-300 mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-pink-400 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-400 transition-colors duration-200">About</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-pink-400 transition-colors duration-200">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-pink-300 mb-4">Connect with us</h3>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://aryan0singh.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <CiGlobe />
            </a>
            
            <a
              href="https://www.linkedin.com/in/aryansingh0 "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform duration-200 hover:scale-110"
              aria-label="Linkedin"
            >
              <FaLinkedinIn  />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-14 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dowry Calculator AI. All rights reserved.
        </p>
        <p className="mt-2 text-red-500 font-semibold text-sm">
          Do not accept or give dowry.
        </p>
        <p className="mt-1 text-xs text-gray-500 italic max-w-2xl mx-auto leading-relaxed">
          This website does not promote or endorse dowry practices. Dowry is illegal in India and many other countries. This calculator is for educational and satirical purposes only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
