import React from 'react';
import StatCard from '../components/StatCard';
import { mockEvents } from '../data';
import {
  Plus,
  CreditCard,
  Users,
  Calendar,
  Search,
  ChevronDown
} from 'lucide-react';

/**
 * EventManagement Component
 * Based on event_management_dashboard_2.jpg
 */
const EventManagement = () => (
  <div className="space-y-8">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Events Dashboard</h3>
        <p className="text-sm text-gray-500">Manage and track all college events from here.</p>
      </div>
      <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 shadow-md">
        <Plus className="w-5 h-5 mr-2" />
        Host New Event
      </button>
    </div>
    
    {/* Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard title="Total Contributions" value="$15,450" icon={CreditCard} iconBgColor="bg-green-100" trend="+5.2%" />
      <StatCard title="Total Participants" value="1,230" icon={Users} iconBgColor="bg-blue-100" trend="+12%" />
      <StatCard title="Upcoming Events" value="4" icon={Calendar} iconBgColor="bg-yellow-100" trend="+2 this week" />
    </div>

    {/* Filters */}
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="relative flex-1">
        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search for an event..."
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-300 focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
        />
      </div>
      <div className="flex gap-2">
        <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
          Date Range <ChevronDown className="w-4 h-4 ml-2" />
        </button>
        <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
          Event Type <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
    
    {/* Event Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEvents.map((event) => (
        <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
          <img 
            src={event.img} 
            alt={event.title} 
            className="w-full h-48 object-cover"
            onError={(e) => e.target.src = 'https://placehold.co/600x400/E2E8F0/4A5568?text=Event'}
          />
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{event.title}</h4>
            <p className="text-sm text-gray-500 mb-4">{event.date}</p>
            <div className="flex justify-between text-sm mb-6">
              <div>
                <p className="text-gray-500">Registered</p>
                <p className="font-bold text-gray-800">{event.registered}</p>
              </div>
              <div>
                <p className="text-gray-500">Raised</p>
                <p className="font-bold text-gray-800">{event.raised}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 text-sm">
                Manage
              </button>
              <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EventManagement;

