"use client";
import React from "react";
import Image from "next/image";
import DowryImage from "@/public/blog_assets/DowryImage.png";

function UnderstandDowryPractice() {
  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-pink-100 text-gray-800 px-4  py-10 sm:px-8 lg:px-32">
      <div className="max-w-5xl mx-auto">
        
        {/* Main SEO heading */}
        <h1
          className="text-2xl sm:text-5xl font-bold text-center text-pink-700 mb-6 leading-snug"
          title="DowryAI - The Dowry AI Calculator & Dahej Awareness Platform"
        >
          Understanding Dowry in India — With <span className="text-red-600">DowryAI</span>, The Dahej Awareness Platform
        </h1>

        {/* Intro Image */}
        <div className="bg-pink-100 p-4 md:p-6 rounded-3xl shadow-md mb-10">
          <div className="relative overflow-hidden rounded-2xl flex items-center justify-center max-h-[55vh] w-full">
            <Image
              src={DowryImage}
              alt="DowryAI Dowry Calculator AI Illustration"
              className="object-contain rounded-2xl"
              priority
            />
          </div>
          <p className="text-sm italic text-center text-gray-600 mt-4">
            <strong>DowryAI</strong> — the AI-powered platform raising awareness against <strong>dahej</strong> through humor.
          </p>
        </div>

        {/* What is Dowry */}
        <section className="mb-10">
           
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The <strong>dowry system</strong> (or <strong>dahej pratha</strong>) has long been a symbol of
            financial and gender imbalance in Indian society. <strong>DowryAI</strong> (or <strong>Dowry AI</strong>)
            reimagines this concept through a <strong>satirical AI calculator</strong> that uses humor to highlight
            the absurdity of placing monetary value on a person’s worth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you’re exploring a <strong>funny dahej calculator</strong>, <strong>dowry meme generator</strong>,
            or <strong>AI-based dowry quiz</strong>, our goal is to make people laugh — then think.
          </p>
        </section>

        {/* Historical Context */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">A Brief History of Dowry in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            Initially, dowry was meant to support women in marriage. Over centuries, it morphed into a toxic social
            expectation, pushing families into debt and despair. <strong>DowryAI</strong> turns this grim reality
            into digital satire — using laughter to expose inequality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With each joke and generated “dowry value,” users are reminded that <strong>marriage is not a transaction</strong>.
          </p>
        </section>

        {/* Legal Status */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">Legal Status of Dowry in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            The <strong>Dowry Prohibition Act (1961)</strong> made both giving and taking dowry a criminal offense.
            Yet, in many regions, <strong>dahej practices</strong> still persist. <strong>DowryAI</strong> uses humor
            and awareness to amplify the fact that dowry is not only unethical but illegal.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By using the <strong>Dowry Calculator AI</strong>, you engage with a <strong>social awareness tool</strong>
            that challenges cultural norms while promoting <strong>legal education</strong>.
          </p>
        </section>

        {/* Modern Voices */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">Modern Voices Against Dowry</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            Today’s generation is using technology to fight back against outdated traditions. <strong>DowryAI</strong>
            joins this movement by empowering people with <strong>AI-generated dahej awareness content</strong> that sparks conversation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every <strong>Dowry AI meme</strong>, quiz, or post acts as a <strong>digital protest</strong> — using humor to
            question why such customs still exist in modern India.
          </p>
        </section>

        {/* How DowryAI Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">How Does the Dowry AI Calculator Work?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            <strong>DowryAI</strong> uses lighthearted AI logic to create satirical dowry “estimates” based on random traits like
            salary, education, or habits. It’s pure fun — meant to exaggerate how absurd the dowry system really is.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our AI doesn’t judge — it jokes. But every joke carries a deeper message: <strong>respect over riches</strong>.
          </p>
        </section>

        {/* Educational Impact */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">Educational Value of DowryAI</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>DowryAI</strong> isn’t just entertainment — it’s an <strong>educational awareness tool</strong>.
            Teachers, NGOs, and youth groups can use it to discuss <strong>gender equality</strong>, <strong>women’s rights</strong>,
            and the importance of ending <strong>dowry (dahej) practices</strong> once and for all.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-2">Disclaimer</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-bold text-red-600">Note:</span> <strong>DowryAI</strong> or <strong>Dowry Calculator AI</strong> 
            is a satire-based awareness project. It does not promote or calculate real dowry values. All results are fictional 
            and designed to inspire thought, laughter, and awareness about <strong>dahej-related social issues</strong>.
          </p>
        </section>

        {/* Closing Quote */}
        <div className="text-center border-t border-gray-300 pt-6">
          <p className="italic text-gray-600 text-base">
            💡 Say no to <strong>dowry</strong>, say yes to <strong>respect</strong>. Join <strong>DowryAI</strong> — 
            where artificial intelligence meets <strong>real change</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnderstandDowryPractice;
