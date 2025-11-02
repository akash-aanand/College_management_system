import React from 'react';
import {
  Search,
  Bell,
  Settings,
  ChevronDown,
} from 'lucide-react';

/**
 * Header Component
 * The top bar with search, notifications, etc.
 */
const Header = ({ title }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      {/* Page Title */}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      {/* Right-side controls */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search students, faculty, events..."
            className="w-64 pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-transparent focus:bg-white focus:border-gray-300 focus:outline-none transition-colors"
          />
        </div>

        {/* Icons */}
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
          <Settings className="w-6 h-6" />
        </button>

        {/* User Dropdown */}
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://placehold.co/100x100/E2E8F0/4A5568?text=A"
            alt="User Avatar"
          />
          <ChevronDown className="w-5 h-5 text-gray-400 ml-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;

