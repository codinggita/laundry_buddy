import React from 'react';
import { Package2, ThumbsDown, Clock, Package, MessageSquare, AlertTriangle } from 'lucide-react';
import Sidebar from '../Sidebar';


function Complaint() {
    const selectedType ='delay'

  return (
    <div className="md:flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="md:block w-80  bg-gray-50">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Submit Complaint</h1>
        <div className="bg-white p-5 rounded-lg mt-3 shadow mb-6 w-full ">
        <h2 className="text-lg font-semibold">Service Complaint</h2>
          <p className="text-sm text-gray-500 mb-4">We value your feedback and will address your concerns promptly</p>

          <div className="mt-8 space-y-6">
            {/* Order Number and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order Number</label>
                <div className="relative">
                  <Package2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Enter order number"
                    className="pl-10 w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Incident</label>
                <input
                  type="date"
                  defaultValue="2025-02-20"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Complaint Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type of Complaint</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  className={`flex flex-col items-center p-4 border rounded-lg ${
                    selectedType === 'service'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                >
                  <ThumbsDown className="h-6 w-6 text-gray-600 mb-2" />
                  <span className="text-sm">Service Quality</span>
                </button>
                <button
                  className={`flex flex-col items-center p-4 border rounded-lg ${
                    selectedType === 'delay'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                >
                  <Clock className="h-6 w-6 text-gray-600 mb-2" />
                  <span className="text-sm">Delay</span>
                </button>
                <button
                  className={`flex flex-col items-center p-4 border rounded-lg ${
                    selectedType === 'damaged'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                >
                  <Package className="h-6 w-6 text-gray-600 mb-2" />
                  <span className="text-sm">Damaged Items</span>
                </button>
                <button
                  className={`flex flex-col items-center p-4 border rounded-lg ${
                    selectedType === 'communication'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                >
                  <MessageSquare className="h-6 w-6 text-gray-600 mb-2" />
                  <span className="text-sm">Communication</span>
                </button>
              </div>
            </div>

      

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={4}
                placeholder="Please describe your complaint in detail..."
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                Your complaint will be reviewed by our team within 24 hours. We'll contact you via email with updates.
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
              Submit Complaint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complaint;
