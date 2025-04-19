import React from 'react';
import { RiRobot3Fill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";

function Home({ closeModal }) {
  return (
    <main className="flex items-center justify-center min-h-[90vh] px-4 bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="text-center max-w-2xl w-full space-y-8">
        <h1 className="text-3xl md:text-6xl font-bold font-secondary text-black leading-snug">
          <span className="block uppercase tracking-wider">AI Powered</span>
          <span className="text-pink-600">Dowry Calculator</span>
        </h1>

        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 bg-amber-100 text-black px-4 py-2 rounded-full shadow-sm text-sm font-primary">
            <RiRobot3Fill className="text-lg" />
            <span>Your AI dowry expert has entered the chat</span>
            <WiStars className="text-lg" />
          </div>
        </div>

        <div className="flex justify-center">
        <button
  onClick={closeModal}
  className="relative cursor-pointer inline-flex items-center justify-center overflow-hidden font-semibold tracking-wide text-white transition duration-300 ease-out rounded-2xl shadow-lg group px-8 py-3 text-base md:text-lg bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
>
  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 translate-y-0 bg-white opacity-10 group-hover:translate-x-full group-hover:opacity-0 rounded-2xl"></span>
  <span className="relative z-10 font-primary">  Calculate Now</span>
</button>

        </div>
      </div>
    </main>
  );
}

export default Home;
