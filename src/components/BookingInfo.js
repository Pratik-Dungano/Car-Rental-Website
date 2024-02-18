import React from 'react';
import './BookingInfo.css';

const BookingConfirmation = ({ bookingInfo }) => {
  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmation</h1>
      <div className="confirmation-details">
        <p><strong>Name:</strong> {bookingInfo.name}</p>
        <p><strong>Email:</strong> {bookingInfo.email}</p>
        <p><strong>Pick-up Date:</strong> {bookingInfo.pickupDate}</p>
        <p><strong>Return Date:</strong> {bookingInfo.returnDate}</p>
        <p><strong>Car Type:</strong> {bookingInfo.carType}</p>
        <p><strong>Number of Days:</strong> {bookingInfo.numDays}</p>
        <p><strong>Total Price:</strong> ${bookingInfo.totalPrice}</p>
      </div>
      <div className="confirmation-message">
        <p>Thank you for your booking! Your car rental is confirmed.</p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
