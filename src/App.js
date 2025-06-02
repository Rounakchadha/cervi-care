// src/App.js
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import FeatureTour from './pages/FeatureTour';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import FactsPage from './pages/FactsPage';
import AboutUs from './pages/AboutUs';
import FAQPage from './pages/FAQPage';
import Dashboard from './pages2/Dashboard';

import { UserProvider } from './context/UserContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppLayout = () => {
  const location = useLocation();

  // Hide Navbar on these routes
  const hideNavbar = [
    '/login',
    '/signup',
    '/dashboard',
    '/resources',
    '/chatbot',
    '/settings',
    '/symptoms',
    '/appointment',
    '/chat',
    '/vaccination',
  ].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/tour" element={<FeatureTour />} />
        <Route path="/facts" element={<FactsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* Dashboard routes with internal views */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Dashboard />} />
        <Route path="/chatbot" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
        <Route path="/symptoms" element={<Dashboard />} />
        <Route path="/appointment" element={<Dashboard />} />
        <Route path="/chat" element={<Dashboard />} />
        <Route path="/vaccination" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default function App() {
  return (
    <UserProvider>
      <Router>
        <AppLayout />
      </Router>
    </UserProvider>
  );
}
