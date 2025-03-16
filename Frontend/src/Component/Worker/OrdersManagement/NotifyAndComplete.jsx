// NotifyAndComplete.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import axios from 'axios'

function NotifyAndComplete({ isOpen, onClose, order,fetchOrders  }) {
  if (!isOpen) return null; // Only render if isOpen is true

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
<<<<<<< HEAD
      const response = await axios.patch(`https://laundry-buddy-yysq.onrender.com/worker/update-order-status/${order?.OrderId}`,
        {
          phoneNumber: `+91${order?.phoneNumber}`,
          message:`Order #${order?.bagNumber || "N/A"} has been completed and ready for pickup.`

         },{
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header
          },
        }
      )
      const response = await axios.patch(`https://laundry-buddy-yysq.onrender.com/worker/update-order-status/${order?.OrderId}`)
>>>>>>> 284cd9bcd6cc97515c060d1d7e129798327e3d50
      console.log("Order completed:", response.data);
      fetchOrders();
    }catch(error){
     
        console.error("Error updating order status:", error.response ? error.response.data : error.message);
    }

    onClose(); // Close after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <span className="text-2xl">×</span>
        </button>
        <div className="flex items-center mb-4">
          <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
          <h2 className="text-lg font-semibold">Complete Order</h2>
        </div>
        <p className="text-gray-600 mb-4">Mark as complete and notify customer</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Order Details</h3>
            <div className="bg-blue-50 p-4 rounded-md">
              <p>Order ID: #{order?.bagNumber || "N/A"}</p>
              <p>Customer: {order?.userName || "N/A"}</p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Bag Number</label>
            <input
              type="text"
              defaultValue={order?.bagNumber || ""}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter bag number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Notification Message</label>
            <textarea
              defaultValue={`Order #${order?.bagNumber || "N/A"} has been completed and ready for pickup.`}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="3"
              placeholder="Enter notification message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center justify-center"
          >
            <CheckCircle className="h-4 w-4 mr-2" /> Complete & Notify
          </button>
        </form>
      </div>
    </div>
  );
}

export default NotifyAndComplete;export default NotifyAndComplete;
