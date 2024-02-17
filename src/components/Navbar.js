import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <nav className="navbar">
  
      <ul className="navbar-nav sidebar">
      <li onclick={hideSidebar}><Link href="#"><i class="fa-solid fa-x"></i></Link></li>
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
        <li>
          <button className="login-btn"><Link to="/login" className="login-link">login/register</Link></button>
        </li>
      </ul>
      
      <ul>
      <li className="moving-car" ><Link to='/' className="navbar-brand"><img className="logo" src={logo} alt="Speedzzz"/></Link></li>
        <li className="nav-item-1 hideOnMobile">
          <Link to="/car-list" className="nav-link">Cars Available</Link>
        </li>
        <li className="nav-item-2 hideOnMobile">
          <Link to="/booking" className="nav-link">Booking</Link>
        </li>
        <li className="nav-item-1 hideOnMobile">
          <Link to="/About_us" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item-2 hideOnMobile">
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
        <li>
          <button className="login-btn hideOnMobile"><Link to="/login" className="login-link">login/register</Link></button>
        </li>
          <li class="menu-button " onclick={showSidebar}><Link ><i class="fa-solid fa-bars"></i></Link></li>
      </ul>
  </nav>
  );
}

export default Navbar;
