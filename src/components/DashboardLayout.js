// components/DashboardLayout.js
import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
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

  const username = user?.email?.split('@')[0] || 'User';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-green-100 flex flex-col">
      {/* Top Navbar */}
      <header className="w-full bg-emerald-900 text-white px-6 py-4 flex justify-between items-center z-10">
        <div className="text-2xl font-bold">CerviCare</div>
        <div className="flex items-center gap-4">
          <span className="font-medium">{username}</span>
          <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold">
            {username[0].toUpperCase()}
          </div>
        </div>
      </header>

      {/* Layout Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-emerald-800 text-white flex flex-col justify-between p-6 pt-10">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`text-left flex items-center px-4 py-2 rounded-lg font-medium transition ${
                  location.pathname === item.route
                    ? 'bg-emerald-300 text-emerald-900 font-bold'
                    : 'hover:bg-emerald-700 hover:text-white text-emerald-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={handleLogout}
              className="text-left text-red-200 hover:text-red-300 font-medium"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Page content */}
        <main className="flex-1 p-8 mt-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}