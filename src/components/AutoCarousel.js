import React, { useState, useEffect } from 'react';

const cards = [
  { title: 'Discover Top Doctors', description: 'Find specialists near you for early screening & care.' },
  { title: 'AI Symptom Chatbot', description: 'Talk to our AI to get basic symptom awareness.' },
  { title: 'Get Vaccinated', description: 'Learn where and how to get the HPV vaccine.' },
  { title: 'Community Support', description: 'Connect with survivors & support groups near you.' },
  { title: 'Educational Webinars', description: 'Stay updated with the latest prevention methods.' },
  { title: 'Free Screening Drives', description: 'Locate free testing events in your locality.' },
  { title: 'Symptom Checklist', description: 'Track symptoms for early detection and doctor visits.' },
  { title: 'Ask the Expert', description: 'Get answers from certified gynecologists and specialists.' },
];

export default function AutoCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;
  const maxStartIndex = cards.length - cardsPerPage;

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1 > maxStartIndex ? 0 : prev + 1));
    }, 5000); // ⏱️ Back to 5 seconds
    return () => clearInterval(timer);
  }, [maxStartIndex]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-[3000ms] ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / cardsPerPage)}%)` }}
        >
          {cards.map((card, idx) => (
            <div key={idx} className="min-w-[33.3333%] px-6 py-6">
              <div className="bg-white rounded-xl p-8 h-full text-center border border-emerald-300">
                <h3 className="text-2xl font-bold text-emerald-800">{card.title}</h3>
                <p className="mt-3 text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxStartIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full ${
              startIndex === i ? 'bg-emerald-800' : 'bg-emerald-300'
            }`}
            onClick={() => setStartIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}