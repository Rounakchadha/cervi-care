import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is cervical cancer?',
    answer: 'Cervical cancer occurs in the cells of the cervix — the lower part of the uterus that connects to the vagina.',
  },
  {
    question: 'How can I prevent cervical cancer?',
    answer: 'You can reduce your risk with regular screening (Pap test), HPV vaccination, and safe sexual practices.',
  },
  {
    question: 'What are the symptoms?',
    answer: 'Symptoms may include abnormal bleeding, pelvic pain, or pain during intercourse. Early stages may have no symptoms.',
  },
  {
    question: 'Who should get the HPV vaccine?',
    answer: 'The HPV vaccine is recommended for girls and boys between ages 9 and 14, and for everyone up to 26 if not already vaccinated.',
  },
  {
    question: 'Is cervical cancer curable?',
    answer: 'If detected early, it’s highly treatable with good survival rates through surgery, radiation, or chemotherapy.',
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-emerald-100 to-green-100 px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-emerald-800 mb-6">Frequently Asked Questions</h1>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search a question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-emerald-300 focus:ring-2 focus:ring-emerald-600 outline-none"
        />
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-6">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-emerald-800">{faq.question}</h3>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No matching questions found.</p>
        )}
      </div>
    </div>
  );
}