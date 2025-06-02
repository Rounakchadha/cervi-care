import React from 'react';
import Footer from '../components/Footer';

const facts = [
  {
    title: "HPV is the Main Cause",
    description: "Almost all cervical cancer cases are caused by persistent infection with high-risk human papillomavirus (HPV) types.",
  },
  {
    title: "Vaccination is Key",
    description: "The HPV vaccine can prevent over 90% of HPV-related cancers, including cervical cancer. It's safe and effective.",
  },
  {
    title: "Early Detection Saves Lives",
    description: "Regular Pap tests and HPV screenings can detect changes in cervical cells before they turn cancerous.",
  },
  {
    title: "Often No Early Symptoms",
    description: "Cervical cancer may not show symptoms in early stages, making regular screening crucial for detection.",
  },
  {
    title: "Highly Treatable if Caught Early",
    description: "When detected early, cervical cancer has a high survival rate and can often be treated successfully.",
  },
  {
    title: "Affects Younger Women Too",
    description: "Cervical cancer can affect women in their 20s and 30s. Prevention and awareness should start early.",
  },
  {
    title: "Accessible Prevention Tools",
    description: "Vaccines, screenings, and education can significantly reduce the risk of cervical cancer worldwide.",
  },
  {
    title: "Lifestyle Factors Matter",
    description: "Smoking, a weakened immune system, and poor diet can increase your risk of developing cervical cancer.",
  },
  {
    title: "Global Health Priority",
    description: "WHO aims to eliminate cervical cancer as a public health problem by increasing vaccination and screening worldwide.",
  },
];

export default function FactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 via-blue-50 to-teal-100 text-gray-800">
      {/* Heading */}
      <section className="text-center px-6 pt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-teal-800 mb-4 leading-tight">
          Why Cervical Health Matters
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Empower yourself with knowledge. Understanding cervical cancer is the first step in preventing it.
        </p>
      </section>

      {/* Facts Grid */}
      <section className="px-6 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="rounded-xl bg-white shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <h2 className="text-xl font-semibold text-teal-800 mb-2">
              {fact.title}
            </h2>
            <p className="text-gray-700">{fact.description}</p>
          </div>
        ))}
      </section>

      {/* Get Started Button */}
      <div className="text-center mb-20">
        <a
          href="/login"
          className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-teal-800 transition"
        >
          Get Started
        </a>
      </div>

      {/* Back to Home Button */}
<div className="text-center mb-6">
  <a
    href="/"
    className="inline-block border border-teal-700 text-teal-700 px-6 py-2 rounded-lg text-base font-medium hover:bg-teal-700 hover:text-white transition"
  >
    ← Back to Home
  </a>
</div>\


      {/* Footer */}
      <Footer />
    </div>
  );
}