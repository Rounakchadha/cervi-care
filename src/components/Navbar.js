import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full py-4 px-6 bg-gradient-to-r from-green-800 via-emerald-900 to-green-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          className="text-xl font-bold text-white cursor-pointer"
          onClick={() => navigate('/')}
        >
          CerviCare
        </div>

        <div className="flex items-center justify-center gap-8 text-sm font-medium text-white">
          <button onClick={() => navigate('/')} className="hover:underline">Home</button>
          <button onClick={() => navigate('/about')} className="hover:underline">About Us</button>
          <button onClick={() => navigate('/faq')} className="hover:underline">FAQs</button>
        </div>

        <button
          onClick={() => navigate('/login')}
          className="border border-white text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-emerald-700 transition"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}