import React from 'react';

/**
 * BillCard Component
 * Based on messbill.png
 */
const BillCard = ({ bill }) => {
  let statusColor = 'text-gray-500';
  let borderColor = 'border-gray-300';
  let statusText = '';
  
  if (bill.status === 'Paid') {
    statusColor = 'text-green-600';
    borderColor = 'border-green-500';
    statusText = `Paid On: ${bill.paidOn}`;
  } else if (bill.status === 'Overdue') {
    statusColor = 'text-red-600';
    borderColor = 'border-red-500';
    statusText = `Due Date: ${bill.dueDate}`;
  } else { // Unpaid
    statusColor = 'text-yellow-600';
    borderColor = 'border-yellow-500';
    statusText = `Due Date: ${bill.dueDate}`;
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg border-l-4 ${borderColor} p-6`}>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        {/* Left Side */}
        <div className="flex-1 mb-4 sm:mb-0">
          <div className="flex justify-between items-baseline mb-2">
            <h4 className={`text-xl font-bold ${statusColor}`}>{bill.month}</h4>
            <span className={`text-sm font-bold ${statusColor}`}>{bill.status.toUpperCase()}</span>
          </div>
          <p className="text-lg font-semibold text-gray-800">{bill.name}</p>
          <p className="text-sm text-gray-500">ID: {bill.studentId}, Room: {bill.room}</p>
        </div>
        
        {/* Right Side */}
        <div className="flex-shrink-0 sm:ml-8 sm:text-right">
          <p className="text-sm text-gray-500">Amount</p>
          <p className="text-2xl font-bold text-gray-800 mb-2">₹{bill.amount}</p>
          <p className={`text-sm font-medium ${statusColor}`}>{statusText}</p>
        </div>
      </div>
      
      {/* Actions */}
      {bill.status !== 'Paid' && (
        <div className="flex gap-4 mt-6 pt-4 border-t border-gray-200">
          {bill.status === 'Overdue' && (
            <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50">
              Send Reminder
            </button>
          )}
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700">
            Mark as Paid
          </button>
        </div>
      )}
    </div>
  );
};

export default BillCard;

