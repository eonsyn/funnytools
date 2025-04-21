const faqList = [
    {
      question: "What is the Dowry Calculator ?",
      answer:
        "Dowry Calculator  is a satirical tool that humorously estimates dowry based on quirky personality questions. It's designed to raise awareness against the outdated dowry system.",
    },
    {
      question: "Is this website serious?",
      answer:
        "No! It's meant for laughs and learning. Our goal is to mock the dowry practice and promote meaningful conversations through humor.",
    },
    {
      question: "Can I share my results with friends?",
      answer:
        "Absolutely! After getting your satirical dowry result, you can share it on WhatsApp or Facebook to spread the message (and laughter).",
    },
    {
      question: "Is any data stored or shared?",
      answer:
        "No personal data is stored or shared. Everything happens locally in your browser for privacy and fun.",
    },
  ];
  
  const FaqCard = () => {
    return (
      <section className="max-w-4xl mx-auto px-6 py-12 pt-10 rounded-2xl    ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-600 font-secondary">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqList.map((faq, idx) => (
          <details
            key={idx}
            className="group border border-pink-300 rounded-lg bg-pink-50 px-5 py-4 transition-all duration-300 hover:shadow-md"
          >
            <summary className="text-lg font-semibold cursor-pointer text-gray-800 group-open:text-pink-600">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
    );
  };
  
  export default FaqCard;
  