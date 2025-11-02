import React from 'react';
import navConfig from '../navConfig';
import { Home, LogOut } from 'lucide-react';

/**
 * Sidebar Component
 * The main navigation bar on the left
 */
const Sidebar = ({ userRole, activeModule, onNav, onLogout }) => {
  const user = {
    administrator: { name: 'Alex Johnson', role: 'Administrator' },
    warden: { name: 'Dr. Emily Carter', role: 'Hostel Warden' },
    student: { name: 'Priya Sharma', role: 'Student' },
    faculty: { name: 'Dr. Rohan Verma', role: 'Faculty' },
  }[userRole];

  const navItems = navConfig[userRole] || [];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Home className="w-6 h-6 text-white" />
        </div>
        <h1 className="ml-3 text-xl font-bold text-gray-800">EduCampus</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`w-full flex items-center py-3 px-4 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 rounded-full"
            src={`https://placehold.co/100x100/E2E8F0/4A5568?text=${user.name.charAt(0)}`}
            alt="User Avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

