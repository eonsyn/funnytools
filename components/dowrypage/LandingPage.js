"use client"
import React from 'react'
import QuestionForm from './QuestionForm'
import { useState } from 'react'
import Home from './Home'
import FaqCard from './FaqCard'  
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
         
           <FaqCard/>
         </div>
    </div>
  )
}

export default LandingPage
