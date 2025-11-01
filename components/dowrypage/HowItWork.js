
import React from "react";

function HowItWork({ showquestion }) {
  return (
    <main className="p-6 md:p-12 bg-gradient-to-b from-pink-100 via-pink-50 to-white text-gray-800">
      {/* Intro + SEO Heading */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <h1
          className="text-4xl font-bold text-pink-700 mb-4"
          title="How DowryAI Works - AI Dowry Calculator Explained"
        >
          How DowryAI Works
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>DowryAI</strong> is an <strong>AI-powered dowry calculator</strong> designed to make people
          laugh, learn, and think. It uses <strong>artificial intelligence</strong> to generate a funny
          <strong> dowry parody result</strong> — turning a serious social issue into a message of awareness.
          Our goal is to promote <strong>anti-dowry education</strong> through humor and technology.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl font-semibold text-pink-600 mb-3">
          Step-by-Step: The DowryAI Experience
        </h2>
        <ol className="text-lg text-gray-700 leading-relaxed space-y-2 list-decimal list-inside">
          <li>
            Enter your details like <strong>education, salary, or background</strong>.
          </li>
          <li>
            Let <strong>DowryAI</strong> process your answers using playful AI logic.
          </li>
          <li>
            Instantly get a <strong>comical “dowry result”</strong> to share and spread awareness.
          </li>
        </ol>
        <p className="mt-4 text-gray-700">
          Every calculation is just a <strong>satirical parody</strong> — no real values or judgments,
          only laughter with purpose.
        </p>
      </section>

      {/* CTA Card */}
      <section
        className="mt-12 bg-pink-100 p-8 rounded-xl text-center max-w-3xl mx-auto shadow-inner"
        style={{
          boxShadow:
            "inset 0 4px 10px rgba(0, 0, 0, 0.1), inset 0 -4px 10px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h2 className="text-2xl font-semibold text-pink-700 mb-3">
          🎉 Ready to Calculate?
        </h2>
        <p className="mb-4 text-gray-700">
          Click below to use the <strong>Dowry Calculator AI</strong> and get your own
          hilarious <strong>dowry parody result</strong> while joining the{" "}
          <strong>#NoDowryMovement</strong> with <strong>DowryAI</strong>.
        </p>
        <button
          onClick={showquestion}
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow-inner"
          style={{
            boxShadow:
              "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -2px 4px rgba(255,255,255,0.1)",
          }}
          aria-label="Start using the Dowry Calculator AI"
        >
          Calculate My Dahej
        </button>
      </section>

      {/* Closing Text */}
      <footer className="mt-10 text-center text-gray-600 italic text-sm">
        Powered by <strong>DowryAI</strong> — the world’s first
        <strong> AI-powered dowry awareness platform</strong> that uses humor to
        drive social change.
      </footer>
    </main>
  );
}

export default HowItWork;
