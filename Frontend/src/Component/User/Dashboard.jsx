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

// import { useState } from 'react';
// import { 
//   ClipboardDocumentIcon,
//   ClockIcon,
//   ChartBarIcon,
//   UserCircleIcon,
//   PlusCircleIcon
// } from '@heroicons/react/24/outline';

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState('Submit Order');

//   const navigation = [
//     { name: 'Submit Order', icon: PlusCircleIcon },
//     { name: 'Order History', icon: ClipboardDocumentIcon },
//     { name: 'Daily Rush', icon: ChartBarIcon },
//     { name: 'Profile', icon: UserCircleIcon },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-white border-r border-gray-200 p-4">
//         <h1 className="text-2xl font-bold text-gray-800 mb-8">Laundry</h1>
//         <nav className="space-y-2">
//           {navigation.map((item) => (
//             <button
//               key={item.name}
//               onClick={() => setActiveTab(item.name)}
//               className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
//                 activeTab === item.name 
//                   ? 'bg-blue-50 text-blue-600'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               <item.icon className="h-5 w-5" />
//               <span>{item.name}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Stats Cards */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <div className="flex items-center justify-between">
//               <h3 className="text-gray-500 text-sm">Reading Orders</h3>
//               <ClipboardDocumentIcon className="h-6 w-6 text-blue-600" />
//             </div>
//             <p className="text-3xl font-bold mt-2">3</p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <div className="flex items-center justify-between">
//               <h3 className="text-gray-500 text-sm">Recent Order</h3>
//               <ClockIcon className="h-6 w-6 text-blue-600" />
//             </div>
//             <div className="mt-2">
//               <p className="font-semibold">Order #56</p>
//               <p className="text-gray-500 text-sm">22/12/2024</p>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <div className="flex items-center justify-between">
//               <h3 className="text-gray-500 text-sm">Current Status</h3>
//               <div className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
//                 Active
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Section */}
//         <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold mb-4">{activeTab}</h2>
//           <div className="border-t border-gray-200 pt-4">
//             {activeTab === 'Submit Order' && (
//               <div className="space-y-4">
//                 <p className="text-gray-600">
//                   Submit new laundry items for processing
//                 </p>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                   Create New Order
//                 </button>
//               </div>
//             )}

//             {activeTab === 'Order History' && (
//               <p className="text-gray-600">View and track your past orders</p>
//             )}

//             {activeTab === 'Daily Rush' && (
//               <p className="text-gray-600">Check peak hours and plan accordingly</p>
//             )}

//             {activeTab === 'Profile' && (
//               <p className="text-gray-600">Manage your account settings</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
