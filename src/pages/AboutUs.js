import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-emerald-100 to-green-100 text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6">About CerviCare</h1>
        <p className="text-lg text-gray-700 mb-8">
          CerviCare is a mission-driven platform built to raise awareness about cervical cancer. Our goal is to empower individuals with information, tools, and support for early detection, vaccination, and education. 
        </p>
        <p className="text-md text-gray-600 mb-4">
          We collaborate with doctors, public health professionals, and technologists to ensure that reliable, accurate, and helpful information is available to all—especially in underserved communities.
        </p>
        <p className="text-md text-gray-600">
          Together, we can build a future where cervical cancer is preventable, treatable, and understood.
        </p>
      </div>
    </div>
  );
}