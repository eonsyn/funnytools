import React from 'react';
import Image from 'next/image';
import DowryImage from '@/public/blog_assets/DowryImage.png';

function UnderstandDowryPractice() {
  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-pink-100 text-gray-800 px-4 py-6 sm:px-8 lg:px-32">
      <div className="max-w-5xl mx-auto">
        {/* Main SEO heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-pink-700 mb-6" title="Dowry Calculator AI">
  What is Dowry? — Explained with Dowry Calculator AI
</h1>


        {/* Intro Image */}
        <div className="bg-pink-100 p-4 md:p-6 rounded-3xl shadow-md mb-8">
          <div className="relative overflow-hidden rounded-2xl flex items-center justify-center max-h-[55vh] w-full">
            <Image
              src={DowryImage}
              alt="Dowry Calculator Meme Illustration"
              className="object-contain rounded-2xl"
            />
          </div>
          <p className="text-sm italic text-center text-gray-600 mt-4">
            A visual satire inspired by the dowry system in India — illustrated through the Dowry Calculator AI.
          </p>
        </div>

        {/* h1 for SEO emphasis */}
        <h1 className="text-3xl font-semibold text-pink-600 mb-4">
          What is Dowry and Why We Built the Dahej Calculator?
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The <strong>dowry system</strong>, also known as <strong>dahej pratha</strong>, has long plagued Indian society. The <strong>Dowry Calculator AI</strong> was built to challenge this with humor, satire, and awareness. Whether you're looking to <strong>calculate fake dowry</strong> or laugh at a <strong>funny quiz India</strong> style marriage parody, our tool serves as both an <strong>anti-dowry tool</strong> and a viral <strong>dowry meme generator</strong>.
        </p>

        {/* Historical context */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-2">Historical Context of Dowry</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Originally, dowry was meant to provide financial security to women post-marriage. Over time, it transformed into a toxic expectation tied to weddings. This unfortunate cultural shift led to the birth of the <strong>dahej calculator</strong> as a digital satire. Through the <strong>Dowry Calculator</strong>, we parody the practice while promoting <strong>dowry awareness</strong> through comedy.
          </p>
        </section>

        {/* Legal status */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-2">Legal Status of Dowry in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The <strong>Dowry Prohibition Act of 1961</strong> criminalized the practice in India. Despite being illegal, <strong>dowry</strong> remains prevalent in many regions. That’s why we built the <strong>Dowry Calculator AI</strong> — not to trivialize, but to bring attention to this serious issue with humor and a fresh digital twist.
          </p>
        </section>

        {/* Modern views */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-2">Modern Voices Against Dowry</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Modern Indian youth and families are rising up against <strong>dahej pratha</strong>. Our <strong>dowry calculator</strong> aims to support this shift by using entertainment as education. This isn't just a <strong>funny dowry quiz</strong> — it’s a movement. Join the growing <strong>no dowry campaign</strong> and use this <strong>marriage parody</strong> as a voice for change.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">Disclaimer for Dowry Calculator AI</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-bold text-red-600">Disclaimer:</span> The <strong>Dowry Calculator</strong> is a satirical tool. It is not a real calculator for estimating dowry — it is a <strong>dowry meme generator</strong> built for fun and awareness. Our goal is to shine a spotlight on the absurdity of the <strong>dowry system in India</strong>, not to promote it.
          </p>
        </section>

        {/* Closing Quote */}
        <div className="text-center">
          <p className="italic text-gray-500 text-base">
            “Say no to dowry. Say yes to dignity. Join the <strong>anti-dowry tool</strong> revolution with <strong>Dowry Calculator AI</strong>.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnderstandDowryPractice;
