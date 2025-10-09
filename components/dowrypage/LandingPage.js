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
import HowItWork from './HowItWork'
import UnderstandDowryPractice from './UnderstandDowryPractice'
function LandingPage() {
  const [showQeustion, setshowQeustion] = useState(false)
  function closeModal() {
    setshowQeustion(true)

  }
  return (
    <div className='font-secondary'>
      <div className='bg-pink-100'>

        <div className={`page ${showQeustion ? 'pb-20 ' : ''} bg-gradient-to-b from-pink-100 via-pink-50 to-white`}  >
          {
            showQeustion ? <QuestionForm></QuestionForm> :
              <Home closeModal={closeModal} />
          }
        </div>
 
         
      </div>
    </div>
  )
}

export default LandingPage
