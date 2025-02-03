import React from "react";
import { Link } from "react-router-dom";
import { RiTShirt2Line } from "react-icons/ri";

const Registration = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        {/* Icon and Heading */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <RiTShirt2Line className="w-10 h-10 text-blue-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Create your account
          </h2>
          <p className="text-gray-600 text-center">Join our laundry service today</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="John Doe"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 000-0000"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Room Number */}
            <div>
              <label htmlFor="room" className="block text-sm font-medium text-gray-700">
                Room Number
              </label>
              <input
                type="text"
                id="room"
                placeholder="Room 101"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Building */}
            <div className="sm:col-span-2">
              <label htmlFor="building" className="block text-sm font-medium text-gray-700">
                Building
              </label>
              <input
                type="text"
                id="building"
                placeholder="Boys-Hostel"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create password"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm password"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
            Create Account
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm text-blue-500 hover:underline flex items-center justify-center">
            <span className="mr-1">&larr;</span> Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
