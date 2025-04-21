import React from 'react';
import Link from 'next/link';
 
function PriceSection() {
  return (
    <div className='  w-full md:flex md:items-center md:justify-center md:w-1/2'> 
    
    <div className="max-w-4xl md:flex md:items-center md:gap-3 mx-auto p-6 space-y-8">
    {/* Credit Card */}
    <div className="max-w-md mx-auto p-6 bg-white/60 rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Earn Credits & Unlock More Features</h2>
      <p className="text-gray-600 text-lg">
        As a new user, you are awarded <span className="font-semibold text-green-600">3 free credits</span> to explore our tools. You can earn more credits by engaging with ads on the platform, allowing you to unlock additional features and continue using our services.
      </p>

      <div className="flex justify-between items-center mt-6">
          <Link href={"/get-balance"}><button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none">
          Get More Credits
        </button>
          </Link>
        
      </div>
    </div>

    
  </div></div>
   
  );
}

export default PriceSection;
