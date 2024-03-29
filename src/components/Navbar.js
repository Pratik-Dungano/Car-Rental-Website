import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/car2.png';
import cus from '../images/sell.png';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <nav className={`navbar ${sidebarVisible ? 'show-sidebar' : ''}`}>
      <ul className="navbar-nav sidebar">
        <li></li>
        <li onClick={hideSidebar} className="close-button">
          <Link to="#"><i className="fa-solid fa-x"></i></Link>
        </li>
        <li className="nav-item-1">
          <Link to="/CarList" className="nav-link">Cars Available</Link>
        </li>
        <li className="nav-item-2">
          <Link to="/Booking" className="nav-link">Booking</Link>
        </li>
        <li className="nav-item-1">
          <Link to="/About_us" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item-2">
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
        <div className="login-info">
          <li></li>
          {isAuthenticated && (<li className=""> {user.email}</li>)}
          {isAuthenticated ? (
            <li>
              <button className=" login-link log-out" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="login-btn login-link" onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </div>
      </ul>

      <ul>
        <li className="moving-car"><Link to='/' className="navbar-brand"><img className="logo" src={logo} alt="Speedzzz" /></Link></li>
        <li className="customer"><Link to='/' className="navbar-brand"><img className="sell" src={cus} alt="Speedzzz" /></Link></li>
        <li className="nav-item-1 hideOnMobile">
          <Link to="/CarList" className="nav-link">Cars Available</Link>
        </li>
        <li className="nav-item-2 hideOnMobile">
          <Link to="/Booking" className="nav-link">Booking</Link>
        </li>
        <li className="nav-item-1 hideOnMobile">
          <Link to="/About_us" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item-2 hideOnMobile">
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
        <div className="login-info">
          <li></li>
          {isAuthenticated && (<li className="hideOnMobile"> {user.email}</li>)}
          {isAuthenticated ? (
            <li>
              <button className="hideOnMobile login-link log-out" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="login-btn hideOnMobile login-link" onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </div>
        <li className="menu-button" onClick={showSidebar}><Link><i className="fa-solid fa-bars"></i></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
