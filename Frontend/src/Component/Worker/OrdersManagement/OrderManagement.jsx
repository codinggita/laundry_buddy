import React, { useState } from 'react';
import { CheckCircle, Bell, ArrowUpDown, Check,Download} from 'lucide-react';
import Navbar from '../Navbar/Navbar';


const completedOrders = [
    { orderId: "#ORD-001", bagNumber: "230", customer: "Mayur Waykar", itemsCount: 12, status: "completed", date: "2024-03-10" },
    { orderId: "#ORD-002", bagNumber: "BAG-102", customer: "Alice Smith", itemsCount: 8, status: "completed", date: "2024-03-08" },
    { orderId: "#ORD-003", bagNumber: "BAG-103", customer: "Mike Johnson", itemsCount: 12, status: "completed", date: "2024-03-09" },
  ];
function OrderManagement() {

    const[searchQuery,setSearchQuery]=useState("");

    // filter order according to bag number
    const filterOrder = completedOrders.filter(order =>
        order.bagNumber.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const pendingOrders = [
        { id: 'BAG-230', customer: 'Jane Smith', items: 12, status: 'pending', date: '03-Mar-2024' },
        { id: 'BAG-87', customer: 'Sarah Williams', items: 12, status: 'pending', date: '2024-03-09' },
        { id: 'BAG-94', customer: 'Sarah Williams', items: 12, status: 'pending', date: '2024-03-09' },
        { id: 'BAG-94', customer: 'Sarah Williams', items: 12, status: 'pending', date: '2024-03-09' },
        { id: 'BAG-94', customer: 'Sarah Williams', items: 12, status: 'pending', date: '2024-03-09' },
        { id: 'BAG-94', customer: 'Sarah Williams', items: 12, status: 'pending', date: '2024-03-09' },
        { id: 'BAG-94', customer: 'Sarah Williams', items: 12, status: 'pending', date: '2024-03-09' },
      ];
      
      
     


  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 ">
      <div className="max-w-7xl mx-auto pt-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Order Management</h1>
          <button className="flex items-center text-gray-600 bg-white border  border-gray-200 rounded-md px-3 py-1.5 whitespace-nowrap hover:bg-gray-50">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            <span>Newest First</span>
          </button>
        </div>

        {/* Pending Orders Section */}
        <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
  {/* Section Header */}
  <div className="p-4 md:p-6 border-b border-gray-100 ">
    <div className="flex items-center">
      <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
        <Download className="h-5 w-5 rounded-full text-yellow-400" />
      </div>
      <h2 className="text-lg font-semibold">Pending Orders</h2>
      <span className="ml-2 bg-gray-100 text-gray-600 text-sm px-2 py-0.5 rounded-md">
        {pendingOrders.length}
      </span>
    
    </div>
   
    <input
          type="text"
          placeholder="Search by Bag Number..."
          className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200 "
        />
   
  </div>

  {/* Table Header */}
  <div className="overflow-x-auto max-h-80">
  <table className="w-full">
    <thead className="sticky top-0 bg-white shadow">
      <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
        <th className="px-6 py-3 font-medium">Order ID</th>
        <th className="px-6 py-3 font-medium">Customer</th>
        <th className="px-6 py-3 font-medium">Number of Items</th>
        <th className="px-6 py-3 font-medium">Status</th>
        <th className="px-6 py-3 font-medium">Date</th>
        <th className="px-6 py-3 font-medium">Actions</th>
      </tr>
    </thead>
    <tbody>
      {pendingOrders.map((order) => (
        <tr key={order.id} className="border-b border-gray-100">
          <td className="px-6 py-4 text-blue-600 font-medium">{order.id}</td>
          <td className="px-6 py-4">{order.customer}</td>
          <td className="px-6 py-4">{order.items}</td>
          <td className="px-6 py-4">
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 font-bold py-1 rounded-full">
              {order.status}
            </span>
          </td>
          <td className="px-6 py-4 text-gray-500">{order.date}</td>
          <td className="px-6 py-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm flex items-center">
              <Check className="h-4 w-4 mr-1" />
              Complete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>


        {/* completed Orders Section */}
        <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
  {/* Section Header */}
  <div className="p-4 md:p-6 border-b border-gray-100">
    <div className="flex items-center">
        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
            </div>
      <h2 className="text-lg font-semibold">Completed Orders</h2>
      <span className="ml-2 bg-gray-100 text-gray-600 text-sm px-2 py-0.5 rounded-md">
        {filterOrder.length}
      </span>
    </div>
    <input
          type="number"
          placeholder="Search by Bag Number..."
          className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
  </div>

  {/* Table Header */}
  <div className="overflow-x-auto max-h-80">
  <table className="w-full">
    <thead className="sticky top-0 bg-white shadow">
      <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
        <th className="px-6 py-3 font-medium">Order ID</th>
        <th className="px-6 py-3 font-medium">Customer</th>
        <th className="px-6 py-3 font-medium">Number of Items</th>
        <th className="px-6 py-3 font-medium">Status</th>
        <th className="px-6 py-3 font-medium">Date</th>
        <th className="px-6 py-3 font-medium">Actions</th>
      </tr>
    </thead>
    <tbody>
      {filterOrder.map((order,index) => (
        <tr key={index} className="border-b border-gray-100">
          <td className="px-6 py-4 text-blue-600 font-medium">{order.orderId}</td>
          <td className="px-6 py-4">{order.customer}</td>
          <td className="px-6 py-4">{order.itemsCount}</td>
          <td className="px-6 py-4">
          <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                 {order.status}
              </span>
          </td>
          <td className="px-6 py-4 text-gray-500">{order.date}</td>
          <td className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm flex items-center">
                 <Bell className="h-4 w-4 mr-1" />
                 Notify
              </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>


  





      </div>
    </div>
    </>
  );
}

export default OrderManagement;


