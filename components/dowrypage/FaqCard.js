const faqList = [
    {
      question: "What is the Dowry Calculator 3000?",
      answer:
        "Dowry Calculator 3000 is a satirical tool that humorously estimates dowry based on quirky personality questions. It's designed to raise awareness against the outdated dowry system.",
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
      <section className="max-w-4xl mx-auto px-6 py-10  rounded-2xl   mt-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <details
              key={idx}
              className="border bg-pink-200 border-gray-200 rounded-md p-4 group transition-all duration-300"
            >
              <summary className="font-medium cursor-pointer text-lg text-gray-700 group-open:text-purple-600">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    );
  };
  
  export default FaqCard;
  