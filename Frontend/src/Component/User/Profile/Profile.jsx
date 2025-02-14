import Sidebar from "../Sidebar";
import { Building2, Phone, MapPin, Package,Camera } from "lucide-react";
import { useState } from "react";

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
          <h3 className="font-semibold text-lg">John Doe</h3>
          <p className="text-sm text-gray-500">john.doe@university.edu</p>
        </div>
      </div>

      {/* <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex items-center border rounded-lg p-2 w-full">
              <Phone className="h-4 w-4 text-gray-500 mr-2" />
              <input type="phone" className="w-full outline-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="bag">
              Room Number
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input
                id="bag"
                name="bag"
                type="number"
                className="pl-10 w-full border rounded-lg p-2"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="bag">
              Bag Number
            </label>
            <div className="relative">
              <Package className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input
                id="bag"
                name="bag"
                type="number"
                className="pl-10 w-full border rounded-lg p-2"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="building">
              Building
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <input
                type="text"
                id="building"
                name="building"
                className="pl-10 w-full border rounded-lg p-2"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <label className="text-sm font-medium" htmlFor="address">
            Address
          </label>
          <textarea id="address" name="address" className="w-full border rounded-lg p-2" rows="3" />
        </div>

        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Save Changes
          </button>
        </div>
      </form> */}
      <form className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
    
    <div className="flex items-center focus-within:border-black focus-within:border-2 border rounded-lg p-3  ">
      <Phone className="w-5 h-5 text-gray-400 mr-2" />
      <input type="phone" placeholder="Phone Number" className="w-full bg-transparent outline-none" />
    </div>
    <div className="flex items-center focus-within:border-black focus-within:border-2 border rounded-lg p-3">
      <Building2 className="w-5 h-5 text-gray-400 mr-2" />
      <input type="text" placeholder="Room Number" className="w-full bg-transparent outline-none" />
    </div>
    <div className="flex items-center border focus-within:border-black focus-within:border-2 rounded-lg p-3 ">
      <Package className="w-5 h-5 text-gray-400 mr-2" />
      <input type="number" placeholder="Bag Number" className="w-full bg-transparent outline-none" />
    </div>
    <div className="flex items-center border  focus-within:border-black focus-within:border-2 rounded-lg p-3">
      <Building2 className="w-5 h-5 text-gray-400 mr-2" />
      <input type="text" placeholder="Building" className="w-full bg-transparent outline-none" />
    </div>
  </div>

  <div className="space-y-2 mt-4">
    <label className="text-sm font-medium" htmlFor="address">Address</label>
    <textarea id="address" name="address" className="w-full border rounded-lg p-3" rows="3" placeholder="Enter your address"></textarea>
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
