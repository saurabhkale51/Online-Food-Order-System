import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 pb-3 shadow-lg">
      <div className="container">
        <div className="row gy-4 text-center text-md-start">

      
          <div className="col-md-4">
            <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-3">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" 
                alt="Logo" 
                height="50" 
                className="me-2" 
              />
              <h4 className="fw-bold m-0">Foodie</h4>
            </div>
            <p className="small text-muted">
              Order your favorite meals online with Foodie! Fast delivery, hot & fresh food, and amazing deals every day.
            </p>
          </div>

        
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              {["Home", "Menu", "About Us", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                    className="text-dark text-decoration-none d-inline-block mb-1 footer-link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="small mb-2"><FaMapMarkerAlt className="me-2 text-warning" /> Pune, Maharashtra, India</p>
            <p className="small mb-2"><FaPhoneAlt className="me-2 text-warning" /> +91 98765 43210</p>
            <p className="small mb-2"><FaEnvelope className="me-2 text-warning" /> support@foodie.com</p>

            
            <div className="mt-3">
              <a href="#" className="btn btn-outline-dark btn-sm rounded-circle me-2 social-btn"><FaFacebookF /></a>
              <a href="#" className="btn btn-outline-dark btn-sm rounded-circle me-2 social-btn"><FaInstagram /></a>
              <a href="#" className="btn btn-outline-dark btn-sm rounded-circle social-btn"><FaTwitter /></a>
            </div>
          </div>

        </div>

        <hr className="mt-4" />
        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Foodie. All Rights Reserved.
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #ff9800 !important;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          background-color: #ff9800;
          color: white !important;
          border-color: #ff9800;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
}
