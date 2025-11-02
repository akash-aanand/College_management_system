import React from 'react';
import StatCard from '../components/StatCard';
import BillCard from '../components/BillCard';
import { mockMessBills } from '../data';
import {
  Plus,
  Utensils,
  CreditCard,
  AlertTriangle,
} from 'lucide-react';

/**
 * MessManagement Component
 * Based on screen.png and messbill.png
 */
const MessManagement = () => (
  <div className="space-y-8">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Mess Management Dashboard</h3>
        <p className="text-sm text-gray-500">Overview of daily meal schedules, billing, and inventory.</p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 text-sm">
          <Plus className="w-4 h-4 mr-2" />
          Add New Menu
        </button>
        <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 text-sm shadow-md">
          Generate Report
        </button>
      </div>
    </div>
    
    {/* Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard title="Today's Meal Consumption" value="852" icon={Utensils} iconBgColor="bg-green-100" trend="+5.2% from yesterday" />
      <StatCard title="Total Bills Unpaid" value="₹ 1,25,400" icon={CreditCard} iconBgColor="bg-red-100" trend="+2.1% from last month" />
      <StatCard title="Low Inventory Alerts" value="3 Items" icon={AlertTriangle} iconBgColor="bg-yellow-100" />
    </div>

    {/* Weekly Schedule & Quick Actions */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800">Weekly Meal Schedule</h4>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Edit Schedule</button>
        </div>
        {/* Simple mock schedule */}
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-700">Breakfast</p>
              <p className="text-sm text-gray-500">Aloo Paratha, Curd, Pickle</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Lunch</p>
              <p className="text-sm text-gray-500">Rajma, Rice, Roti, Salad</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Dinner</p>
              <p className="text-sm text-gray-500">Paneer Butter Masala, Roti, Rice</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h4>
        <div className="space-y-3">
          <button className="w-full text-left p-3 bg-blue-50 rounded-lg text-blue-700 font-medium hover:bg-blue-100">Update Today's Menu</button>
          <button className="w-full text-left p-3 bg-blue-50 rounded-lg text-blue-700 font-medium hover:bg-blue-100">Send Payment Reminders</button>
          <button className="w-full text-left p-3 bg-blue-50 rounded-lg text-blue-700 font-medium hover:bg-blue-100">View Inventory</button>
          <button className="w-full text-left p-3 bg-blue-50 rounded-lg text-blue-700 font-medium hover:bg-blue-100">Check Feedback</button>
        </div>
      </div>
    </div>
    
    {/* Bill Management */}
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Mess Bill Management</h3>
      <div className="space-y-4">
        {mockMessBills.map((bill) => (
          <BillCard key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  </div>
);

export default MessManagement;

