import React, { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      id: "1",
      question: "What is K-ID?",
      answer:
        "K-ID is your personal digital health identity. It is a secure platform where your medical records, test results, and health history are stored and controlled by you. Anytime you need to share your records with a doctor, hospital, or organisation, you do it instantly from your phone.",
    },
    {
      id: "2",
      question: "Who puts my records on K-ID?",
      answer:
        "Only verified labs, hospitals, and clinics can send records to your K-ID profile. You cannot upload or edit your own records. This is intentional. It means every record on your profile is verified and trusted by whoever receives it.",
    },
    {
      id: "3",
      question: "How do I share my records with a doctor?",
      answer:
        "You generate a one-time QR code for the specific record you want to share. The doctor scans it. The record opens on their screen. The QR code expires immediately after one scan. Nobody else can use it.",
    },
    {
      id: "4",
      question: "Is my health data safe?",
      answer:
        "Yes. You control every share. No record leaves your profile without your approval. Every action on your account is permanently logged with a timestamp so you always know who accessed what and when.",
    },
    {
      id: "5",
      question: "What if I do not have internet at the hospital?",
      answer:
        "QR codes remain valid for 10 minutes after you generate them. So even if your connection drops during the consultation, your doctor can still scan and access the record you approved.",
    },
    {
      id: "6",
      question: "Do I have to pay to use K-ID?",
      answer:
        "Creating your K-ID account is free. A small monthly fee unlocks full record sharing features. Pricing is set specifically for Nigeria and will be confirmed at launch.",
    },
    // {
    //   id: "7",
    //   question: "My previous hospital is not on K-ID yet. What happens to my old records?",
    //   answer:
    //     "K-ID captures all records going forward from the day you join. For existing paper records, we offer a manual verification service on the LAUTECH campus where a trained team member digitises your documents securely. Full historical import from hospitals is coming post-launch.",
    // },
  ];

  const toggleItem = (id) => {
    // Compulsory single-open accordion behavior:
    // clicking one item closes all others.
    const isCurrentlyOpen = openItems.has(id);
    if (isCurrentlyOpen) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set([id]));
    }
  };

  return (
    <div className="min-h-screen bg-canvas py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 pt-10">
          <p className="inline-flex items-center gap-2 px-4 py-2 uppercase text-center rounded-full bg-primary/10 text-primary font-semibold text-sm sm:text-base">
            FAQ
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Have Questions? We’ve got Answers
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Can't find what you're looking for? Reach out to our support team.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.has(faq.id);
            return (
              <div
                key={faq.id}
                className={`bg-canvas rounded-2xl border transition-colors duration-300 ease-in-out ${
                  isOpen
                    ? "border-primary"
                    : "border-hairline hover:border-hairline-strong"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center p-6 text-left group focus:outline-none focus:ring-primary focus:ring-offset-2 rounded-2xl"
                >
                  <span className="text-lg font-medium text-ink group-hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </span>

                  {/* Smooth Rotating Chevron/Plus Icon */}
                  <span className="ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-paper text-primary group-hover:bg-primary/10 transition-colors duration-200">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      {isOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12M6 12h12"
                        />
                      )}
                    </svg>
                  </span>
                </button>

                {/* Smooth Heights Transition Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Divider Line */}
                    <div className="mx-6 border-t border-hairline" />
                    <div className="p-6 text-base text-ink-soft leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
