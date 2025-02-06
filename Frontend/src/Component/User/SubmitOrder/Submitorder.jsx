import React from "react";
import { Package, User, Home,  Shirt, Scale, DollarSign,Building } from "lucide-react";
import Sidebar from "../Sidebar";

export default function Submitorder() {
  return (
   <>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 p-6 ml-0 md:ml-96  w-full ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Submit Order</h2>

        {/* Stepper */}
        <div className="flex justify-between sm:justify-start mt-6 space-x-6  sm:space-x-28">
          <div className="flex flex-col items-center text-blue-600">
            <Package className="w-10 h-10 bg-blue-600 text-white p-2 rounded-full" />
            <p className="text-sm sm:text-base font-medium">Order Details</p>
          </div>
          <hr className="w-20 border border-gray-300 mt-6 " />
          <div className="flex flex-col items-center text-gray-400">
            <Scale className="w-10 h-10  text-gray-400 p-2" />
            <p className="text-sm sm:text-base font-m">Weight & Items</p>
          </div>
          <hr className="w-20 border border-gray-300 mt-6 " />

          <div className="flex flex-col items-center text-gray-400">
          <DollarSign className="w-10 h-10 text-gray-400 p-2" />
          <p className="text-sm sm:text-base">Review & Pay</p>
          </div>
        </div>

        {/* Order Details Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8 w-full max-w-4xl ">
          <h3 className="text-lg font-semibold">Order Details</h3>
          <p className="text-sm text-gray-500">Fill in your laundry details</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Bag Number */}
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <Package className="w-5 h-5 text-gray-400 mr-2" />
              <input type="text" placeholder="Bag Number" className="w-full  bg-transparent outline-none" />
            </div>

            {/* Name */}
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input type="text" placeholder="Name" className="w-full bg-transparent outline-none" />
            </div>

            {/* Room Number */}
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <Building className="w-5 h-5 text-gray-400 mr-2" />
              <input type="text" placeholder="Room Number" className="w-full bg-transparent outline-none" />
            </div>

            {/* Building */}
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <Home className="w-5 h-5 text-gray-400 mr-2" />
              <input type="text" placeholder="Building" className="w-full bg-transparent outline-none" />
            </div>

            {/* Number of Items */}
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <Shirt className="w-5 h-5 text-gray-400 mr-2" />
              <input type="number" placeholder="Number of Items" className="w-full bg-transparent outline-none" />
            </div>

            {/* Weight */}
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <Scale className="w-5 h-5 text-gray-400 mr-2" />
              <input type="number" placeholder="Kg" className="w-full bg-transparent outline-none" />
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Continue
            </button>
          </div>
        </div>
      </div>
      </>
    
  );
}
