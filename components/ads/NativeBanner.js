'use client';
import { useEffect } from 'react';

export default function NativeBanner() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//compassionunsuccessful.com/077c1c7a577775e4f7a356ff8b0bd378/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full md:flex md:items-center md:justify-center p-6  md:w-1/2">
      <div className="max-w-4xl mx-auto p-6 bg-white/60 rounded-xl shadow-lg space-y-6 border border-gray-200 backdrop-blur-md">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Sponsored <span className="text-pink-600 underline">Advertisement</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            You’re helping keep <span className="font-medium text-pink-600">Dowry Calculator Ai</span> free and running by viewing ethical, relevant ads. We appreciate your support!
          </p>
        </div>

        <div
          id="container-077c1c7a577775e4f7a356ff8b0bd378"
          className="w-full h-[250px] bg-white rounded-md shadow-inner flex items-center justify-center"
        >
          {/* Ad will be injected here */}
        </div>

        <p className="text-xs text-center text-gray-400">
          Disclaimer: We do not endorse any advertised products. Ads are provided by third-party networks.
        </p>
      </div>
    </div>
  );
}
