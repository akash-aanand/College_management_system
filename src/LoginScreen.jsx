import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  UserCog,
} from 'lucide-react';

/**
 * LoginScreen Component
 * Based on login_page.jpg
 */
const LoginScreen = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('student');
  
  const roles = [
    { id: 'student', name: 'Student', icon: GraduationCap },
    { id: 'faculty', name: 'Faculty', icon: Briefcase },
    { id: 'administrator', name: 'Administrator', icon: UserCog },
  ];

  const handleLoginClick = () => {
    // In a real app, you'd add authentication here
    // We'll also add a 'warden' role for demo purposes
    const roleToLogin = selectedRole === 'administrator' ? 'administrator' : (selectedRole === 'faculty' ? 'faculty' : 'student');
    
    // This is a demo trick to let you log in as 'warden'
    if (selectedRole === 'faculty') {
      onLogin('warden'); 
    } else {
      onLogin(roleToLogin);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-4 font-inter">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <GraduationCap className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">College Name</h2>
        <p className="text-gray-500 mb-8">Select your role to begin</p>

        <div className="space-y-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`w-full flex items-center p-4 rounded-lg border-2 transition-all ${
                selectedRole === role.id
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <role.icon className={`w-6 h-6 mr-4 ${selectedRole === role.id ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className="text-lg font-medium text-gray-700">{role.name}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleLoginClick}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold mt-8 hover:bg-blue-700 transition-colors shadow-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;

