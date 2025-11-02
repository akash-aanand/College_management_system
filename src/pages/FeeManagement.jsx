import React, { useState } from 'react';
import FeeCard from '../components/FeeCard.jsx';
import { mockFeeData } from '../data.js';
import { Plus } from 'lucide-react';

/**
 * FeeManagement Page Component
 * Based on administration_-_fee_cards.png
 */
const FeeManagement = () => {
  const [activeTab, setActiveTab] = useState('All Fees');
  const tabs = ['All Fees', 'Paid', 'Unpaid', 'Overdue'];

  const getFilteredData = () => {
    switch (activeTab) {
      case 'Paid':
        return mockFeeData.filter(item => item.status === 'Paid');
      case 'Unpaid':
        return mockFeeData.filter(item => item.status === 'Unpaid');
      case 'Overdue':
        return mockFeeData.filter(item => item.status === 'Overdue');
      case 'All Fees':
      default:
        return mockFeeData;
    }
  };

  const filteredData = getFilteredData();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Fee Management</h2>
          <p className="text-gray-500 mt-1">Monitor and manage student fee payments.</p>
        </div>
        <button className="flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700">
          <Plus size={20} className="mr-2" />
          Add New Fee Record
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg
              ${activeTab === tab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Fee Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((fee) => (
            <FeeCard key={fee.id} data={fee} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No fee records found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeeManagement;

