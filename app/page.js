 
import React  from 'react' 
import LandingPage from '@/components/dowrypage/LandingPage';
export const metadata = {
  title: "Calculate Your Dowry| Dowry Calculator Ai",
  description:
    "Take this humorous personality quiz to get your imaginary dowry estimate. Dowry Calculator Ai mocks the outdated dowry system and spreads awareness through comedy. Say no to dowry!",
  keywords: [
    "dowry", "calculator", "Dowry Calculator Ai", "marriage", "wedding", "dowry system", "dahej pratha", "dahej calculator"
    ,
    "calculate my dahej",
    "satirical quiz",
    "anti dowry tool",
    "dowry awareness",
    "funny quiz India",
    "dowry system parody",
    "no dowry movement",
    "dowry meme generator",
  ],
  openGraph: {
    title: "Dowry Calculator Ai",
    description:
      "A satirical web tool that calculates fake dowry amounts for laughs and awareness. Take the quiz, get your result, and share the message.",
    url: "https://dowryai.netlify.app", // replace with your real domain
    siteName: "Dowry Calculator Ai",
    images: [
      {
        url: "https://dowryai.netlify.app/preview.jpg", // link to your OG image
        width: 1200,
        height: 630,
        alt: "Dowry Calculator Ai Result Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dowry Calculator Ai",
    description:
      "Mock the dowry system with a hilarious result card. Take the quiz, laugh, and raise awareness!",
    images: ["https://dowryai.netlify.app/preview.jpg"],
  },
  metadataBase: new URL("https://dowryai.netlify.app"), // Replace with your domain
};

function page() {
 
  return (
     
      <LandingPage/>
     
    
  )
}

export default page
