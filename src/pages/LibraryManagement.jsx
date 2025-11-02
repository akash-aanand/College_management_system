import React from 'react';
import StatCard from '../components/StatCard';
import Table from '../components/Table';
import { mockOverdueBooks } from '../data';
import {
  Library,
  CheckCircle,
  BookOpen,
  CreditCard
} from 'lucide-react';

/**
 * LibraryManagement Component
 * Based on library_dashboard.png
 */
const LibraryManagement = () => (
  <div className="space-y-8">
    {/* Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Books" value="15,234" icon={Library} iconBgColor="bg-blue-100" />
      <StatCard title="Available Books" value="12,890" icon={CheckCircle} iconBgColor="bg-green-100" />
      <StatCard title="Books Issued" value="2,344" icon={BookOpen} iconBgColor="bg-yellow-100" />
      <StatCard title="Overdue Fines" value="$582.50" icon={CreditCard} iconBgColor="bg-red-100" />
    </div>
    
    {/* Action Buttons */}
    <div className="flex gap-4">
      <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 shadow-md">
        Issue a Book
      </button>
      <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-50">
        Return a Book
      </button>
      <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-50">
        Add New Book
      </button>
    </div>
    
    {/* Overdue Books Table */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Overdue Books</h3>
      <Table headers={['Book Title', 'Borrower Name', 'Due Date', 'Fine Amount']}>
        {mockOverdueBooks.map((book) => (
          <tr key={book.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.borrower}</td>
            <td className="px-6 py-4 whitespace-Mrap text-sm text-red-600 font-medium">{book.due}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.fine}</td>
          </tr>
        ))}
      </Table>
    </div>
  </div>
);

export default LibraryManagement;

