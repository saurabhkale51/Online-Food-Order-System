import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">

        
        <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Foodie Logo"
            height="50"
            width="50"
            className="me-2 logo-img"
          />
          <span className="fs-4 brand-name">Foodie</span>
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link fw-semibold px-3 text-dark" to="/">Home</Link>
            <Link className="nav-link fw-semibold px-3 text-dark" to="/about">About</Link>
            <Link className="nav-link fw-semibold px-3 text-dark" to="/menu">Menu</Link>
            <Link className="nav-link fw-semibold px-3 text-dark" to="/contact">Contact</Link>
            <Link className="nav-link fw-semibold px-3 text-dark" to="/signup">Sign Up</Link>
            <Link className="nav-link fw-semibold px-3 text-dark" to="/login">Login</Link>
          </div>
        </div>
      </div>

      
      <style>{`
        .logo-img {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .logo-img:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 5px rgba(255, 152, 0, 0.7));
        }
        .brand-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #ff9800;
        }
      `}</style>
    </nav>
  );
}
