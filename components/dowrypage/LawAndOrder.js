import React from "react";
import { GiJusticeStar } from "react-icons/gi";
import { FaBalanceScale, FaGavel } from "react-icons/fa";
import { MdOutlineWarningAmber } from "react-icons/md";

function LawAndOrder() {
  const laws = [
    {
      icon: <FaBalanceScale className="text-pink-600 text-3xl" />,
      title: "Dowry Prohibition Act, 1961",
      description:
        "This Act prohibits the giving or taking of dowry in India. Both the giver and taker are punishable by law with imprisonment up to 5 years and a fine up to ₹15,000 or the amount of dowry, whichever is higher.",
    },
    {
      icon: <FaGavel className="text-amber-600 text-3xl" />,
      title: "Section 304B – Indian Penal Code (IPC)",
      description:
        "This section deals with 'Dowry Deaths'. If a woman dies within 7 years of marriage under unnatural circumstances and it’s linked to dowry harassment, the husband and in-laws are presumed responsible.",
    },
    {
      icon: <GiJusticeStar className="text-rose-700 text-3xl" />,
      title: "Section 498A – Cruelty by Husband or Relatives",
      description:
        "Protects women from cruelty and harassment by their husband or his relatives. It includes mental and physical abuse related to dowry demands.",
    },
    {
      icon: <MdOutlineWarningAmber className="text-red-500 text-3xl" />,
      title: "Protection of Women from Domestic Violence Act, 2005",
      description:
        "Provides legal protection to women facing physical, emotional, or economic abuse — including dowry-related harassment — and ensures immediate relief through court orders.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 mt-8 ">
      <h1 className="text-3xl font-bold text-center text-[var(--text-primary,#222)] mb-6 flex items-center justify-center gap-2">
        <GiJusticeStar className="text-pink-600" />
        Law & Order on Dowry in India
      </h1>

      <p className="text-center text-[var(--text-secondary,#555)] mb-8 text-lg">
        Dowry is not just a social evil — it’s a punishable offense under Indian law.
        Here are the key legal protections every citizen should know.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {laws.map((law, index) => (
          <div
            key={index}
            className="p-5 border border-pink-100 rounded-xl bg-pink-50 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {law.icon}
              <h2 className="text-xl font-semibold text-[var(--text-primary,#222)]">
                {law.title}
              </h2>
            </div>
            <p className="text-[var(--text-secondary,#555)] text-sm leading-relaxed">
              {law.description}
            </p>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default LawAndOrder;
