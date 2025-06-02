import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-emerald-900 to-green-800 text-center py-8 px-4 text-sm text-white">
      <div className="mb-4 flex justify-center gap-6 font-medium">
        <a href="/terms" className="hover:underline">Terms & Conditions</a>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="#about" className="hover:underline">About Us</a>
      </div>

      <p className="mb-2 text-emerald-200">© 2025 CerviCare. All rights reserved.</p>

      <div className="flex justify-center gap-4 mt-4">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}