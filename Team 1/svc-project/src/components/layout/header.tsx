import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/layoutCss/header.scss';
import logo from '../../assets/images/ivy-moda.png';

const Header = () => {
  const [isShow, setIsShow] = useState('');
  const [isClose, setIsClose] = useState('');

  const handleHambergerClick = () => {
    setIsShow('show');
  };

  const handleCloseClick = () => {
    setIsClose('close');
  };

  return (
    <header className="header container">
      <nav className="navbar-box ">
        {/* List product */}
        <div className="nav-list d-flex gap-2">
          <Link to="/women">Women</Link>
          <Link to="/men">Men</Link>
          <Link to="/kid">Kid</Link>
          <Link to="/">About Us</Link>
          <div className={`close ${isClose}`} onClick={handleCloseClick}>
            <i className="bx bx-x"></i>
          </div>
          <Link to="/login" className="user-link">
            Login
          </Link>
        </div>
        {/* Logo */}
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="/" />
          </Link>
        </div>
        {/* Icon support */}
        <div className="nav-list icons d-flex gap-2 justify-content-end">
          <div className="icon d-flex">
            <a>
              <i className="bx bx-search"></i>
            </a>
          </div>
          <div className="icon user-icon d-flex">
            <div className="dropdown">
              <Link to="login">
                <i className="bx bx-user dropbtn"></i>
                <div className="dropdown-content">
                  <Link to="/Dashboard">Admin</Link>
                  <Link to="/profile">Profile</Link>
                  <Link to="/Login">Login</Link>
                </div>
              </Link>
            </div>
          </div>
          <div className="icon d-flex ">
            <Link to="/cart" className="dropbtn">
              <i className="bx bx-cart  "></i>
            </Link>
            <span></span>
          </div>
        </div>
        {/* <div className={`humburger ${isShow}`} onClick={handleHambergerClick}>
            <i className="bx bx-menu-alt-right"></i>
          </div> */}
      </nav>
    </header>
  );
};

export default Header;
