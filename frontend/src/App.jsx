import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import LoginAdmin from "./admin/LoginAdmin"
import UserLogin from "./user/UserLogin"
import Register from "./user/Register"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./user/Home"
import NotFound from "./components/NotFound"
import Store from "./Store"
import { Provider } from "react-redux"
import AdminDashboard from "./admin/AdminDashboard"
import AdminProtRoute from "./components/AdminProtRoute"

function Logout() {
  localStorage.clear() 
  
  return <Navigate to='/login' />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <UserLogin />
}

function AdminRegLogout() {
  localStorage.clear()
  return <LoginAdmin />
}

function App() {

  return (
    <>

        <BrowserRouter>
          <Routes>
          <Route path="/" element ={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login/" element={<RegisterAndLogout />} />
          <Route path="/logout/" element={<Logout />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/adminLogin/" element={<AdminRegLogout />} />
          <Route path="/adminDashboard/" element={<AdminProtRoute ><AdminDashboard /> </AdminProtRoute> } />
          <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>

      
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
