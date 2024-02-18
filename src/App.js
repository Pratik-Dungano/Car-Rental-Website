import React,{useState} from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';


import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About_us from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CarsList from './components/CarsList';
import carsData from './components/CarData';
// import Booking from './components/BookingInfo';
// import customerData from './components/CustomerData';
// import BookingForm from './components/BookingForm';
// import Car from './components/Car';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<><Home/><About_us/></>}/>
        <Route path='contact' element={<><ContactUs/></>}/>
        <Route path='About_us' element={<><About_us/></>}/>
        <Route path="CarList" element={<><CarsList cars={carsData}/></>}/>
        {/* <Route path='Booking_Form' element={<><BookingForm /></>}/> */}
        {/* <Route path="Booking" element={<><Booking booking={customerData}/></>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;