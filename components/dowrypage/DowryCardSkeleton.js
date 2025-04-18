import React from 'react';

export default function DowryCardSkeleton() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 py-10">
      <div className="w-full max-w-2xl bg-gradient-to-tr from-yellow-100 to-yellow-300 p-6 rounded-2xl shadow-md">
        <div className="bg-white/90 rounded-2xl p-6 shadow-lg animate-pulse">
          {/* Header Skeleton */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full border-4 border-pink-400 shadow-md" />
            <div className="h-6 bg-gray-300 rounded-md w-1/2" />
          </div>

          {/* Main Content Skeleton */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Description */}
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-blue-300 w-1/3 rounded-md" />
              <div className="h-4 bg-gray-300 w-full rounded-md" />
              <div className="h-4 bg-gray-300 w-5/6 rounded-md" />
              <div className="h-4 bg-gray-300 w-2/3 rounded-md" />
            </div>

            {/* Dowry List */}
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-green-300 w-1/3 rounded-md" />
              <div className="h-4 bg-gray-300 w-5/6 rounded-md" />
              <div className="h-4 bg-gray-300 w-4/6 rounded-md" />
              <div className="h-4 bg-gray-300 w-3/4 rounded-md" />
            </div>
          </div>

          {/* Footer Line */}
          <div className="h-4 bg-red-300 mt-6 w-2/3 mx-auto rounded-md" />
        </div>
      </div>

      {/* Button Placeholder */}
      <div className="mt-6">
        <div className="h-10 w-40 bg-green-300 rounded-lg shadow-lg animate-pulse flex items-center justify-center font-bold" >Loading</div>
      </div>
    </div>
  );
}
