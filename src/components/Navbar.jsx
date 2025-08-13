import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to="/">
          <img
            src="/logo.png" 
            alt="Logo"
            height="42"
            width="80"
            className="me-2"
          />
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
            <Link className="nav-link fw-semibold px-3 text-dark" to="/contact">Contact</Link>
            <Link className="nav-link fw-semibold px-3 text-dark" to="/signup">Sign Up</Link>
            <Link className="nav-link fw-semibold px-3 text-dark" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
