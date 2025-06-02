import React from 'react';
import { Link } from 'react-router-dom';
import awarenessImage from '../assets/awareness.png'; // Make sure to place your image here

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-xl text-teal-700 font-medium mb-2">Welcome to</h2>
      <h1 className="text-3xl font-bold text-teal-800 mb-6">cervi care aware</h1>

      <img
        src={awarenessImage}
        alt="Cervical Cancer Awareness"
        className="w-72 h-auto mb-6"
      />

      <p className="text-teal-700 text-sm mb-10 leading-relaxed">
        JANUARY IS <span className="font-semibold">CERVICAL CANCER</span><br />
        AWARENESS MONTH
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link to="/signup">
          <button className="bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-lg font-medium w-full">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="border border-teal-700 text-teal-700 hover:bg-teal-50 py-2 rounded-lg font-medium w-full">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}