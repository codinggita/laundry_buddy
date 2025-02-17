import { CheckCircle, Clock} from "lucide-react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";



const OrderConfirmation = () => {
  return (
    <div className="">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-6">
        {/* Success Icon */}
        <CheckCircle size={80} className="text-green-500 mb-4" />

        {/* Title */}
        <h1 className="text-3xl font-bold">Order Submitted!</h1>
        <p className="text-gray-500">Your laundry order has been successfully placed</p>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-4 mt-6 w-80">
          <div className="flex justify-between text-gray-600">
            <span>Order Number</span>
            <span className="font-bold">#</span>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Items</span>
            <span className="font-bold">0 pieces</span>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Service Type</span>
            <span className="font-bold">Standard</span>
          </div>
        </div>

        {/* Redirecting Message */}
        <div className="flex items-center text-gray-500 text-sm mt-4">
          <Clock size={16} className="mr-1" />
          Redirecting to order history • • •
        </div>

        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg flex items-center gap-2">
            <Link to='/user/order-history' >
          View Order History →
            </Link>
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
