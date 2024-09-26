// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
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

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
      {/* <Navbar /> */}
    </Provider>
  );
};

export default App;
