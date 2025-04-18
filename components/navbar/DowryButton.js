'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // for client-side routing
import { addTrials, useTrialState } from '@/lib/redux/slices/trialSlice';

export default function DowryButton() {
  const dispatch = useDispatch();
  const trial = useSelector(useTrialState);
  const router = useRouter();
  const [clicks, setClicks] = useState(0);

  // 🔁 Redirect to /get-balance if trial is 0
  useEffect(() => {
    if (trial <= 0) {
      router.push('/get-balance');
    }
  }, [trial, router]);

  const handleRegainClick = () => {
    const nextClick = clicks + 1;
    setClicks(nextClick);

    window.open(
      'https://compassionunsuccessful.com/g0hw4rr1?key=cdd8bdca93ac509c313b4aceb35f084e',
      '_blank'
    );

    if (nextClick >= 5) {
      dispatch(addTrials(5));
      setClicks(0);
      alert('✅ 5 trials added to your balance!');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="text-xl font-semibold text-gray-800">
        Balance: <span className="text-pink-600">{trial}</span>
      </div>

      <button
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold p-1 rounded-xl transition-all"
        onClick={handleRegainClick}
        title={`${5 - clicks} more clicks to unlock trials`}
      >
        {clicks < 5 ? `+5 Get Trials` : 'Unlocking...'}
      </button>
    </div>
  );
}
