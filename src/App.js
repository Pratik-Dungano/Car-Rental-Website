import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';


import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About_us from './components/AboutUs';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<><Home/><About_us/></>}/>
        <Route path='contact' element={<><ContactUs/></>}/>
        <Route path='About_us' element={<><About_us/></>}/>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;