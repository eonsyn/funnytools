"use client";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqList = [
  {
    question: "What is the Dowry AI Calculator?",
    answer:
      "Dowry AI Calculator is a satirical web tool that humorously estimates a ‘dowry value’ based on quirky personality questions. It’s designed to mock the dowry culture and inspire reflection — not promote it.",
  },
  {
    question: "Is this website serious?",
    answer:
      "Nope! It’s pure satire. The goal is to use humor as a mirror — making people laugh first, then think about how absurd and outdated the dowry tradition really is.",
  },
  {
    question: "Can I share my results with friends?",
    answer:
      "Of course! Once you get your tongue-in-cheek ‘dowry result,’ you can share it on WhatsApp, Instagram, or X (Twitter) to spread both the message and the laughter.",
  },
  {
    question: "Does this site promote dowry in any way?",
    answer:
      "Not at all. The site actually mocks and condemns the idea of dowry. Its purpose is to raise awareness about gender inequality and financial exploitation in marriages — using satire as a storytelling tool.",
  },
  {
    question: "Why make a joke about such a serious topic?",
    answer:
      "Because humor opens minds. When people laugh, they listen. By turning an uncomfortable topic into something shareable, we can start real conversations about ending dowry practices.",
  },
  {
    question: "Is the data real or stored anywhere?",
    answer:
      "No personal information is collected or shared. Your inputs like salary, education, or marital status are used only to generate a funny AI response — which may appear publicly — but your actual data is never stored or exposed.",
  },
  {
    question: "Who built DowryAI?",
    answer:
      "DowryAI is developed by a small team of developers passionate about AI, satire, and social awareness — combining humor, design, and data to spark meaningful conversations.",
  },
];

const FaqCard = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 rounded-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <FaQuestionCircle className="text-4xl text-[var(--accent)] mb-3" />
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)] font-secondary">
          Frequently Asked Questions
        </h2>
        <p className="text-[var(--text-secondary)] mt-2 max-w-xl">
          Honest answers with a hint of sarcasm — because awareness doesn’t have to be boring.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-5">
        {faqList.map((faq, idx) => (
          <details
            key={idx}
            className="group border border-[var(--border)] rounded-xl bg-[var(--card-bg-light)] px-6 py-5 transition-all duration-300 hover:shadow-md open:shadow-[0_0_15px_var(--accent-light)]"
          >
            <summary className="text-lg font-semibold cursor-pointer text-[var(--text-primary)] group-open:text-[var(--accent)] flex items-center justify-between">
              <span>{faq.question}</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-[var(--accent)]">
                ▼
              </span>
            </summary>
            <p className="mt-3 text-[var(--text-secondary)] leading-relaxed pl-1">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      
    </section>
  );
};

export default FaqCard;
