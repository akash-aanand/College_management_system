import React from 'react';
import { mockHostelResidents } from '/src/data.js'; // <-- FIX: Renamed variable
import {
  Search,
  ChevronDown,
  Plus,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

/**
 * HostelResidents Component
 * Based on hostelmangment.jpg
 */
const HostelResidents = () => (
  <div className="space-y-6">
    {/* Header & Filters */}
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
      <h3 className="text-xl font-semibold text-gray-800">Hostel Residents</h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
          Filter by Department <ChevronDown className="w-4 h-4 ml-2" />
        </button>
        <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
          Sort by Year <ChevronDown className="w-4 h-4 ml-2" />
        </button>
        <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 text-sm">
          <Plus className="w-4 h-4 mr-2" />
          Add New Resident
        </button>
      </div>
    </div>
    
    {/* Search */}
    <div className="relative">
      <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search by name or roll number..."
        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-300 focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
      />
    </div>

    {/* Resident Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockHostelResidents.map((resident) => ( // <-- FIX: Renamed variable
        <div key={resident.id} className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform transform hover:-translate-y-1">
          <img 
            src={resident.img} 
            alt={resident.name} 
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100"
            onError={(e) => e.target.src = 'https://placehold.co/100x100/E2E8F0/4A5568?text=User'}
          />
          <h4 className="text-lg font-semibold text-gray-800">{resident.name}</h4>
          <p className="text-sm text-gray-500 mb-4">{resident.studentId}</p> {/* <-- FIX: Used studentId */}
          <div className="text-left space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Department:</span>
              <span className="font-medium text-gray-700">{resident.department}</span> {/* <-- FIX: Used department */}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Year:</span>
              <span className="font-medium text-gray-700">{resident.year}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Room:</span>
              <span className="font-medium text-gray-700">{resident.room}</span>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold mt-6 hover:bg-blue-600 transition-colors">
            View Details
          </button>
        </div>
      ))}
    </div>
    
    {/* Pagination */}
    <div className="flex justify-center items-center space-x-2 pt-4">
      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button className="w-8 h-8 rounded-lg bg-blue-600 text-white font-medium">1</button>
      <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">2</button>
      <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">3</button>
      <span className="text-gray-500">...</span>
      <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">10</button>
      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default HostelResidents;

