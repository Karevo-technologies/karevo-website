import React, { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      id: "1",
      question: "What is Karevo?",
      answer:
        "Karevo is a comprehensive healthcare platform that provides drug verification, electronic health records (EHR), appointment scheduling, and more to ensure safe and efficient medical services.",
    },
    // {
    //   id: "2",
    //   question: "How does drug verification work?",
    //   answer:
    //     "Our advanced drug verification system scans medication barcodes and cross-references them with verified pharmaceutical databases to prevent medication errors and ensure patient safety.",
    // },
    {
      id: "3",
      question: "Is my health data secure?",
      answer:
        "Yes, all data is encrypted using industry-standard AES-256 encryption and stored in HIPAA-compliant servers with regular security audits.",
    },
    {
      id: "4",
      question: "Can I schedule appointments online?",
      answer:
        "Absolutely! Use our intuitive scheduling system to book, reschedule, or cancel appointments 24/7. Get instant confirmations and reminders.",
    },
    {
      id: "5",
      question: "What is Electronic Health Records (EHR)?",
      answer:
        "EHR is a digital version of a patient's paper chart. Karevo's EHR allows seamless access to medical history, test results, and prescriptions across providers.",
    },
    {
      id: "6",
      question: "How do I get started with Karevo?",
      answer:
        "Sign up for free, verify your account, and start exploring features. Premium plans unlock advanced tools like unlimited scheduling and detailed analytics.",
    },
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (openItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Have Questions? We’ve got Answers
        </h1>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-[45px] shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3B00C5] focus:ring-offset-2 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className="w-8 h-8 text-[#3B00C5] transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Horizontal line always */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 12h16"
                  />
                  {/* Vertical line - hide when open */}
                  {!openItems.has(faq.id) && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16"
                    />
                  )}
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openItems.has(faq.id)
                    ? "max-h-[500px] opacity-100 py-6"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <div className="px-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
