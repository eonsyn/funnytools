'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // for client-side routing
import { addTrials, useTrialState } from '@/lib/redux/slices/trialSlice';
import { toast, ToastContainer } from 'react-toastify';
export default function DowryButton() {
  const dispatch = useDispatch();
  const trial = useSelector(useTrialState);
  const router = useRouter();
  const [clicks, setClicks] = useState(0);

  // 🔁 Redirect to /get-balance if trial is 0
  useEffect(() => {
    if (trial < 0 || trial===0) {
      router.push('/get-balance');
    }
  }, [trial, router]);

  const handleRegainClick = () => {
    const nextClick = clicks + 1;
    setClicks(nextClick);
toast.warn(`only ${4 - clicks} more clicks to unlock trials`)
    window.open(
      'https://compassionunsuccessful.com/g0hw4rr1?key=cdd8bdca93ac509c313b4aceb35f084e',
      '_blank'
    );

    if (nextClick >= 5) {
      dispatch(addTrials(5));
      setClicks(0);
      toast.success('✅ 5 trials added to your balance!');
    }
  };
  let colorClass = 'text-green-600 shadow-inner bg-green-50';
  let borderClass = 'border-green-300';

  if (trial <= 0) {
    colorClass = 'text-red-700 shadow-inner bg-red-50';
    borderClass = 'border-red-300';
  } else if (trial === 1 || trial === 2) {
    colorClass = 'text-red-500 shadow-inner bg-red-100';
    borderClass = 'border-red-200';
  }
// "flex items-center gap-4 p-2 rounded-lg bg-white shadow"
  return (
    <div className={`
      px-4 py-2 rounded-xl flex items-center gap-4
      font-semibold text-sm md:text-base 
      border ${borderClass} 
      ${colorClass}
      transition-all duration-300 ease-in-out
    `}>
      <div className="text-xl font-semibold text-gray-800">
        Balance: <span className="text-pink-600">{trial}</span>
      </div>

      <button
        className="bg-pink-500 cursor-pointer hover:bg-pink-600 text-white font-semibold p-1 rounded-xl transition-all"
        onClick={handleRegainClick}
        title={`${5 - clicks} more clicks to unlock trials`}
      >
        {clicks < 5 ? `+5 Get Trials` : 'Unlocking...'}
      </button>
    </div>
  );
}
