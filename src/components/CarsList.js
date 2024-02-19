import React from 'react';
import Car from './Car';
import './CarsList.css';

const CarsList = ({ cars }) => {
  return (
    <div className="cars-list">
      <div className="list-details">
      <h1>Cars Available for Booking</h1>
      <div className='data'>
      {cars.map((car, index) => (
        index % 2 === 0 && (
        <div className="car-details">
          <div className="car-container" key={index}>
            <Car car={car} />
            {index + 1 < cars.length && <Car car={cars[index + 1]} />}
          </div>
        </div>
        )
      ))}
      </div>
      </div>
    </div>
  );
};

export default CarsList;
