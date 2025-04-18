// app/privacy/page.js
export const metadata = {
    title: "Privacy Policy | Dowry Calculator",
    description:
      "Read the Privacy Policy of Dowry Calculator, a satirical tool aimed at raising awareness against dowry. Learn how we handle your data and protect your privacy.",
    keywords: [
      "privacy policy",
      "dowry calculator privacy",
      "anti dowry app privacy",
      "privacy policy India",
      "dowry awareness tool",
    ],
    openGraph: {
      title: "Privacy Policy | Dowry Calculator",
      description:
        "Privacy policy for Dowry Calculator website. Learn how we handle data and ensure your privacy while using our satirical tool.",
      url: "https://dowryai.netlify.app/privacy",
      siteName: "Dowry Calculator",
      images: [
        {
          url: "hhttps://dowryai.netlify.app/privacy-policy-image.jpg",
          width: 1200,
          height: 630,
          alt: "Privacy Policy Dowry Calculator",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Privacy Policy | Dowry Calculator",
      description:
        "Learn about the privacy policy for Dowry Calculator, a fun tool to raise awareness against dowry.",
      images: ["https://dowryai.netlify.app/privacy-policy-image.jpg"],
    },
    metadataBase: new URL("https://dowryai.netlify.app/"), // Replace with your domain
  };
  
  export default function PrivacyPolicyPage() {
    return (
      <main className="bg-pink-50 min-h-screen p-6 flex flex-col items-center justify-start">
        <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to Dowry Calculator! Your privacy is important to us. This
            privacy policy outlines how we handle your information while you use
            our website, which is a satirical tool designed to raise awareness
            against the dowry system.
          </p>
  
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Information We Collect</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We do not collect personal information unless explicitly provided by
            the user. The information collected may include:
          </p>
          <ul className="list-inside list-disc text-gray-700 text-lg mb-4">
            <li>Your responses to personality questions</li>
            <li>Your IP address (for analytics and security purposes)</li>
            <li>Anonymous usage data to improve the site’s functionality</li>
          </ul>
  
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">How We Use Your Information</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-inside list-disc text-gray-700 text-lg mb-4">
            <li>To generate personalized, satirical dowry results</li>
            <li>To improve user experience and site performance</li>
            <li>To prevent fraud and protect the security of the website</li>
          </ul>
  
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Data Security</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We take reasonable precautions to protect your data, but please note
            that no method of internet transmission is 100% secure. We are
            committed to securing your information to the best of our ability.
          </p>
  
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Cookies</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our website may use cookies to enhance your experience. Cookies help
            us understand how you interact with the website, which helps us
            improve your experience. You can control the use of cookies through
            your browser settings.
          </p>
  
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Third-Party Links</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our website may contain links to third-party sites. Please note that
            we are not responsible for the content or privacy practices of these
            sites. We encourage you to review their privacy policies.
          </p>
  
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Changes to This Policy</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We reserve the right to update this privacy policy as needed. Any
            changes will be posted on this page with an updated date. Please check
            this page periodically for any changes.
          </p>
  
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Contact Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you have any questions or concerns about this privacy policy,
            please feel free to contact us at{" "}
            <a href="mailto:contact@yourdomain.com" className="text-pink-600">
              contact@yourdomain.com
            </a>.
          </p>
  
          <p className="text-center text-gray-500 italic mt-6 text-sm">
            Thank you for using Dowry Calculator and for supporting anti-dowry
            awareness!
          </p>
        </div>
      </main>
    );
  }
  