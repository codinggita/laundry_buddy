import React from 'react';
import Navbar from '../Navbar/Navbar';
import {
  ClipboardList,
  CheckCircle,
  Clock,
  TrendingUp,
  Plus,
  FileText,
  RefreshCw,
  Settings,
  Send,
  ChevronRight,
  Package
} from 'lucide-react';

function WorkerDashbaord() {
  return (
    <>
      <div >

        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-50 pt-12">
        {/* Main Content */}
        <main className="p-6 max-w-7xl mx-auto">
          {/* Send Report Button */}
          <div className="flex justify-end mb-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 sm:px-4 sm:py-2 rounded-md flex items-center justify-center text-sm sm:text-base w-32 sm:w-auto">
              <Send className="h-4 w-4 mr-2" />
              <span className="ml-1">Send Report</span>
            </button>
          </div>




          {/* Greeting Card */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex-1 sm:mb-0">
              <h1 className="text-2xl font-bold text-gray-800">Good Afternoon</h1>
              <p className="text-gray-600 flex items-center mt-1">
                <ClipboardList className="h-4 w-4 mr-2" />
                Tuesday, January 7, 2025
              </p>
            </div>
            {/* <div className="text-right flex-1 sm:flex sm:flex-col sm:items-end">
              <p className="font-medium text-gray-800">John Worker</p>
              <p className="text-gray-600 text-sm">Floor Manager</p>
            </div> */}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Orders */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 mb-2">Total Orders</p>
             <Package className="h-5 w-5 text-blue-500" />
              </div>

              <p className="text-4xl font-bold ">4</p>
            </div>

            {/* Completed Orders */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 mb-2">Completed Orders</p>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-4xl font-bold">2</p>
            </div>

            {/* Pending Orders */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 mb-2">Pending Orders</p>
                <Clock className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-4xl font-bold">2</p>
            </div>

            {/* Completion Rate */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 mb-2">Completion Rate</p>
                <TrendingUp className="h-5 w-5 text-purple-500" />
              </div>
              <p className="text-4xl font-bold">
                50 <span className="text-gray-400 text-2xl">%</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg flex flex-col items-center justify-center">
              <Plus className="h-6 w-6 mb-2" />
              <span>New Order</span>
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg flex flex-col items-center justify-center">
              <FileText className="h-6 w-6 mb-2" />
              <span>Generate Report</span>
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg flex flex-col items-center justify-center">
              <RefreshCw className="h-6 w-6 mb-2" />
              <span>Sync Stock</span>
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white p-4 rounded-lg flex flex-col items-center justify-center">
              <Settings className="h-6 w-6 mb-2" />
              <span>Settings</span>
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-medium">Recent Activity</h2>
              </div>
              <a href="#" className="text-blue-500 text-sm flex items-center">
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="space-y-4">
              {/* Activity Item 1 */}
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium">Order Completed</h3>
                <p className="text-gray-600">Order #ORD-001 was marked as completed</p>
                <p className="text-gray-400 text-sm mt-1">5 minutes ago</p>
              </div>

              {/* Activity Item 2 */}
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium">Stock Updated</h3>
                <p className="text-gray-600">Premium Detergent stock reduced by 50kg</p>
                <p className="text-gray-400 text-sm mt-1">15 minutes ago</p>
              </div>

              {/* Activity Item 3 */}
              <div>
                <h3 className="font-medium">New Order</h3>
                <p className="text-gray-600">Order #ORD-002 was created</p>
                <p className="text-gray-400 text-sm mt-1">1 hour ago</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default WorkerDashbaord;
