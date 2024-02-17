import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Navbar.css'; // Import your CSS file for navbar styling
import logo from '../images/logo.png';



function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to='/' className="navbar-brand">
          <img className="logo" src={logo} alt="Speedzzz"/>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item-1">
            <Link to="/car-list" className="nav-link">Cars Available</Link>
          </li>
          
          <li className="nav-item-2">
            <Link to="/booking" className="nav-link">Booking</Link>
          </li>
          <li className="nav-item-1">
            <Link to="/About_us" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item-2">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
            <button className="login-btn"><Link to="/login" className="login-link">login/register</Link></button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;