import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Navbar.css'; // Import your CSS file for navbar styling
import mov1 from '../images/mov1.png';
import mov2 from '../images/mov2.png';
import mov3 from '../images/mov3.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="mov1" src={mov1} alt="Speedzzz"/>
          <img className="mov2" src={mov2} alt="Speedzzz"/>
          <img className="mov3" src={mov3} alt="Speedzzz"/>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item-1">
            <Link to="/car-list" className="nav-link">Cars Available</Link>
          </li>
          
          <li className="nav-item-2">
            <Link to="/booking" className="nav-link">Booking</Link>
          </li>
          <li className="nav-item-1">
            <Link to="/about" className="nav-link">About Us</Link>
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
