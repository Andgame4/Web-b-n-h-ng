import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/header.scss';
import logo from '../../assets/images/ivy-moda.png';

const Header = () => {

  const [isShow, setIsShow] = useState('');
  const [isClose, setIsClose] = useState('');

  const handleHambergerClick = () => {
    setIsShow("show");
  }

  const handleCloseClick = () => {
    setIsClose("close");
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="row container d-flex">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          {/* List product */}
          <div className="nav-list d-flex">
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/kid">Kid</Link>
            <Link to="/">About Us</Link>
            <div className={`close ${isClose}`} onClick={handleCloseClick}>
              <i className="bx bx-x"></i>
            </div>
            <Link to="/login" className="user-link">Login</Link>
          </div>

          {/* Icon support */}
          <div className="icons d-flex">
            <div className="icon d-flex">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon user-icon d-flex">
              <i className="bx bx-user"></i>
            </div>
            <div className="icon d-flex">
              <i className="bx bx-cart">
                <Link to="/cart"></Link>
              </i>
              <span></span>
            </div>
          </div>

          <div className={`humburger ${isShow}`} onClick={handleHambergerClick}>
            <i className="bx bx-menu-alt-right"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
