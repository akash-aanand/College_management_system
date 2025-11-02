import React from 'react';
import StatCard from '/src/components/StatCard.jsx';
import Table from '/src/components/Table.jsx';
import StatusBadge from '/src/components/StatusBadge.jsx';
import { mockRoomAllocation } from '/src/data.js'; // <-- FIX: Changed to root-relative paths
import {
  Plus,
  User,
  Bed,
  Settings,
  Home,
} from 'lucide-react';

/**
 * HostelRoomAllocation Component
 * Based on main_dashboard_layout_completed.png
 */
const HostelRoomAllocation = () => (
  <div className="space-y-8">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Room Allocation</h3>
        <p className="text-sm text-gray-500">Manage student room allocations.</p>
      </div>
      <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
        <Plus className="w-5 h-5 mr-2" />
        Add New Student
      </button>
    </div>

    {/* Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Occupied" value="485" icon={User} iconBgColor="bg-blue-100" />
      <StatCard title="Available" value="35" icon={Bed} iconBgColor="bg-green-100" />
      <StatCard title="Maintenance" value="8" icon={Settings} iconBgColor="bg-red-100" />
      <StatCard title="Total Rooms" value="528" icon={Home} iconBgColor="bg-gray-100" />
    </div>

    {/* Room Allocation Table */}
    <Table headers={['Room No.', 'Hostel Block', 'Check-in Date', 'Status', 'Action']}>
      {mockRoomAllocation.map((room) => ( 
        <tr key={room.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{room.roomNo}</td> 
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.block}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.checkIn}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm">
            <StatusBadge status={room.status} />
          </td>
          <td className="px-6 py-4 whitespace-nowFrap text-sm font-medium">
            <button className="text-blue-600 hover:text-blue-800">Edit</button>
          </td>
        </tr>
      ))}
    </Table>
  </div>
);

export default HostelRoomAllocation;

