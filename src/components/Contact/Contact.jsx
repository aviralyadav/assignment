import React from "react";
import { Typography } from "@mui/material";
import { Breadcrumb, Card, Col, Container, Row } from "react-bootstrap";
import ContactBanner from "../../assets/images/contact_banner.png";
import "./Contact.css";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact-header-area">
      <Row>
        <Col md={6} lg={6} className="d-flex align-items-center">
          <div>
            <Typography variant="h4" align="left" sx={{ mt: 3 }}>
              Contact Us
            </Typography>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

              <Breadcrumb.Item active>Contact</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Col>
        <Col md={6} lg={6}>
          <div class="contact-header-image">
            <img src={ContactBanner} alt="Image" />
          </div>
        </Col>
      </Row>

    {/* contact medium */}
      <Row xs={1} md={4} lg={4} className="contact-cards mb-4">
        <Col >
          <Card>
            <Card.Body>
              <div className='icon-con'><AddLocationIcon fontSize="40px" /></div>
              <h3>Address</h3>
              <Card.Text>205, 1st Floor, Chandralok Tower, Kapoorthala, Aliganj, Lucknow (UP)</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Body>
              <div className='icon-con'><EmailIcon fontSize="40px" /></div>
              <h3>Email Address</h3>
              <Card.Text className="mb-0">hr.sapskills.staffing@gmail.com</Card.Text>
              <Card.Text>hr.sapskills.staffing@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col >
          <Card>
            <Card.Body>
              <div className='icon-con'><LocalPhoneIcon fontSize="40px" /></div>
              <h3>Phone Number</h3>
              <Card.Text className="mb-0">0522-4571117</Card.Text>
              <Card.Text>0522-4571117</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Body>
              <div className='icon-con'><WhatsAppIcon fontSize="40px" /></div>
              <h3>WhatsApp</h3>
              <Card.Text className="mb-0">8009940004</Card.Text>
              <Card.Text>8009940004</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    {/* contact text */}
    <div class="section-title mt-5">
            <span>Get In Touch</span>
            <h2>Need Help In Recruiting Staff?</h2>
            <p>Strengthen your workforce with our customized Staffing Services. We provide flexible staffing solutions for temporary, permanent, or&nbsp;contract&nbsp;roles.</p>
    </div>
    {/* contact form */}
    <div className="contact-form mb-4">
    <ContactForm />
    </div>
    </div>
  );
};

export default Contact;
