"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdCard() {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border p-6 sm:flex sm:items-center hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="sm:w-1/3 mb-4 sm:mb-0">
        <Image
          src="/logo.png" // replace with your logo or promo image path
          alt="Dowry Calculator AI"
          width={120}
          height={120}
          className="rounded-xl"
        />
      </div>

      <div className="sm:ml-6 sm:w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Dowry Calculator AI</h2>
        <p className="text-sm text-gray-600 mb-4">
          Take the funniest quiz of your life! Get a fake dowry amount and spread awareness
          against dowry with humor. 💍😂
        </p>

        <Link href="https://dowryai.netlify.app">
          <span
            className="inline-block px-5 py-2 rounded-lg bg-pink-600 text-white text-sm font-medium hover:bg-pink-700 transition"
            target="_blank"
          >
            Try Now → 
          </span>
        </Link>
      </div>
    </div>
  );
}
