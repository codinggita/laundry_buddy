import React from 'react';
import { Link } from "react-router-dom";

const RoleSelector = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-softBlue h-screen overflow-y-auto">
        {/* Heading */}
        <div className="flex flex-col items-center pt-20 px-4">
          <h1 className="font-bold text-3xl sm:text-5xl text-center">
            Welcome to LaundryHub
          </h1>
          <h2
            className="mt-5 text-lg sm:text-xl text-center"
            style={{ color: '#6B7280' }}
          >
            Select how you'd like to continue
          </h2>
        </div>

        {/* Role Selector */}
        <div className="flex flex-wrap justify-center gap-6 mt-14 px-4 pb-10">
            {/* User Card */}
            <div className="bg-green-100 rounded-lg shadow-md p-6 text-center h-auto w-full sm:w-[329px]">
            <div className="text-green-500 text-3xl mb-4">👤</div>
            <h2 className="text-xl font-semibold mb-2">Continue as User</h2>
            <p className="text-gray-600 mb-4">
              Place orders, track your laundry, and manage your account
            </p>
            
             <Link  className="text-green-500 font-semibold hover:underline" to="/login">
             
            
              Get Started →
              </Link>
            
          </div>
          {/* Worker Card */}
          <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center h-auto w-full sm:w-[329px]">
            <div className="text-blue-500 text-3xl mb-4">📦</div>
            <h2 className="text-xl font-semibold mb-2">Continue as Worker</h2>
            <p className="text-gray-600 mb-4">
              Access your work dashboard, manage orders, and track your tasks
            </p>
          <Link 
              className="text-blue-500 font-semibold hover:underline"
            to='/login'>
              Get Started →
              </Link>
          </div>

          {/* Admin Card */}
          <div className="bg-purple-100 rounded-lg shadow-md p-6 text-center h-auto w-full sm:w-[329px]">
            <div className="text-purple-500 text-3xl mb-4">🛡️</div>
            <h2 className="text-xl font-semibold mb-2">Continue as Admin</h2>
            <p className="text-gray-600 mb-4">
              Manage system settings, users, and monitor overall performance
            </p>
            <a
              href="#"
              className="text-purple-500 font-semibold hover:underline"
            >
              Get Started →
            </a>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default RoleSelector;
