import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling

function Home() {
  return (
    <div className="home">
      <header>
        <div className="header-image"></div>
        <h1 className="header-heading">Welcome to RideSafe Rentals</h1>
        <p className="header-para">Where Safety and Enjoyment Go Hand in Hand</p>
        <Link to="/car-list" className="btn btn-primary view">View Available Cars</Link>
      </header>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-car"></i>
          </div>
          <h3>Wide Range of Cars</h3>
          <p>Choose from a diverse selection of vehicles to suit your needs.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3>Safety First</h3>
          <p>Our priority is your safety. All vehicles are regularly inspected and sanitized.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <h3>Affordable Prices</h3>
          <p>Enjoy competitive rates and transparent pricing with no hidden fees.</p>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to Rent a Car?</h2>
        <Link to="/booking" className="btn btn-secondary book">Book Now</Link>
      </section>
    </div>
  );
}

export default Home;
