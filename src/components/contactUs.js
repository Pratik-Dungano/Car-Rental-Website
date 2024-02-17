import React from 'react';
import { Link} from 'react-router-dom'; 
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="title">
        <h2>Get in Touch</h2>
      </div>
      <div className="box">
        <div className="contact form">
          <h3>Send a Feedback</h3>
          <form>
            <div className="formbox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input type="text" placeholder="Enter First-Name" />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input type="text" placeholder="Enter Last-Name" />
                </div>
              </div>
              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input type="text" placeholder="Enter Email address" />
                </div>
                <div className="inputBox">
                  <span>Mob No.</span>
                  <input type="text" placeholder="Enter Mob No." />
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea placeholder="Write your review...."></textarea>
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <Link to='/'><input type="submit" value="send" /></Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="contact info">
          <h3>Contact Info</h3>
          <div className="infoBox">
            <div>
              <span><ion-icon name="location"></ion-icon></span>
              <p>Rajkot, Gujrat<br/>INDIA</p>
            </div>
            <div>
              <span><ion-icon name="mail"></ion-icon></span>
              <a href="mailto:foodies@gmail.com.in">foodies@gmail.com.in</a>
            </div>
            <div>
              <span><ion-icon name="call"></ion-icon></span>
              <a href="tel:+919304563756">+91 9304563756</a>
            </div>
            <ul className="sci">
              <li></li>
              <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
          </div>
        </div>
        <div className="contact map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29517.098185997904!2d70.7773060395508!3d22.367321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c972761ce515%3A0x3651e3fe1e9df4f8!2sMarwadi%20University!5e0!3m2!1sen!2sin!4v1697397880264!5m2!1sen!2sin"
            width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
