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
     
     <div className="page min-h-screen bg-[url(https://as2.ftcdn.net/jpg/14/07/68/73/1000_F_1407687350_pI1bfIxXAePUKHtwQrVENFqtGuVvw6eN.jpg)] bg-no-repeat bg-cover  bg-blend-screen bg-pink-300 border-b-2     ">
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
