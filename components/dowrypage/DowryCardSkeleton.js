'use client';

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function DowryCardSkeleton() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-4 py-8">
      <div className="max-w-md w-full p-6 rounded-xl bg-white shadow-lg border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <Skeleton circle width={64} height={64} />
          <div className="flex flex-col gap-2">
            <Skeleton width={120} height={20} />
            <Skeleton width={80} height={16} />
          </div>
        </div>

        <Skeleton height={1} width="100%" className="my-3" />

        <div className="mb-4">
          <Skeleton width={100} height={20} />
          <Skeleton width={150} height={20} />
        </div>

        <div className="mb-4">
          <Skeleton width={120} height={20} />
          <Skeleton count={3} height={14} />
        </div>

        <div className="mb-4">
          <Skeleton width={140} height={20} />
          <Skeleton count={2} height={14} />
        </div>

        <div className="flex justify-between items-center mt-6">
          <Skeleton width={140} height={36} borderRadius={10} />
          <Skeleton width={48} height={48} borderRadius={10} />
        </div>

        <Skeleton width={180} height={14} className="mt-4" />
      </div>

      <div className="mt-6">
        <Skeleton width={200} height={48} borderRadius={14} />
      </div>
    </div>
  );
}
