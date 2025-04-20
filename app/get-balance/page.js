'use client';

import React, { useState } from 'react';
import { addTrials, useTrialState } from '@/lib/redux/slices/trialSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
const GetBalancePage = () => {
    const dispatch = useDispatch();
  const [clicks, setClicks] = useState(0);
  const maxClicks = 5;

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    toast.warn(`only ${4 - clicks} more clicks to unlock trials`)
    // Open ad in new tab
    window.open('https://compassionunsuccessful.com/g0hw4rr1?key=cdd8bdca93ac509c313b4aceb35f084e', '_blank');

    if (next >= maxClicks) {
        setClicks(0);
         dispatch(addTrials(5));
      toast.success(' You earned 5 extra trials! Go back and enjoy.');
    }
  };

 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-pink-50">
      <h1  className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          Get Free 5 Credit!
      </h1>
      <p className="text-lg text-gray-700 max-w-md mb-6">
        Click the button below 5 times to earn <span className="font-semibold text-pink-600">5 free trial credits</span>.
        Each click opens a short ad. After 5 clicks, your credits will be added!
      </p>

      <button
        onClick={handleClick}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
        disabled={clicks >= maxClicks}
      >
        {clicks < maxClicks
          ? `Click Me (${maxClicks - clicks} left)`
          : '✅ Done!'}
      </button>

      {clicks > 0 && clicks < maxClicks && (
        <p className="mt-3 text-sm text-gray-600">
          {maxClicks - clicks} more click{maxClicks - clicks > 1 ? 's' : ''} to go!
        </p>
      )}
    </div>
  );
};

export default GetBalancePage;
