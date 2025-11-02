import React from 'react';

/**
 * StatCard Component
 * Used across all dashboards (Hostel, Mess, Library, etc.)
 */
const StatCard = ({ title, value, icon, iconBgColor, trend }) => {
  const IconComponent = icon;
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between transition-transform transform hover:-translate-y-1">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        {trend && (
          <p className={`text-xs mt-1 ${trend.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
            {trend}
          </p>
        )}
      </div>
      {IconComponent && (
         <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBgColor || 'bg-blue-100'}`}>
          <IconComponent className={`w-6 h-6 ${iconBgColor.includes('100') ? 'text-blue-600' : 'text-white'}`} />
        </div>
      )}
    </div>
  );
};

export default StatCard;

