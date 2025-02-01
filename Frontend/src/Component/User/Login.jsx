import React from "react";
import { Link } from "react-router-dom";
import { RiTShirt2Line } from "react-icons/ri";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <RiTShirt2Line className="w-8 h-8 object-contain text-blue-700" />
          </div>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base">
          Sign in to your laundry account
        </p>

        {/* Form */}
        <form className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
            Sign in
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 font-medium hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/registration"
              className="text-blue-500 font-medium hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
