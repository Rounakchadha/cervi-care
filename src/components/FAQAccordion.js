import React, { useState } from 'react';

const faqs = [
  {
    question: "What is CerviCare?",
    answer: "CerviCare helps promote cervical cancer awareness through tools, information, and healthcare access.",
  },
  {
    question: "Can I connect with a doctor?",
    answer: "Yes, we partner with medical professionals for guidance, appointments, and awareness campaigns.",
  },
  {
    question: "Is this service free?",
    answer: "Yes! CerviCare is a free awareness initiative built for education and community support.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">Got Questions? We’ve Got Answers</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-4">
          <button
            className="flex justify-between w-full text-left font-medium text-lg text-gray-800"
            onClick={() => toggle(index)}
          >
            {faq.question}
            <span>{openIndex === index ? '▲' : '▼'}</span>
          </button>
          {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}