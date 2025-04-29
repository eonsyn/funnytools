import './globals.css';
import Providers from './providers';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
  
export const metadata = {
  title: "Dowry Calculator",
  description:
    "Dowry Calculator is a humorous web app that parodies the outdated dowry system by calculating imaginary dowry amounts based on quirky personality questions.",
  keywords: [
    "dowry", "calculator", "Dowry Calculator Ai", "marriage", "wedding", "dowry system", "dahej pratha",
    "calculate my dahej", "dowry calculator", "anti dowry tool", "dowry awareness", "funny quiz India",
    "dowry system parody", "dowry meme generator", "Dowry Calculator AI", "funny dowry quiz", "anti-dowry tool",
    "marriage parody", "dahej calculator", "dowry system India", "no dowry campaign", "dahej pratha satire",
    "dowry meme generator", "calculate fake dowry", "wedding humor"
  ],
  metadataBase: new URL("https://dowryai.netlify.app"),
  openGraph: {
    title: "Dowry Calculator AI | A Satirical Tool Against the Dowry System",
    description: "Take a witty quiz to generate your fictional dowry estimate. Share hilarious results and spread the message: dowry is outdated. Join the movement through comedy!",
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
    title: "Dowry Calculator AI",
    description: "Mock the dowry system with a hilarious result card. Take the quiz, laugh, and raise awareness!",
    images: ["https://dowryai.netlify.app/preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification (optional) */}
        <meta
          name="google-site-verification"
          content="a519RGXXnU8_HDFGvb_9NLkro6BAy_BnCXPq8fhFTkY"
        />
<meta name="msvalidate.01" content="68F9A32774479A1C4618586A9D223B7D" />
        {/* ✅ Google Analytics Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KBQK12HPYQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KBQK12HPYQ');
            `,
          }}


        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2404358914933411"
     crossorigin="anonymous"></script>
       </head>
      <body className='font-secondary bg-pink-100'>
        <Providers>
              <Navbar /> 
       <ToastContainer/>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
