import React from 'react';

export default function Resources() {
  const resources = [
    {
      title: 'Understanding Cervical Cancer',
      description: 'Learn the causes, symptoms, and stages of cervical cancer.',
      link: 'https://www.cancer.org/cancer/cervical-cancer/about/what-is-cervical-cancer.html'
    },
    {
      title: 'HPV and Vaccination',
      description: 'Why HPV vaccination is important and where to get it.',
      link: 'https://www.cdc.gov/hpv/parents/vaccine.html'
    },
    {
      title: 'Routine Screening Guidelines',
      description: 'Pap tests and HPV tests: how often and when?',
      link: 'https://www.acog.org/womens-health/faqs/cervical-cancer-screening'
    },
    {
      title: 'Support Groups and Forums',
      description: 'Connect with others who understand your journey.',
      link: 'https://csn.cancer.org/forum/189'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-green-100 px-8 py-12">
      <h1 className="text-4xl font-bold text-emerald-900 mb-8">Cervical Health Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {resources.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 shadow hover:shadow-xl transform hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}