 
import React  from 'react' 
 import LandingPage from '@/components/dowrypage/LandingPage';
export const metadata = {
  title: "Dowry Calculator | A Satirical Tool to End a Serious Problem",
  description:
    "Take this humorous personality quiz to get your imaginary dowry estimate. Dowry Calculator mocks the outdated dowry system and spreads awareness through comedy. Say no to dowry!",
  keywords: [
    "dowry calculator",
    "satirical quiz",
    "anti dowry tool",
    "dowry awareness",
    "funny quiz India",
    "dowry system parody",
    "no dowry movement",
    "dowry meme generator",
  ],
  openGraph: {
    title: "Dowry Calculator",
    description:
      "A satirical web tool that calculates fake dowry amounts for laughs and awareness. Take the quiz, get your result, and share the message.",
    url: "https://yourdomain.com", // replace with your real domain
    siteName: "Dowry Calculator",
    images: [
      {
        url: "https://yourdomain.com/preview.jpg", // link to your OG image
        width: 1200,
        height: 630,
        alt: "Dowry Calculator 3000 Result Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dowry Calculator",
    description:
      "Mock the dowry system with a hilarious result card. Take the quiz, laugh, and raise awareness!",
    images: ["https://yourdomain.com/preview.jpg"],
  },
  metadataBase: new URL("https://yourdomain.com"), // Replace with your domain
};

function page() {
 
  return (
    <LandingPage/>
  )
}

export default page
