import React from 'react';

/**
 * Reusable FeeCard Component
 * Based on administration_-_fee_cards.png
 */
const FeeCard = ({ data }) => {
  const { name, studentId, avatarUrl, status, amount, due, paidOn } = data;

  let borderColor = 'border-green-400';
  let statusColor = 'text-green-600';
  let statusBg = 'bg-green-100';

  if (status === 'Unpaid') {
    borderColor = 'border-red-400';
    statusColor = 'text-red-600';
    statusBg = 'bg-red-100';
  } else if (status === 'Overdue') {
    borderColor = 'border-yellow-500';
    statusColor = 'text-yellow-700';
    statusBg = 'bg-yellow-100';
  }

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${borderColor} relative`}>
      {/* Status Badge */}
      <span 
        className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${statusBg} ${statusColor}`}
      >
        {status}
      </span>

      {/* Student Info */}
      <div className="flex items-center mb-4">
        <img
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/E2E8F0/4A5568?text=${name.charAt(0)}`; }}
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{studentId}</p>
        </div>
      </div>

      {/* Fee Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Amount:</span>
          <span className="font-medium text-gray-800">₹{amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Due:</span>
          <span className={`font-medium ${status === 'Overdue' ? 'text-red-600' : 'text-gray-800'}`}>
            {due}
          </span>
        </div>
        {paidOn && (
          <div className="flex justify-between">
            <span className="text-gray-500">Paid:</span>
            <span className="font-medium text-green-600">{paidOn}</span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-6">
        {status === 'Paid' && (
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700">
            View Details
          </button>
        )}
        {status === 'Unpaid' && (
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700">
            Send Reminder
          </button>
        )}
        {status === 'Overdue' && (
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700">
            Record Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default FeeCard;

