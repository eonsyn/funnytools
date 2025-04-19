"use client"
import React from 'react'
import QuestionForm from './QuestionForm'
import { useState } from 'react'
import Home from './Home'
import FaqCard from './FaqCard'  
import DowryResultCard from './DowryResultCard'
import NativeBanner from '../ads/NativeBanner'
function LandingPage() {
    const [showQeustion, setshowQeustion] = useState(false)
    function closeModal() {
      setshowQeustion(true)
  
    }
  return (
    <div>
      <div className='bg-pink-100'>
     
     <div className="page    ">
       {
             showQeustion ? <QuestionForm></QuestionForm> :
               <Home closeModal={closeModal} />
           }
     </div>
         {/* <NativeBanner/> */}
         <DowryResultCard
  name="Aryan Singh"
  profession="website designer"
  dowry="102505"
  condition="No more poetry. Must learn how to make chai in under 2 mins."
  randomPersonCondition="No more poetry. Must learn how to make chai in under 2 mins."
/>

           <FaqCard/> 
         </div>
    </div>
  )
}

export default LandingPage
