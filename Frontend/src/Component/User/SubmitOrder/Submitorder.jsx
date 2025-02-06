// import React from "react";
// import { Package, User, Home,  Shirt, Scale, DollarSign,Building } from "lucide-react";
// import Sidebar from "../Sidebar";

// export default function Submitorder() {
//   return (
//    <>
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="min-h-screen bg-gray-100 p-6 ml-0 md:ml-96  w-full ">
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Submit Order</h2>

//         {/* Stepper */}
//         <div className="flex justify-between sm:justify-start mt-6 space-x-6  sm:space-x-28">
//           <div className="flex flex-col items-center text-blue-600">
//             <Package className="w-10 h-10 bg-blue-600 text-white p-2 rounded-full" />
//             <p className="text-sm sm:text-base font-medium">Order Details</p>
//           </div>
//           <hr className="w-20 border border-gray-300 mt-6 " />
//           <div className="flex flex-col items-center text-gray-400">
//             <Scale className="w-10 h-10  text-gray-400 p-2" />
//             <p className="text-sm sm:text-base font-m">Weight & Items</p>
//           </div>
//           <hr className="w-20 border border-gray-300 mt-6 " />

//           <div className="flex flex-col items-center text-gray-400">
//           <DollarSign className="w-10 h-10 text-gray-400 p-2" />
//           <p className="text-sm sm:text-base">Review & Pay</p>
//           </div>
//         </div>

//         {/* Order Details Form */}
//         <div className="bg-white p-6 rounded-lg shadow-lg mt-8 w-full max-w-4xl ">
//           <h3 className="text-lg font-semibold">Order Details</h3>
//           <p className="text-sm text-gray-500">Fill in your laundry details</p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//             {/* Bag Number */}
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <Package className="w-5 h-5 text-gray-400 mr-2" />
//               <input type="text" placeholder="Bag Number" className="w-full  bg-transparent outline-none" />
//             </div>

//             {/* Name */}
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <User className="w-5 h-5 text-gray-400 mr-2" />
//               <input type="text" placeholder="Name" className="w-full bg-transparent outline-none" />
//             </div>

//             {/* Room Number */}
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <Building className="w-5 h-5 text-gray-400 mr-2" />
//               <input type="text" placeholder="Room Number" className="w-full bg-transparent outline-none" />
//             </div>

//             {/* Building */}
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <Home className="w-5 h-5 text-gray-400 mr-2" />
//               <input type="text" placeholder="Building" className="w-full bg-transparent outline-none" />
//             </div>

//             {/* Number of Items */}
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <Shirt className="w-5 h-5 text-gray-400 mr-2" />
//               <input type="number" placeholder="Number of Items" className="w-full bg-transparent outline-none" />
//             </div>

//             {/* Weight */}
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <Scale className="w-5 h-5 text-gray-400 mr-2" />
//               <input type="number" placeholder="Kg" className="w-full bg-transparent outline-none" />
//             </div>
//           </div>

//           {/* Continue Button */}
//           <div className="flex justify-end mt-6">
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//               Continue
//             </button>
//           </div>
//         </div>
//       </div>
//       </>

//   );
// }

import React, { useState } from "react";
import {
  Package,
  User,
  Home,
  Shirt,
  Scale,
  DollarSign,
  Building,
} from "lucide-react";
import Sidebar from "../Sidebar";

export default function SubmitOrder() {
  const [step, setStep] = useState(1);

  return (
    <>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 p-6 ml-0 md:ml-96 w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Submit Order
        </h2>

        {/* Stepper */}
        <div className="flex justify-between sm:justify-start mt-6 space-x-6 sm:space-x-72">
          <div
            className={`flex flex-col items-center ${
              step === 1 ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            <Package
              className={`w-10 h-10 p-2 rounded-full ${
                step === 1 ? "bg-blue-600  text-white" : "text-gray-400"
              }`}
            />
            <p className="text-sm sm:text-base ">Order Details</p>
          </div>
          <div
            className={`flex flex-col items-center ${
              step === 2 ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            <Scale
              className={`w-10 h-10  p-2 rounded-full ${
                step === 2 ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
            />
            <p className="text-sm sm:text-base ">Weight & Items</p>
          </div>
          <div
            className={`flex flex-col items-center ${
              step === 3 ? "text-blue-600 font-medium" : "text-gray-400"
            }`}
          >
            <DollarSign
              className={`w-10 h-10  p-2 rounded-full ${
                step === 3 ? "bg-blue-600 text-white" : "text-gray-400"
              }`}
            />
            <p className="text-sm sm:text-base">Review & Pay</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8 w-full max-w-4xl">
          {step === 1 && (
            <>
              <h3 className="text-lg font-semibold">Order Details</h3>
              <p className="text-sm text-gray-500">
                Fill in your laundry details
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Package className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Bag Number"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <User className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Building className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Room Number"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Home className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Building"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Shirt className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="number"
                    placeholder="Number of Items"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                  <Scale className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="number"
                    placeholder="Kg"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              {" "}
              <div className="bg-white rounded-lg border p-6 max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold mb-2">
                  Order Confirmation
                </h2>
                <p className="text-gray-600 mb-6">Check you order carefully</p>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Order Summary</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Shirt className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-600">Items</span>
                      </div>
                      <span className="font-medium">14 Pices</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Scale className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-600">Weight(kg)</span>
                      </div>
                      <span className="font-medium">2.5 kg</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>$1.2</span>
                    </div>
                    <div className="flex justify-between text-blue-600 font-medium">
                      <span>Total</span>
                      <span>$1.3</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2 text-sm text-gray-600">
                    <p>• Prices include standard cleaning and handling</p>
                    <p>• Additional charges may apply for stain treatment</p>
                    <p>• Minimum order weight: 2 kg</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {step === 3 && (
            <h3 className="text-lg font-semibold">Review & Pay</h3>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                className="bg-gray-400 text-white px-6 py-2 rounded-lg"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}
            {step < 3 && (
              <>
                {" "}
                <div> </div>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => setStep(step + 1)}
                >
                  Continue
                </button>
              </>
            )}
            {step === 3 && (
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Submit Order
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
