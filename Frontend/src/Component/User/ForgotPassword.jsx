import React, { useState } from 'react';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send an email to the server
    console.log('Email:', email);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l-2-2m4 2l2 2m-2 2v1a4 4 0 004 4h8m-4 4h8a2 2 0 002-2v-2" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-4">Reset your password</h2>
      <p className="text-gray-600 mb-6">
        Enter your email address and we'll send you a link to reset your password
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.2 0l7.89-5.26M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8m-2 0H5" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;