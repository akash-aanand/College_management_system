import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import DashboardLayout from './DashboardLayout';

/**
 * MAIN APP COMPONENT
 *
 * This component now only manages the top-level state:
 * 1. Which page is active ('login' or 'dashboard')
 * 2. What the current user's role is.
 *
 * It renders *either* the LoginScreen or the main DashboardLayout.
 */
function App() {
  const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'dashboard'
  const [userRole, setUserRole] = useState(null); // 'administrator', 'warden', 'student', 'faculty'

  const handleLogin = (role) => {
    setUserRole(role);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('login');
  };

  // Your screenshot shows an App.css file.
  // We are using Tailwind, so you can safely delete src/App.css.
  // We also don't need the logo.svg, so you can delete that too.

  if (currentPage === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <DashboardLayout 
      userRole={userRole} 
      onLogout={handleLogout} 
    />
  );
}

export default App;

