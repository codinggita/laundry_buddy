import React from 'react'
import icon from '../../assets/forgotpassword.png';

const ResetPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div className="w-full max-w-sm sm:max-w-md bg-white p-6 rounded-lg shadow-lg">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <img src={icon} className="h-12 w-12" alt="icon" />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-center">Reset Password</h2>
      <p className="text-gray-600 text-sm sm:text-base text-center mb-6">
        Please enter your new password below.
      </p>

      {/* Form */}
      <form>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="newPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter new password"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm new password"
              required
            />
          </div>
        </div>

       

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  </div>
  )
}

export default ResetPassword
