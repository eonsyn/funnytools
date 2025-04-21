// app/about/page.js
export const metadata = {
  title: "About | Dowry Calculator AI",
  description:
    "Discover the story behind Dowry Calculator AI — a humorous web app that creatively challenges the outdated dowry system. Learn how laughter can spark awareness and inspire change.",
  keywords: [
    "about Dowry Calculator AI",
    "anti-dowry movement",
    "dowry awareness India",
    "satirical dowry quiz",
    "dowry parody app",
    "social awareness tools",
    "funny Indian web apps",
    "no dowry campaign",
  ],
  openGraph: {
    title: "About | Dowry Calculator AI",
    description:
      "Meet the minds behind Dowry Calculator AI — a witty and impactful web tool that uses satire to combat the dowry tradition and spread awareness.",
    url: "https://dowryai.netlify.app/about",
    siteName: "Dowry Calculator AI",
    images: [
      {
        url: "https://dowryai.netlify.app/preview.png",
        width: 1200,
        height: 630,
        alt: "About Dowry Calculator AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Dowry Calculator AI",
    description:
      "Dowry Calculator AI is more than a funny quiz — it's a creative protest against outdated traditions. Learn about our purpose and vision.",
    images: ["https://dowryai.netlify.app/preview.png"],
  },
  metadataBase: new URL("https://dowryai.netlify.app"),
};

  
  export default function AboutPage() {
    return (
      <main className="bg-gradient-to-b from-pink-100 via-pink-50 to-white min-h-screen p-6 flex items-center justify-center">
        <div className="max-w-3xl bg-white/60 rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">
            About Dowry Calculator Ai
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Dowry Calculator Ai is a <strong>satirical web tool</strong> designed to mock
            the outdated and harmful practice of dowry. Through a humorous personality quiz,
            we generate imaginary dowry estimates — not to promote the concept, but to
            <span className="text-pink-600 font-medium"> spark conversation, awareness, and laughter</span>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Whether you're getting a “5 goats and a gold-plated nose ring” result or
            “a Nawabi bungalow with an ego tax,” remember — it’s all made up and
            meant to highlight how absurd the real dowry system is.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            This project is part satire, part activism, and fully <strong>against the dowry system</strong>.
            We encourage everyone to <span className="text-red-600 font-bold">say no to dowry</span>,
            share this tool, and support a future free of this outdated tradition.
          </p>
          <p className="text-gray-500 italic mt-6 text-sm text-center">
            “Laughter is a weapon, and we’re using it for good.”
          </p>
        </div>
      </main>
    );
  }
  