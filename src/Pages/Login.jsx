import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login({ setAuth }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const ADMIN = { username: "admin", password: "admin123" };
  const USER = { username: "user", password: "user123" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username === ADMIN.username &&
      formData.password === ADMIN.password
    ) {
      setAuth({ isAuthenticated: true, role: "admin" });
      toast.success("Welcome Admin!");
      setTimeout(() => navigate("/admin"), 1500);
    } else if (
      formData.username === USER.username &&
      formData.password === USER.password
    ) {
      setAuth({ isAuthenticated: true, role: "user" });
      toast.success("Welcome User!");
      setTimeout(() => navigate("/"), 1500); 
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/cooking-mexican-taco-meat-beans-vegetables-cooking-mexican-taco-meat-beans-vegetables-black-slate-table-latin-97685629.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h3 className="text-center mb-4">Secure Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
