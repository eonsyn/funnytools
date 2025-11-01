import Script from "next/script";

export default function SchemaMarkup() {
  return (
    <Script
      id="dowryai-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DowryAi",
          alternateName: "AI Dowry Calculator",
          operatingSystem: "Web",
          applicationCategory: "UtilityApplication",
          description:
            "DowryAi is an AI-powered dowry calculator that predicts dowry expectations, analyzes user trends, and compares real-world cases.",
          image: "https://dowryai.netlify.app/og-image.png",
          url: "https://dowryai.netlify.app/",
          author: {
            "@type": "Organization",
            name: "DowryAi",
            url: "https://dowryai.netlify.app/",
          },
          publisher: {
            "@type": "Organization",
            name: "DowryAi",
            logo: {
              "@type": "ImageObject",
              url: "https://dowryai.netlify.app/logo.png",
            },
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "120",
          },
          keywords: [
            "AI dowry calculator",
            "dowry prediction tool",
            "marriage cost estimator",
            "AI dowry analysis",
          ],
        }),
      }}
    />
  );
}
