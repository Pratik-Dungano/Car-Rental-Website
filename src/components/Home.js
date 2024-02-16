import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="jumbotron">
        <h1>Welcome to Car Rental</h1>
        <p>Find the perfect car for your trip!</p>
        <Link to="/cars" className="btn btn-primary">View Cars</Link>
      </div>
    </div>
  );
}

export default Home;
