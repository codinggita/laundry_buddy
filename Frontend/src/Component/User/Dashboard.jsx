import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { RiTShirt2Line } from "react-icons/ri";


const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <div className="min-h-screen bg-gray-100 p-6 ml-0 md:ml-64">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Thursday, January 16, 2025</p>
        </header>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card
            title="Pending Orders"
            value="3"
            icon={<i><RiTShirt2Line /></i>}
            bgColor="bg-blue-100"
            textColor="text-blue-800"
          />
          <Card
            title="Total Orders"
            value="3"
            icon={<i><RiTShirt2Line /></i>}
            bgColor="bg-purple-100"
            textColor="text-purple-800"
          />
          <Card
            title="Current Status"
            value="Active"
            icon={<i className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></i>}
            bgColor="bg-green-100"
            textColor="text-green-800"
          />
        </div>
        <section>
          <h2 className="text-xl font-semibold mb-2">Recent Order</h2>
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="font-bold">Order #</h3>
              <p>1/10/2025</p>
            </div>
            <span className="text-yellow-500 font-bold">Pending</span>
          </div>
        </section>
        <section className="grid grid-cols-4 gap-4 mt-6">
          <Card
            title="Submit Order"
            value="Submit new laundry items for processing"
            icon={<i><RiTShirt2Line /></i>}
            bgColor="bg-white"
            textColor="text-gray-800"
          />
          <Card
            title="Order History"
            value="View and track your past orders"
            icon={<i className="fas fa-history"></i>}
            bgColor="bg-white"
            textColor="text-gray-800"
          />
          <Card
            title="Daily Rush"
            value="Check peak hours and plan accordingly"
            icon={<i className="fas fa-chart-bar"></i>}
            bgColor="bg-white"
            textColor="text-gray-800"
          />
          <Card
            title="Profile"
            value="Manage your account settings"
            icon={<i className="fas fa-user"></i>}
            bgColor="bg-white"
            textColor="text-gray-800"
          />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
