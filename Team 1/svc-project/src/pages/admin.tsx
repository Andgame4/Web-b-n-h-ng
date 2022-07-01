import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import UserManagement from 'components/admin/userManagement';
const Admin = () => {
  return (
    <div className="admin-header">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                <FiLogOut />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <UserManagement />
    </div>
  );
};

export default Admin;
