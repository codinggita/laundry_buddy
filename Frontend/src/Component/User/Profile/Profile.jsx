import Sidebar from "../Sidebar";
import { Building2, Phone, MapPin, Package, Camera } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [image, setImage] = useState(null);

  // Handle File Upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

// fetch the user deatils
const[user,setUser]=useState({});
const[bagnumber,setBagNumber]=useState("");
useEffect(()=>{
  const fetchUSer = async ()  =>{
    try{

      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:3000/user/profile", {
          headers: { Authorization: `Bearer ${token}` }
        })

        const data = await response.data
        
        setUser(data);
        setBagNumber(data.bagNumber)

    }catch(error){
      console.error(error.response?.data?.message || error.message);
    }


  }
  fetchUSer();
},[])


  return (
    <div className="md:flex min-h-screen">
      {/* Sidebar */}
      <div className=" md:block w-80">
        <Sidebar />

      </div>


      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Profile Settings</h1>
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg mt-3 shadow mb-6 w-full">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <p className="text-sm text-gray-500 mb-4">Manage your profile details</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-xl font-bold text-gray-600">
              JD {/* Static initials instead of upload */}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

              <div className="flex items-center focus-within:border-black focus-within:border-2 border rounded-lg p-3  ">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <input type="phone" placeholder="Phone Number" value= {user.phoneNumber} className="w-full bg-transparent outline-none" />
              </div>
              <div className="flex items-center focus-within:border-black focus-within:border-2 border rounded-lg p-3">
                <Building2 className="w-5 h-5 text-gray-400 mr-2" />
                <input type="text" placeholder="Room Number" value={user.roomNumber} className="w-full bg-transparent outline-none" />
              </div>
              <div className="flex items-center border focus-within:border-black focus-within:border-2 rounded-lg p-3 ">
                <Package className="w-5 h-5 text-gray-400 mr-2" />
                <input type="number" placeholder="Bag Number" value={bagnumber} className="w-full bg-transparent outline-none" />
              </div>
              <div className="flex items-center border  focus-within:border-black focus-within:border-2 rounded-lg p-3">
                <Building2 className="w-5 h-5 text-gray-400 mr-2" />
                <input type="text" placeholder="Building" value={user.buildingName} className="w-full bg-transparent outline-none" />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <label className="text-sm font-medium" htmlFor="address">Address</label>
              <textarea id="address" name="address" value={user.address} className="w-full border rounded-lg p-3" rows="3" placeholder="Enter your address"></textarea>
            </div>

            <div className="flex justify-end mt-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save Changes</button>
            </div>
          </form>

        </div>

        {/* Security Settings */}
        <div className="bg-white p-6 rounded-lg shadow w-full">
          <h2 className="text-lg font-semibold">Security</h2>
          <p className="text-sm text-gray-500 mb-4">Manage your password and security settings</p>

          <div className="space-y-2">
            <label className="text-sm font-medium">Current Password</label>
            <input type="password" className="w-full border rounded-lg p-2" />
          </div>

          <div className="space-y-2 mt-4">
            <label className="text-sm font-medium">New Password</label>
            <input type="password" className="w-full border rounded-lg p-2" />
          </div>
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Update Password</button>
          </div>
        </div>
      </div>
    </div>

  );
}
