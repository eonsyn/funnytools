"use client"
import React from 'react'
import QuestionForm from './QuestionForm'
import { useState } from 'react'
import Home from './Home';
import Link from 'next/link';
import FaqCard from './FaqCard'
import AdVerticalBanner from '../ads/AdVerticalBanner'
import NativeBanner from '../ads/NativeBanner'
import PriceSection from './PriceSection'
import AdCard from '../ads/AdCard'
import HowItWork from './HowItWork'
import UnderstandDowryPractice from './UnderstandDowryPractice'
function LandingPage() {
  const [showQeustion, setshowQeustion] = useState(false)

  const [close, setClose] = useState(true)
  function closeModal() {
    setshowQeustion(true)

  }
  return (
    <div className='font-secondary  bg-gradient-to-b from-pink-100 via-pink-50 to-white '>
      {!close && (
        <div className="px-4">
          <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100 border border-amber-300 rounded-xl shadow-sm py-2 px-3 text-xs sm:text-sm font-medium text-amber-800">
            <span>
              Wish you <span className="text-pink-600 font-semibold">Happy Diwali</span> from your Dowry AI !
            </span>

            <Link
              href="https://wishbuddy.netlify.app/diwali/68f47160483fccfe24f38899"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-700 transition-all duration-200 shadow-sm animate-bounce text-xs sm:text-sm"
              onClick={() => setClose(true)}
            >
              Open Your Wish
            </Link>

            {/* Close button */}
            <button
              onClick={() => setClose(true)}
              className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold text-2xl cursor-pointer hover:bg-red-600 transition-colors duration-150"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

      )}
      <div className=''>

        <Home closeModal={closeModal} />


        <QuestionForm ></QuestionForm>

      </div>
    </div>
  )
}

export default LandingPage
