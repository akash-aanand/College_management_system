import React from 'react';
import { FileText } from 'lucide-react';

/**
 * PlaceholderPage Component
 * A generic page for modules that aren't fully built out
 */
const PlaceholderPage = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <div className="p-6 bg-white rounded-full shadow-md">
      <FileText className="w-16 h-16 text-blue-400" />
    </div>
    <h2 className="mt-6 text-2xl font-semibold text-gray-800">{title}</h2>
    <p className="mt-2 text-gray-500">This module is under construction.</p>
  </div>
);

export default PlaceholderPage;

