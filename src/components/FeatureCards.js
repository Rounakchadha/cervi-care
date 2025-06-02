import React from 'react';

const features = [
  {
    title: 'Discover Top Doctors',
    description:
      'Connect with trusted specialists and professionals across various healthcare domains for consultation, check-ups, or second opinions.',
  },
  {
    title: 'Ask Our AI Chat Bot',
    description:
      'Get fast, reliable health information 24/7 from our intelligent chatbot. Ask about symptoms, treatments, or health tips anytime.',
  },
  {
    title: 'Get Vaccinated',
    description:
      'Locate vaccination centers, track appointments, and stay updated with your cervical health schedule through our platform.',
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20 px-6" id="features">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
        What You Can Do Here
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-teal-100 p-6 text-left hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-teal-700 mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}