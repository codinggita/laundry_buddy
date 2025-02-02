import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css'
import RoleSelector from './Component/Roleselector/RoleSelector'
import Dashboard from './Component/User/Dashboard';
import Login from './Component/User/Login';
import Registration from './Component/User/Registration';
import ResetPassword from './Component/User/ForgotPassword';
import WorkerDashbaord from './Component/Worker/workerDashbaord';
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    <Route index element={<div className='bg-softBlue min-h-screen'><RoleSelector /></div>} />
    <Route path="/userdashboard" element={<div className="bg-softBlue min-h-screen"> <Dashboard /></div>}  />    
    <Route path="/workerdashboard" element={ <WorkerDashbaord /> } />  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
