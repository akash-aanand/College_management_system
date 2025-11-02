import React from 'react';
import StatCard from '../components/StatCard.jsx';
import Table from '../components/Table.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { mockRecentActivity } from '../data.js';
// Note: This file does NOT need the DonutChart
import {
  Users,
  Bed,
  Utensils,
  AlertTriangle,
} from 'lucide-react';

/**
 * WardenDashboard Component
 * Based on wardendashboard.png
 */
const WardenDashboard = () => (
    
  <div className="space-y-8">
    {/* Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Occupancy" value="182/200" icon={Users} iconBgColor="bg-blue-500" />
      <StatCard title="Available Rooms" value="18" icon={Bed} iconBgColor="bg-green-500" />
      <StatCard title="Students in Mess" value="156" icon={Utensils} iconBgColor="bg-yellow-500" />
      <StatCard title="Urgent Notices" value="3" icon={AlertTriangle} iconBgColor="bg-red-500" />
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Hostel Occupancy (Mock Pie Chart) */}
      <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Hostel Occupancy</h3>
        <div className="flex flex-col items-center">
          {/* This is the simple mock SVG chart */}
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-blue-500"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="91, 100" // 91% occupancy
                strokeDashoffset="-25"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-800">91%</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Occupied</p>
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-sm">Occupied: 182</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-gray-200 mr-2"></span>
              <span className="text-sm">Available: 18</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Today's Meal Counts (Mock Bar Chart) */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Meal Counts</h3>
        <div className="flex justify-around items-end h-64 space-x-4">
          <div className="flex flex-col items-center">
            <div className="w-16 bg-blue-200 rounded-t-lg" style={{ height: '50%' }}></div>
            <p className="text-sm text-gray-500 mt-2">Breakfast</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 bg-blue-400 rounded-t-lg" style={{ height: '80%' }}></div>
            <p className="text-sm text-gray-500 mt-2">Lunch</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: '65%' }}></div>
            <p className="text-sm text-gray-500 mt-2">Dinner</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Recent Student Activity Table */}
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Student Activity</h3>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View All</button>
      </div>
      <Table headers={['Student Name', 'Room No.', 'Date', 'Status']}>
        {mockRecentActivity.map((activity) => (
          <tr key={activity.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.room}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <StatusBadge status={activity.status} />
            </td>
          </tr>
        ))}
      </Table>
    </div>
  </div>
);

export default WardenDashboard;


