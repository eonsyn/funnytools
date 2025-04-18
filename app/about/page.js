// app/about/page.js
export const metadata = {
    title: "About | Dowry Calculator",
    description:
      "Learn more about Dowry Calculator – a satirical web tool that parodies the dowry system through humor. Our mission is to raise awareness against dowry practices using fun and laughter.",
    keywords: [
      "about dowry calculator",
      "anti dowry app",
      "dowry awareness",
      "dowry satire",
      "stop dowry in India",
      "funny dowry calculator",
      "no dowry movement",
    ],
    openGraph: {
      title: "About | Dowry Calculator",
      description:
        "Know the story behind Dowry Calculator — a creative, funny, and powerful way to mock the outdated dowry system and promote change.",
      url: "https://dowryai.netlify.app/about",
      siteName: "Dowry Calculator",
      images: [
        {
          url: "https://dowryai.netlify.app/preview.png",
          width: 1200,
          height: 630,
          alt: "Dowry Calculator About Page",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About | Dowry Calculator",
      description:
        "Dowry Calculator is a satirical personality quiz that raises awareness against the dowry system in India. Learn more about our mission.",
      images: ["https://dowryai.netlify.app/preview.png"],
    },
    metadataBase: new URL("https://dowryai.netlify.app"), // Replace with your domain
  };
  
  export default function AboutPage() {
    return (
      <main className="bg-pink-50 min-h-screen p-6 flex items-center justify-center">
        <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">
            About Dowry Calculator
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Dowry Calculator is a <strong>satirical web tool</strong> designed to mock
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
  