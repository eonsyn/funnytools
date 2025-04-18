import React from 'react'
import FaqCard from './FaqCard';
import { RiRobot3Fill } from "react-icons/ri"; import { WiStars } from "react-icons/wi";
function Home({closeModal}) {
    return (
        <main className="flex-col items-center justify-center min-h-[90vh]    px-4">
            <div className="text-center space-y-6 ">
                <h1 className="text-xl md:text-7xl font-secondary font-bold text-black leading-tight">
                    <span className="block">AI POWERED</span>
                    {/* <span className="inline-block bg-pink-800 text-white px-3 py-1 rounded-md mt-2">
                       
                    </span>  */}
                    <span className="text-black"> DOWERY CALCULATOR</span>
                </h1>
                <div className='flex items-center justify-center '>
                    <div className=" flex  w-fit items-center gap-2 bg-cream rounded-full px-4 py-2 text-sm shadow-md bg-amber-50">
                        <RiRobot3Fill />
                        <span className="text-black font-primary
          ">We are Back</span><WiStars />
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <button onClick={closeModal} className="bg-pink-500 block hover:bg-pink-600 text-white cursor-pointer text-lg px-6 py-3 border-none rounded-lg shadow-lg transition-all font-primary">
                        Calculate Now
                    </button>
                </div>

            </div>
 
        </main>

    )
}

export default Home
