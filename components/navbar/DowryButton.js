'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { decrementTrial, addTrials, useTrialState } from '@/lib/redux/slices/trialSlice';

export default function DowryButton() {
  const dispatch = useDispatch();
  const trial = useSelector(useTrialState);
  const [clicks, setClicks] = useState(0);

  const handleRegainClick = () => {
    const nextClick = clicks + 1;
    setClicks(nextClick);

    // Open ad in a new tab
    window.open(
      'https://compassionunsuccessful.com/g0hw4rr1?key=cdd8bdca93ac509c313b4aceb35f084e',
      '_blank'
    );

    if (nextClick < 5) {
      console.log(`${5 - nextClick} clicks remaining to unlock 5 trials.`);
    } else {
      dispatch(addTrials(5));
      setClicks(0);
      alert('✅ 5 trials added to your balance!');
    }
  };

  return (
    <div className="flex  items-center gap-4">
      <div className="text-xl font-semibold text-gray-800">
        Balance: <span className="text-pink-600">{trial}</span>
      </div>

      {0 === 0 && (
       <button
       className="bg-pink-500 cursor-pointer hover:bg-pink-600 text-white font-semibold p-1 rounded-xl transition-all"
       onClick={handleRegainClick}
       title={`${5 - clicks} more clicks to unlock trials`}
     >
       {clicks < 5 ? `+5 Get Trials` : 'Unlocking...'}
     </button>
     
      )}
    </div>
  );
}
