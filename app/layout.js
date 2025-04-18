 
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
export const metadata = {
  title: "Dowry Calculator",
  description: "Dowry Calculator is a humorous web app that parodies the outdated dowry system by calculating imaginary dowry amounts based on quirky personality questions. Designed to entertain while raising awareness, this satire-based tool delivers fun results you can share with friends — all while spreading an important message: never accept or give dowry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* ✅ Paste your Google verification here */}
        <meta
          name="google-site-verification"
          content="a519RGXXnU8_HDFGvb_9NLkro6BAy_BnCXPq8fhFTkY"
        />
      </head>
      <body
         
      >
         <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
