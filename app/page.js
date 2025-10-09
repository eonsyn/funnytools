 
import React  from 'react' 
import LandingPage from '@/components/dowrypage/LandingPage';
import FaqCard from '@/components/dowrypage/FaqCard';
import UnderstandDowryPractice from "@/components/dowrypage/UnderstandDowryPractice"
export const metadata = {
  title: "Dowry Calculator",
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
     <>
      <LandingPage/>

          
       <UnderstandDowryPractice/>
      
          <div className="max-w-5xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-extrabold text-pink-700 mb-4">
                    How <strong>Dowry Calculator AI</strong> Works
                </h1>
                <p className="text-lg text-gray-700">
                    Discover how our <strong>funny dowry calculator</strong> uses your quirky answers to parody the <strong>dowry system</strong> in India. It’s a <strong>marriage parody</strong> built to spread <strong>dowry awareness</strong> through humor!
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-6xl bg-gradient-to-t  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white/60 rounded-xl shadow-md p-6 flex flex-col justify-between border border-pink-200 hover:shadow-xl transition">
                    <h1 className="text-xl font-bold text-pink-600 mb-2">📝 Step 1: Enter Your Info</h1>
                    <p className="text-sm text-gray-700">
                        Fill out your fictional details for our <strong>dahej calculator</strong>:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                        <li>Name</li>
                        <li>Education</li>
                        <li>Profession</li>
                        <li>Marital Status</li>
                        <li>Car Ownership</li>
                        <li>Salary</li>
                        <li>Location</li>
                        <li>Skin Tone</li>
                        <li>Govt Job in Family</li>
                        <li>Expectations</li>
                    </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white/60 rounded-xl shadow-md p-6 flex flex-col   border border-pink-200 hover:shadow-xl transition">
                    <h1 className="text-xl font-bold text-pink-600 mb-2"> Step 2: AI Generates Result</h1>
                    <p className="text-sm text-gray-700">
                        Once submitted, our <strong>Dowry Calculator AI</strong> crafts a humorous response mocking the outdated <strong>dowry system India</strong> still jokes about.
                    </p>
                    <p className="text-sm mt-1 ">
                        It's satire + awareness in one. Think of it as your personal <strong>dowry meme generator</strong> or <strong>funny quiz India</strong> for <strong>calculate fake dowry</strong> 😂
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/60 rounded-xl shadow-md p-6 flex flex-col  border border-pink-200 hover:shadow-xl transition">
                    <h1 className="text-xl font-bold text-pink-600 mb-2"> Step 3: Share & Spread Awareness</h1>
                    <p className="text-sm text-gray-700">
                        Share your result with friends! Start conversations about <strong>dahej pratha satire</strong> and say NO to dowry. Be part of the <strong>anti-dowry tool</strong> revolution.
                    </p>
                    <p className="text-sm mt-2 text-gray-600">
                        Use it as your <strong>dowry awareness</strong> campaign piece or just for <strong>wedding humor</strong>. 💒
                    </p>
                </div>
            </div>
             <div className='bg-gradient-to-b from-pink-100 via-pink-50 to-white'>
        <FaqCard />
        </div> 
         
     </>
     
    
  )
}

export default page
