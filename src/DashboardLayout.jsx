import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import navConfig from './navConfig';

// Import all the pages
import AdminDashboard from './pages/AdminDashboard';
import WardenDashboard from './pages/WardenDashboard'; // We created this
import HostelRoomAllocation from './pages/HostelRoomAllocation';
import HostelResidents from './pages/HostelResidents';
import MessManagement from './pages/MessManagement';
import LibraryManagement from './pages/LibraryManagement';
import EventManagement from './pages/EventManagement';
import FeeManagement from './pages/FeeManagement'; // <-- NEWLY ADDED
import PlaceholderPage from './pages/PlaceholderPage';

/**
 * DashboardLayout Component
 * This component wraps the main application layout (Sidebar, Header, Content)
 * for a logged-in user.
 */
const DashboardLayout = ({ userRole, onLogout }) => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const handleNav = (moduleId) => {
    setActiveModule(moduleId);
  };

  // Function to get the correct title for the header
  const getHeaderTitle = () => {
    const navItems = navConfig[userRole] || [];
    const activeItem = navItems.find(item => item.id === activeModule);
    return activeItem ? activeItem.name : 'Dashboard';
  };

  // Function to render the correct page content
  const renderPageContent = () => {
    switch (activeModule) {
      // Dashboards
      case 'dashboard':
        if (userRole === 'administrator') return <AdminDashboard />;
        if (userRole === 'warden') return <WardenDashboard />;
        return <PlaceholderPage title="My Dashboard" />; // Simple dash for others
      
      // Admin/Warden Pages
      case 'hostel-allocation':
      case 'room-management': // from warden
        return <HostelRoomAllocation />;
      
      case 'hostel-residents':
      case 'student-records': // from warden
        return <HostelResidents />;

      // New Admin Page
      case 'fee-management': // <-- NEWLY ADDED
        return <FeeManagement />;

      // Shared Pages
      case 'mess-management':
      case 'mess-bill': // from student
      case 'mess-menu': // from warden
        return <MessManagement />;
      
      case 'library-management':
      case 'library': // from student/faculty
        return <LibraryManagement />;
      
      case 'event-management':
      case 'events': // from student/faculty
        return <EventManagement />;

      // Fallback
      default:
        return <PlaceholderPage title={getHeaderTitle()} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-inter">
      {/* Sidebar */}
      <Sidebar
        userRole={userRole}
        activeModule={activeModule}
        onNav={handleNav}
        onLogout={onLogout}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title={getHeaderTitle()} />
        
        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-8">
          {renderPageContent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

