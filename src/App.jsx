import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Menu from "./Pages/Menu";
import AdminPanel from "./Pages/AdminPanel";
import Dashboard from "./Admin Panel/Dashboard";
import OrderManagement from "./Admin Panel/OrderManagement";
import MenuManagement from "./Admin Panel/MenuManagement";
import CustomerManagement from "./Admin Panel/CustomerManagement";


function PrivateRoute({ auth, role, children }) {
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (role && auth.role !== role) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default function App() {
  
  const [auth, setAuth] = useState({ isAuthenticated: false, role: null });

  return (
  
      <Routes>
      
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />

    
        <Route
          path="/"
          element={
            <PrivateRoute auth={auth} role="user">
              <Home />
            </PrivateRoute>
          }
        />

      
        <Route
          path="/admin"
          element={
            <PrivateRoute auth={auth} role="admin">
              <AdminPanel />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ordermanagement" element={<OrderManagement />} />
          <Route path="menumanagement" element={<MenuManagement />} />
          <Route path="customermanagement" element={<CustomerManagement />} />
        </Route>

      
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    
  );
}
