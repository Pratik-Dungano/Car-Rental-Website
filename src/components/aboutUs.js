import React from 'react';
import './AboutUs.css';
import about3 from '../images/about3.jpg';
import about2 from '../images/about2.jpg';
import about1 from '../images/about1.jpg';

function AboutUs() {
  return (
<>
    <div className="heading">
            <h1>About Us</h1>
        </div>
        <div className="container">
            <div className="hero-content">
                <h2>Welcome to Foodies - Where Flavor Meets Tradition</h2>
                <p>At <b>Foodies</b>, we are more than just a place to order food; we are a culinary journey that celebrates the rich tapestry of flavors, rooted in tradition and served with a modern twist. Our passion for food, quality, and exceptional customer service has driven us to create a platform where you can savor delectable dishes from the comfort of your home.</p>
                <h2>Our Story</h2>
                <p>Our story began with a shared love for food and a desire to bring the authentic taste of our heritage to a broader audience. <b>Foodies</b> was founded by <b>Pratik Dungano</b>, who are avid food enthusiasts with a background in culinary arts. They envisioned a place where people could discover and savor the exquisite taste of all types of cuisine, lovingly prepared using time-honored recipes passed down through.</p>
                <h2>Our Commitment</h2>
                <p>We take pride in our commitment to delivering an unforgettable dining experience to your doorstep. Every dish we prepare is a labor of love, made from the freshest ingredients, and infused with the warmth and richness of all types of Cuisine. Our chefs are dedicated to preserving the essence of traditional recipes while incorporating innovative techniques that make each dish a culinary masterpiece.</p>
                <button className="cta-button">Learn More</button>
            </div>
            <div className="hero-image">
                <img className="about-image" src={about1} alt="our cars"/>
                <img className="about-image" src={about3} alt="our story"/>
                <img className="about-image" src={about2} alt="our commitment"/>
            </div>
        </div>
        </> 
  );
}

export default AboutUs;
