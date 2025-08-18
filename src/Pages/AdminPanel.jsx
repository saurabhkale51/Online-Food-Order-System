// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const AdminPanel = () => {
//   return (
//     <div className="d-flex flex-column flex-md-row min-vh-100 bg-dark text-whiten">
      
//       <nav className="navbar navbar-dark bg-dark d-md-none border-bottom border-secondary">
//         <div className="container-fluid">
//           <span className="navbar-brand fw-bold">Admin Panel</span>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#adminSidebar"
//             aria-controls="adminSidebar"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>
//       </nav>

    
//       <div
//         className="offcanvas offcanvas-start bg-dark text-white d-md-none"
//         tabIndex="-1"
//         id="adminSidebar"
//         aria-labelledby="adminSidebarLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="adminSidebarLabel">
//             Admin Menu
//           </h5>
//           <button
//             type="button"
//             className="btn-close btn-close-white"
//             data-bs-dismiss="offcanvas"
//           ></button>
//         </div>
//         <div className="offcanvas-body p-3">
//           <NavLinks />
//         </div>
//       </div>

      
//       <div
//         className="bg-dark border-end border-secondary p-3 d-none d-md-block"
//         style={{ width: "220px" }}
//       >
//         <h4 className="fw-bold text-light mb-4">Admin Panel</h4>
//         <NavLinks />
//       </div>

      
//       <div className="flex-grow-1 p-4 bg-light text-dark">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// const NavLinks = () => (
//   <ul className="nav flex-column">
//     <li className="nav-item mb-4">
//       <Link className="nav-link text-light fw-semibold hover-link" to="/admin">
//         Dashboard
//       </Link>
//     </li>
//     <li className="nav-item mb-4">
//       <Link
//         className="nav-link text-light fw-semibold hover-link"
//         to="ordermanagement"
//       >
//         OrderManagement
//       </Link>
//     </li>
//     <li className="nav-item mb-4">
//       <Link
//         className="nav-link text-light fw-semibold hover-link"
//         to="menumanagement"
//       >
//         MenuManagement
//       </Link>
//     </li>
//     <li className="nav-item mb-4">
//       <Link
//         className="nav-link text-light fw-semibold hover-link"
//         to="customermanagement"
//       >
//         CustomerManagement
//       </Link>
//       </li>
//   </ul>
// );

// export default AdminPanel;


import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="d-flex flex-column flex-md-row min-vh-100 bg-dark text-whiten">
      
      {/* Mobile Navbar */}
      <nav className="navbar navbar-dark bg-dark d-md-none border-bottom border-secondary">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">Admin Panel</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#adminSidebar"
            aria-controls="adminSidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white d-md-none"
        tabIndex="-1"
        id="adminSidebar"
        aria-labelledby="adminSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="adminSidebarLabel">
            Admin Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body p-3 d-flex flex-column">
          <NavLinks />
          <LogoutButton />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className="bg-dark border-end border-secondary p-3 d-none d-md-flex flex-column"
        style={{ width: "220px" }}
      >
        <h4 className="fw-bold text-light mb-4">Admin Panel</h4>
        <NavLinks />
        <LogoutButton />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light text-dark">
        <Outlet />
      </div>
    </div>
  );
};

const NavLinks = () => (
  <ul className="nav flex-column">
    <li className="nav-item mb-4">
      <Link className="nav-link text-light fw-semibold hover-link" to="/admin">
        Dashboard
      </Link>
    </li>
    <li className="nav-item mb-4">
      <Link
        className="nav-link text-light fw-semibold hover-link"
        to="ordermanagement"
      >
        OrderManagement
      </Link>
    </li>
    <li className="nav-item mb-4">
      <Link
        className="nav-link text-light fw-semibold hover-link"
        to="menumanagement"
      >
        MenuManagement
      </Link>
    </li>
    <li className="nav-item mb-4">
      <Link
        className="nav-link text-light fw-semibold hover-link"
        to="customermanagement"
      >
        CustomerManagement
      </Link>
    </li>
  </ul>
);

const LogoutButton = () => (
  <div className="mt-auto text-center">
    <button className="btn btn-outline-danger fw-bold px-4 py-2 rounded-pill">
      Logout
    </button>
  </div>
);

export default AdminPanel;

