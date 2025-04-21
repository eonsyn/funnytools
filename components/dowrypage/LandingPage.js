"use client"
import React from 'react'
import QuestionForm from './QuestionForm'
import { useState } from 'react'
import Home from './Home'
import FaqCard from './FaqCard'
import AdVerticalBanner from '../ads/AdVerticalBanner'
import NativeBanner from '../ads/NativeBanner'
import PriceSection from './PriceSection'
import AdCard from '../ads/AdCard'
import UnderstandDowryPractice from './UnderstandDowryPractice'
function LandingPage() {
  const [showQeustion, setshowQeustion] = useState(false)
  function closeModal() {
    setshowQeustion(true)

  }
  return (
    <div className='font-secondary'>
      <div className='bg-pink-100'>

        <div className="page    ">
          {
            showQeustion ? <QuestionForm></QuestionForm> :
              <Home closeModal={closeModal} />
          }
        </div>


        <UnderstandDowryPractice /> 
        <div className=' md:flex ' >
          <NativeBanner />
          <PriceSection />
        </div>
        {/* <AdVerticalBanner/> */}
        <FaqCard />
      </div>
    </div>
  )
}

export default LandingPage
