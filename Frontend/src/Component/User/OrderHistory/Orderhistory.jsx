import React from "react";
import { Package } from "lucide-react";
import Sidebar from "../Sidebar";

// const staticOrders = [
//   {
//     id: '199',
//     status: 'pending',
//     items: 12,
//     submitDate: '2025-01-10',
//     roomNumber: '17',
//     name: 'kashyap',
//     weight: 4,
//   },
//   {
//     id: '',
//     status: 'pending',
//     items: 0,
//     submitDate: '2025-01-10',
//     roomNumber: '',
//     name: '',
//     weight: 0,
//   },
//   {
//     id: '',
//     status: 'pending',
//     items: 0,
//     submitDate: '2025-01-10',
//     roomNumber: '',
//     name: '',
//     weight: 0,
//   }
// ];

// const OrderHistory = () => {
//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">Order History</h1>

//       {/* Recent Orders Section */}
//       <div className="bg-gray-100 p-4 rounded-lg">
//         <h2 className="text-lg font-semibold">Recent Orders</h2>
//         <p className="text-gray-500 text-sm">View your past laundry orders</p>
//       </div>

//       {/* Order List */}
//       <div className="space-y-3 mt-4">
//         {staticOrders.map((order, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
//             {/* Left Side - Order Details */}
//             <div className="flex items-center space-x-3">
//               <Package className="text-blue-500" />
//               <div>
//                 <p className="font-medium text-gray-800">
//                   Order #{order.id ? order.id : ''}
//                 </p>
//                 {order.name && (
//                   <p className="text-sm text-gray-500">
//                     {order.name} - Room {order.roomNumber}
//                   </p>
//                 )}
//                 <p className="text-sm text-gray-500">
//                   {order.items} items • {order.weight}kg
//                 </p>
//               </div>
//             </div>

//             {/* Right Side - Status & Date */}
//             <div className="text-right">
//               <p className="font-medium text-yellow-600 capitalize">
//                 {order.status}
//               </p>
//               <p className="text-xs text-gray-500">{order.submitDate}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrderHistory;

export default function Orderhistory() {
  const orders = [
    {
      id: 199,
      name: "Mayur",
      room: "Room 52",
      items: 12,
      weight: "4kg",
      status: "Pending",
      date: "1/10/2025",
    },
    {
      id: null,
      name: "jagjeet",
      room: "Room 29",
      items: 0,
      weight: "0kg",
      status: "Completed",
      date: "1/10/2025",
    },
    {
      id: null,
      name: "",
      room: "Room",
      items: 0,
      weight: "3kg",
      status: "Completed",
      date: "1/10/2025",
    },
  ];

  return (
    <div>
    <div>
        <Sidebar />
    </div>
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Order History</h1>
      {/* <p className="text-gray-500">View your past laundry orders</p> */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-4 ">
        <div className=" p-4 rounded-lg border-b">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <p className="text-gray-500 text-sm">View your past laundry orders</p>
        </div>
        {orders.map((order, index) => (
          <div
            key={index}
            className="border-b last:border-none py-4 flex justify-between items-center"
          >
            <div className="flex gap-4">
              <div>
                <Package className="text-blue-500 mt-6" />
              </div>
              <div>
                <h3 className="font-semibold">
                  Order #{order.id ? order.id : ""}
                </h3>
                <p className="text-gray-600">
                 {order.name} -  {order.room}
                </p>
                <p className="text-gray-500">
                  {order.items} items • {order.weight}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-medium ${
                order.status === 'Pending' ? 'text-yellow-600'  :
                order.status ==='Completed' ?'text-green-600':
                'text-blue-600'
              }`}>
              {order.status}
              </p>
              <p className="text-gray-400 text-sm">{order.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
