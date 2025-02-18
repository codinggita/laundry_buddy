import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

const Dailyrush = () => {
  return (
    <>
    <Sidebar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Temporarily Unavailable</h1>
      <p className="text-lg mb-8">We're sorry, but this page is temporarily unavailable. Please visit again later for the latest updates.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
       <Link to='/user/userdashboard'> Go Back</Link>
        </button>
    </div>
  </div>
  </>
  )
}

export default Dailyrush
