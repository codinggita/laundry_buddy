import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

function ComplaintFormSuccess() {
  return (
    <div className=" bg-gray-50 min-h-screen flex flex-col">
      {/* Sidebar */}
      <div className="bg-gray-50">
        <Sidebar />
      </div>

      {/* Success Message */}
      <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Form Submitted Successfully!</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-md">
          We have received your complaint and will resolve it soon.
        </p>
        <Link
          to="/user/userdashboard"
          className="mt-6 w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-center"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ComplaintFormSuccess;
