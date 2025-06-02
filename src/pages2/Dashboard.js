import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useUser();
  const username = user?.email?.split('@')[0] || 'User';
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
  setUser(null);
  localStorage.removeItem('user');
  navigate('/');
};

  const navItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Resources', route: '/resources' },
    { label: 'Chatbot', route: '/chatbot' },
    { label: 'Check Symptoms', route: '/symptoms' },
    { label: 'Book Appointment', route: '/appointment' },
    { label: 'Online Chat', route: '/chat' },
    { label: 'Get Vaccinated', route: '/vaccination' },
    { label: 'Settings', route: '/settings' }
  ];

  const renderContent = () => {
    switch (location.pathname) {
      case '/dashboard':
        return (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-emerald-900">Welcome Back, {username}!</h1>
              <p className="text-gray-700 mt-1">Here’s what’s happening with your health.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">📅 Last Screening</h3>
                <p className="text-gray-700">Not logged</p>
              </div>
              <div className="bg-white rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">💉 HPV Vaccine</h3>
                <p className="text-gray-700">Pending 1st dose</p>
              </div>
              <div className="bg-white rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">🤖 AI Chatbot Use</h3>
                <p className="text-gray-700">Not used yet</p>
              </div>
            </div>
          </>
        );

      case '/resources':
        return (
          <div>
            <h1 className="text-2xl font-bold text-emerald-800 mb-4">Resources</h1>
            <p className="text-gray-700">Access helpful guides, articles, and videos for cervical health education.</p>
          </div>
        );

      case '/settings':
        return (
          <div>
            <h1 className="text-2xl font-bold text-emerald-800 mb-4">Settings</h1>
            <p className="text-gray-700">Manage your preferences and account information.</p>
          </div>
        );

      case '/chatbot':
        return (
          <div>
            <h1 className="text-2xl font-bold text-emerald-800 mb-4">Chatbot</h1>
            <p className="text-gray-700">AI assistant to help answer cervical health queries. (Coming soon)</p>
          </div>
        );

      default:
        return (
          <div>
            <h1 className="text-xl text-emerald-800 font-semibold">Page under construction</h1>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-green-100 flex flex-col">
      {/* Top Navbar */}
      <header className="w-full bg-emerald-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
          <div className="text-2xl font-bold">CerviCare</div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium">{username}</span>
          <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold">
            {username[0].toUpperCase()}
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="relative flex-1 flex transition-all duration-300 ease-in-out">
        {/* Sidebar */}
        <aside
          className={`fixed top-[64px] left-0 h-[calc(100%-64px)] bg-emerald-800 text-white transition-all duration-300 ease-in-out z-30 ${
            sidebarOpen ? 'w-64' : 'w-0'
          } overflow-hidden`}
        >
          {sidebarOpen && (
            <div className="flex flex-col justify-between h-full p-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.route}
                    onClick={() => navigate(item.route)}
                    className={`text-left px-4 py-2 rounded-lg font-medium transition ${
                      location.pathname === item.route
                        ? 'bg-emerald-300 text-emerald-900 font-bold'
                        : 'hover:bg-emerald-700 hover:text-white text-emerald-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div>
                <button
                  onClick={handleLogout}
                  className="text-left text-red-200 hover:text-red-300 font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main
          className={`transition-all duration-300 ease-in-out p-8 ml-0 w-full ${
            sidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          {renderContent()}
        </main>
      </div>
    </div>
  );
}