import React from 'react';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';
import AutoCarousel from '../components/AutoCarousel';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-emerald-200 to-green-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-900 mb-6 leading-tight">
          Stop Just Reading About Cervical Cancer. <br />
          <span className="text-emerald-700">Start Taking Action.</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          CerviCare is your space for awareness, education, and early detection.
        </p>
        <button
          onClick={() => navigate('/facts')}
          className="bg-emerald-800 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-emerald-900 transition"
        >
          Learn More
        </button>
      </section>

      {/* In JSX */}
<AutoCarousel />

      {/* FAQ Section */}
      <section className="px-6 py-20" id="faqs">
        <FAQAccordion />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}