import React from 'react';
import './Car.css';

const Car = ({ car }) => {
  const handleBookNow = () => {
    // Handle booking logic here
    console.log(`Booking ${car.make} ${car.model}`);
  };

  return (
    <div className="car">
      <img src={car.photo} alt={`${car.make} ${car.model}`} />
      <div className="details">
        <h2>{car.make} {car.model}</h2>
        <p>Year: {car.year}</p>
        <p>Price: ${car.price}</p>
        <p>{car.available ? 'Available' : 'Not Available'}</p>
        {car.available ? (
          <button className="btn" onClick={handleBookNow}>Book Now</button>
        ) : (
          <button className="btn" disabled>Not Available</button>
        )}
      </div>
    </div>
  );
};

export default Car;
