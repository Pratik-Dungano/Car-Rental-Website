import React from 'react';
import { Link, BrowserRouter as Router,Route } from 'react-router-dom'; // Import Link from 'react-router-dom' for routing
import './Footer.css';



function Footer() {
  return (
   
        
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <Link to="#"><i className="fab fa-instagram"></i></Link>
          <Link to="#"><i className="fab fa-facebook"></i></Link>
          <Link to="#"><i className="fab fa-twitter"></i></Link>
          <Link to="#"><i className="fab fa-youtube"></i></Link>
        </div>
        <div className="footerNav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About_us">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>Copyright &copy;2024; Designed by <span className="designer">Pratik Dungano</span></p>
      </div>
    </footer>

   
  );
}

export default Footer;
