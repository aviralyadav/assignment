import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5" style={{background: 'linear-gradient(45deg, white, rgb(0, 128, 128))'}}>
      <Container>
        <Row className="py-4">
          {/* Social Icons Section */}
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <div>
              <FaFacebook className="mx-2" size={30} />
              <FaTwitter className="mx-2" size={30} />
              <FaInstagram className="mx-2" size={30} />
              <FaLinkedin className="mx-2" size={30} />
            </div>
          </Col>

          {/* Address Section */}
          <Col md={4} className="text-center">
            <h5>Address</h5>
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
            <p>Email: info@company.com</p>
          </Col>

          {/* Useful Links Section */}
          <Col md={4} className="text-center">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Home</a></li>
              <li><a href="#!" className="text-white">About Us</a></li>
              <li><a href="#!" className="text-white">Services</a></li>
              <li><a href="#!" className="text-white">Contact</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        <small>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
