// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css'
import Weather from './components/weather';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/AboutUs/About';
import Services from './components/Services/Services';
// import NotFound from './components/Notfound/NotFound';
import Footer from './components/Footer/Footer';
import { Container } from '@mui/material';
import NotFound from './components/NotFound/NotFound';
import Career from './components/Career/Career';
import Gallery from './components/Gallery/Gallery';
import CVUpload from './components/CVUpload/CVUpload';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Header />
      <div sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/cvupload" element={<CVUpload />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
      {/* <Navbar /> */}
    </Provider>
  );
};

export default App;
