import React from 'react';
import FeatureCard from '../components/FeatureCards';
import doctorImg from '../assets/doctor.png';
import chatbotImg from '../assets/chatbot.png';
import vaccineImg from '../assets/vaccine.png';

export default function FeatureTour() {
  const features = [
    {
      image: doctorImg,
      title: 'Discover Top Doctors',
      description:
        'Seamlessly connect you with a wide range of medical professionals. Whether you need a check-up, consultation, or second opinion — we help you find the right doctor.',
    },
    {
      image: chatbotImg,
      title: 'Ask Our AI Chat Bot',
      description:
        'Get quick, reliable answers to your health queries. Available 24/7 to offer guidance, insights, and reminders — anytime, anywhere.',
    },
    {
      image: vaccineImg,
      title: 'Get Vaccinated',
      description:
        'Find nearby vaccination centers, book appointments, and track your vaccine history. Stay safe and protected with timely reminders.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="text-center mt-8 text-purple-600 font-medium cursor-pointer hover:underline">
        Skip Tour
      </div>
    </div>
  );
}