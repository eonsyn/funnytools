import './globals.css';
import Providers from './providers';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
  
 export const metadata = {
  title: 'Dowry Calculator',
  description:
    'Dowry Calculator is a humorous web app that parodies the outdated dowry system by calculating imaginary dowry amounts based on quirky personality questions. Designed to entertain while raising awareness, this satire-based tool delivers fun results you can share with friends — all while spreading an important message: never accept or give dowry.',
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
       </head>
      <body>
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
