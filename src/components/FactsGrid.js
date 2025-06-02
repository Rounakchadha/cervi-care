import React from 'react';

const facts = [
  {
    title: 'HPV Cause',
    content: 'Nearly all cases are caused by Human Papillomavirus (HPV).',
  },
  {
    title: 'Vaccine Preventable',
    content: 'Vaccination against HPV can prevent cervical cancer.',
  },
  {
    title: 'Screening Effective',
    content: 'Regular Pap tests can detect precancerous conditions early.',
  },
  {
    title: 'Symptoms',
    content: 'Often asymptomatic in early stages; later symptoms may include irregular bleeding.',
  },
  {
    title: 'Treatable',
    content: 'Highly treatable when diagnosed early.',
  },
  {
    title: 'Global Impact',
    content: 'Cervical cancer is the fourth most common cancer in women worldwide.',
  },
];

export default function FactsGrid() {
  return (
    <section id="facts" className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-teal-800 mb-8">📚 Know the Facts</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-left border border-teal-100"
          >
            <h3 className="text-teal-700 font-semibold text-lg mb-2">{fact.title}</h3>
            <p className="text-purple-700 text-sm">{fact.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="/login"
          className="bg-teal-700 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-teal-800 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}