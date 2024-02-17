import React from 'react';
import './AboutUs.css';
import about2 from '../images/about2.jpg';
import about1 from '../images/about1.jpg';
import about4 from '../images/about4.avif';
import about5 from '../images/about5.avif';
import about7 from '../images/about7.jpg';

function AboutUs() {
  return (
<>  
<div className="hero">
<div className="heading">
            <h1>-*-*-*-*-*-*-*-About Us-*-*-*-*-*-*-*-</h1>
        </div>
        <div className="container">
          <div className="hero-content">
                <h2>Welcome to --<b>RideSafe</b>--<h3>Your Trusted Companion for Safe and Exciting Adventures</h3></h2>
                <p>At <b>RideSafe</b>, our mission is to redefine the car rental experience by offering exceptional service, reliability, and affordability. We aim to make renting a car as seamless as possible, ensuring that every journey with us is comfortable, convenient, and memorable.</p>
                <h2>Our Mission</h2>
                <p>At <b>RideSafe</b>, our mission is to redefine the car rental experience by offering exceptional service, reliability, and affordability. We aim to make renting a car as seamless as possible, ensuring that every journey with us is comfortable, convenient, and memorable.</p>
                <h2>What Sets Us Apart</h2>
                <p><ul>
                  <li></li>
                  <li>
                  <b>Extensive Fleet:</b> Choose from a diverse range of vehicles, including compact cars, SUVs, sedans, and luxury vehicles, all meticulously maintained and serviced to ensure your safety and comfort.
                  </li>
                  <li>
                  <b>Convenient Booking:</b> With our user-friendly online platform, booking your rental car is quick and effortless. Simply select your desired vehicle, pick-up location, and rental duration, and you're ready to hit the road.
                  </li>
                  <li>
                  <b>Exceptional Customer Service:</b> Our team of dedicated professionals is committed to providing personalized assistance and support throughout your rental experience. Whether you have questions about your reservation or need assistance during your trip, we're here to help.
                  </li>
                  <li>
                  <b>Competitive Pricing:</b> We believe that quality car rental services shouldn't break the bank. That's why we offer competitive rates and transparent pricing, with no hidden fees or surprises.
                  </li>
                  </ul>
                </p>
                <h2>Our Commitment to Sustainability</h2>
                <p>At <b>RideSafe</b>, we're committed to reducing our environmental footprint and promoting sustainable practices within the car rental industry. From investing in <b>fuel-efficient</b> vehicles to implementing <b>eco-friendly</b> initiatives, we're dedicated to protecting the planet for future generations.</p>
                <button className="cta-button">Learn More</button>
            </div>
            <div className="hero-image">
                <img className="about-image" src={about1} alt="our cars"/>
                <img className="about-image" src={about2} alt="our commitment"/>
                <img className="about-image" src={about4} alt="our story"/>
                <img className="about-image" src={about5} alt="our story"/>
                <img className="about-image" src={about7} alt="our story"/>
            </div>
        </div>
</div>
    
  </> 
  );
}

export default AboutUs;
