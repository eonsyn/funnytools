 
import React  from 'react' 
import LandingPage from '@/components/dowrypage/LandingPage';
export const metadata = {
  title: "Dowry Calculator |Indian Dowry Calculator",
  description:
  "100% working dowry calculato",
  keywords: [
    "dowry", "calculator", "Dowry Calculator Ai", "marriage", "wedding", "dowry system", "dahej pratha", "dahej calculator"
    ,
    "calculate my dahej",
    "dowry calculator",
    "anti dowry tool",
    "dowry awareness",
    "funny quiz India",
    "dowry system parody",
    
    "dowry meme generator",
    "dowry calculator", "Dowry Calculator AI", "funny dowry quiz", "anti-dowry tool", "marriage parody", 
    "dahej calculator", "dowry system India", "no dowry campaign", "dahej pratha satire", "dowry meme generator",
    "calculate fake dowry",  "wedding humor", "funny quiz India"
  ],
  openGraph: {
    title: "Dowry Calculator AI | A Satirical Tool Against the Dowry System",
    description:
      "Take a witty quiz to generate your fictional dowry estimate. Share hilarious results and spread the message: dowry is outdated. Join the movement through comedy!",
    url: "https://dowryai.netlify.app",
    siteName: "Dowry Calculator AI",
    images: [
      {
        url: "https://dowryai.netlify.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Dowry Calculator AI - Satirical Result Card",
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
