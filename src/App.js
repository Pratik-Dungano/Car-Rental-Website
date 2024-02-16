import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import aboutUs from './components/aboutUs';
import contactUs from './components/contactUs';

function App() {
  return (
    <Router>
     
     
    <div className="App">
      
      <Navbar />
      <div>
        <Home />
        
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
