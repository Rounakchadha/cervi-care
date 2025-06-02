import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-2xl font-bold text-teal-800 mb-4">Reset Your Password</h1>
      <p className="text-gray-600 mb-6">Enter your email and we'll send you a link to reset it.</p>

      <form className="w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-purple-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 font-semibold">
          Send Reset Link
        </button>
      </form>

      <Link to="/login" className="mt-4 text-teal-700 hover:underline text-sm">
        Back to Login
      </Link>
    </div>
  );
}