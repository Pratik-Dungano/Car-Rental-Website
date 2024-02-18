import React, { useState } from 'react';
import './BookingForm.css';

const CarRentingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    returnDate: '',
    carType: '',
    numDays: '',
    totalPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Calculate total price based on numDays and carType
    if (name === 'numDays' || name === 'carType') {
      calculateTotalPrice();
    }
  };

  const calculateTotalPrice = () => {
    // Add your logic to calculate the total price based on numDays and carType
    // For example:
    const basePricePerDay = 50;
    const additionalPricePerDay = 20;

    const totalPrice = (parseInt(formData.numDays) * basePricePerDay) + 
                       ((parseInt(formData.numDays) - 1) * additionalPricePerDay);
    
    setFormData({
      ...formData,
      totalPrice: totalPrice.toFixed(2) // Ensure totalPrice is formatted as a decimal
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Booking Date:</label>
        <input
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Return Date:</label>
        <input
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Car Type:</label>
        <select
          name="carType"
          value={formData.carType}
          onChange={handleChange}
          required
        >
          <option value="">Select Car Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
        </select>
      </div>
      <div>
        <label>Number of Days:</label>
        <input
          type="number"
          name="numDays"
          value={formData.numDays}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
      <div>
        <label>Total Price:</label>
        <input
          type="text"
          name="totalPrice"
          value={formData.totalPrice}
          readOnly
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarRentingForm;
