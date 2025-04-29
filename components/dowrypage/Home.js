import React from 'react';
import { RiRobot3Fill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import Image from 'next/image';
import headingicon from '@/public/headingicon.svg';
import people from '@/public/people.svg';
import ImageSection from './subpart/ImageSection';
import HeaderComponent from './subpart/HeaderComponent';
function Home({ closeModal }) {

  return (
    <main className="flex w-screen  md:items-center justify-center md:min-h-[90vh] px-4 bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="text-center max-w-2xl md:max-w-none md:w-[90%]
         h-full   w-full space-y-6">
        {/* Header */}
        <HeaderComponent />
        {/* Image gallery  */}
        <ImageSection closeModal={closeModal}/>




      </div>
    </main>
  );
}

export default Home;
