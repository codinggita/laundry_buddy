import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle, Bell, ArrowUpDown, Check, Download, Search } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import LoaderM from '../../../assets/loader/loader';
import NotifyAndComplete from './NotifyAndComplete';

import { io } from 'socket.io-client';

function OrderManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModelOpen,setIsModelOpen]=useState(false);
  const [selectedOrder,setSelectedOrder]=useState(null)
  const [socket, setSocket] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://laundry-buddy-yysq.onrender.com/worker/getallorderdetails');
      const { orders, pendingOrders, completedOrders } = response.data;
      console.log(orders) 
      setOrders(orders || []);
      setPendingOrders(orders.filter(order => order.status === "Pending") || []);
      setCompletedOrders(orders.filter(order => order.status === "Completed") || []);
      setLoading(false);
      // console.log("Orders",response)
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchOrders();
  },[])

      // Handling socket.io connection 
      useEffect(() => {
        const socketConnection = io('http://localhost:8080'); // Create the socket inside useEffect
        setSocket(socketConnection);
    
        socketConnection.on('connect', () => {
          console.log('Connected to server');
        });
    
        socketConnection.on('server-message', (message) => {
          fetchOrders()
        });
    
        socketConnection.on('disconnect', () => {
          console.log('Disconnected from server');
        });
    
        return () => {
          socketConnection.disconnect();
        };
      }, []);
  



  // Filter orders according to bag number
  const filterOrders = orders.filter(order =>
    order?.bagNumber?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterPendingOrders = filterOrders.filter(order => order.status === "Pending");
  const filterCompletedOrders = filterOrders.filter(order => order.status === "Completed");

  if (loading) {
    return  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 ">     
                        <LoaderM />
               </div>;
  }




  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto pt-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <input
                  type="text"
                  placeholder="Search by bag number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <button className="flex items-center text-gray-600 bg-white border border-gray-200 rounded-md px-3 py-1.5 whitespace-nowrap hover:bg-gray-50">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                <span>Newest First</span>
              </button>
            </div>
          </div>

          {/* Pending Orders Section */}
          <div className="bg-white rounded-lg mt-6 shadow-sm mb-8 overflow-hidden">
            {/* Section Header */}
            <div className="p-4 md:p-6 border-b border-gray-100">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <Download className="h-5 w-5 rounded-full text-yellow-400" />
                </div>
                <h2 className="text-lg font-semibold">Pending Orders</h2>
                <span className="ml-2 bg-gray-100 text-gray-600 text-sm px-2 py-0.5 rounded-md">
                  {filterPendingOrders.length}
                </span>
              </div>
            </div>

            {/* Table Header */}
            <div className="overflow-x-auto max-h-80">
              {filterPendingOrders.length > 0 ? (
                <table className="w-full">
                  <thead className="sticky top-0 bg-white shadow">
                    <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                      <th className="px-6 py-3 font-medium">Bag Number</th>
                      <th className="px-6 py-3 font-medium">Customer</th>
                      <th className="px-6 py-3 font-medium">Number of Items</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                      <th className="px-6 py-3 font-medium">Date</th>
                      <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterPendingOrders.map((order) => (
                      <tr key={order.bagNumber} className="border-b border-gray-100">
                        <td className="px-6 py-4 text-blue-600 font-medium">{`Bag No.${order.bagNumber}`}</td>
                        <td className="px-6 py-4">{order.userName}</td>
                        <td className="px-6 py-4">{order.numberOfItems}</td>
                        <td className="px-6 py-4">
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 font-bold py-1 rounded-full">
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{order.date}<br />{order.time}</td>
                        <td className="px-6 py-4">
                          <button
                          onClick={()=>{
                            setSelectedOrder(order);
                            setIsModelOpen(true);
                          }} 
                          
                          
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md text-sm flex items-center">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Complete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="p-4">No pending orders found.</p>
              )}
            </div>
          </div>

          <NotifyAndComplete
          isOpen={isModelOpen}
          onClose={()=> setIsModelOpen(false)}
          order={selectedOrder}
          fetchOrders={fetchOrders} //pass the function to notification and complete component
          />

          {/* Completed Orders Section */}
          <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
            {/* Section Header */}
            <div className="p-4 md:p-6 border-b border-gray-100">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                </div>
                <h2 className="text-lg font-semibold">Completed Orders</h2>
                <span className="ml-2 bg-gray-100 text-gray-600 text-sm px-2 py-0.5 rounded-md">
                  {filterCompletedOrders.length}
                </span>
              </div>
            </div>

            {/* Table Header */}
            <div className="overflow-x-auto max-h-80">
              {filterCompletedOrders.length > 0 ? (
                <table className="w-full">
                  <thead className="sticky top-0 bg-white shadow">
                    <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                      <th className="px-6 py-3 font-medium">Bag Number</th>
                      <th className="px-6 py-3 font-medium">Customer</th>
                      <th className="px-6 py-3 font-medium">Number of Items</th>
                      <th className="px-6 py-3 font-medium">Date</th>
                      <th className="px-6 py-3 font-medium">Time</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterCompletedOrders.map((order, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="px-6 py-4 text-blue-600 font-medium">{order.bagNumber}</td>
                        <td className="px-6 py-4">{order.userName}</td>
                        <td className="px-6 py-4">{order.numberOfItems}</td>
                        <td className="px-6 py-4 text-gray-500">{order.date}</td>
                        <td className="px-6 py-4 text-gray-500">{order.time}</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                            {order.status}
                          </span>
                        </td>
                        {/* <td className="px-6 py-4">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm flex items-center">
                            <Bell className="h-4 w-4 mr-1" />
                            Notify
                          </button>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
                            ) : (
                              <p className="p-4">No completed orders found.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
              
              export default OrderManagement;


