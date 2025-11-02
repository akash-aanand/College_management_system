import React from 'react';

/**
 * StatusBadge Component
 * Used in tables for "Occupied", "Paid", "Overdue", etc.
 */
const StatusBadge = ({ status }) => {
  let colorClasses = '';
  switch (status.toLowerCase()) {
    case 'occupied':
    case 'paid':
    case 'checked-in':
      colorClasses = 'bg-green-100 text-green-700';
      break;
    case 'checked out':
    case 'overdue':
      colorClasses = 'bg-red-100 text-red-700';
      break;
    case 'unpaid':
      colorClasses = 'bg-yellow-100 text-yellow-700';
      break;
    default:
      colorClasses = 'bg-gray-100 text-gray-700';
  }
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses}`}>
      {status}
    </span>
  );
};

export default StatusBadge;

