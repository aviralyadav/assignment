import React from "react";
import { Typography } from "@mui/material";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./Home.css";
import SliderComponent from "../Slider/Slider";
import ImageSlider from "../Slider/ImageSlider";
import Clients from "../Clients/Clients";
import ImageNew from '../../assets/images/new.png';
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className="m-3">
      <Row className="mt-4">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Row className="">
                <Col xs={6} md={3}>
                  <div
                    className="menu-itm"
                    style={{ backgroundColor: "orange" }}
                  >
                    <div className="h-35">
                      <div>Govt. Outsourcing (Contractual)</div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div
                    className="menu-itm"
                    style={{ backgroundColor: "yellowgreen" }}
                  >
                    <div className="h-35">
                      <div>App Skill Development</div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div
                    className="menu-itm"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    <div className="h-35">
                      <div>Software Development</div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="menu-itm" style={{ backgroundColor: "cyan" }}>
                    <div className="h-35">
                      <div>Social Media Development</div>
                    </div>
                  </div>
                </Col>
                {/* <Col xs={6} md={2}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Column 1</Card.Title>
                      <Card.Text>
                        This is some text within a card in the first column.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col> */}
              </Row>
              <Row>
                <Col md={12} xs={12}>
                  <SliderComponent />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="upload-cv">
            <Card.Body>
              <Card.Title className="career-title">Career</Card.Title>
              <Card.Text>
                <h5 className="career-head">Current Job Opening</h5>
                <div className="career-noti">
                    <Row className="mb-3">
                        <Col md={8} xs={12}>
                        <div className="d-flex align-items-start justify-content-between p-2">
                            <img className="mt-1 m-1" src={ImageNew} width={'10%'} />
                            <div>National Institute Of Ayurveda -Panchkula(HARYANA)</div>
                        </div>
                        </Col>
                        <Col md={4} xs={12} className="d-flex align-items-center flex-column justify-content-center">
                        <Button className="apply-now-btn" variant="primary">Apply Now</Button>
                        </Col>
                    </Row>
                </div>
                <marquee className="p-3 marqu" direction="up" behavior="scroll" 
                scrollamount="5" 
                onMouseOver={(e)=>{e.stopPropagation()}} 
                // onMouseOut={(e)=>{e.startPropagation()}}
                >
                    <div style={{display:'flex',marginTop:20}}>
                          <a id="scroll" href="job?id=7">
                            <p style={{color:'#030101',fontWeight:400}}>  
                            <img className="mt-1 m-1" src={ImageNew} width={'10%'} />
                                Data Entry Operator(LOCTION-Jhashi) -: 
                                <i style={{color:'blue',fontWeight:800}}>Apply Now</i></p>
                                </a>
                    </div>
                    <div style={{display:'flex',marginTop:20}}>
                            <a id="scroll" href="job?id=1">
                                 <p style={{color:'#030101',fontWeight:400}}>  
                                 <img className="mt-1 m-1" src={ImageNew} width={'10%'} />
                                    National Institute Of Ayurveda -Panchkula(HARYANA) -: 
                                    <i style={{color:'blue',fontWeight:800}}>Apply Now</i>
                                    </p>
                                </a>
                                </div>
                 </marquee>
                 {/* <Marquee pauseOnHover={true}>
                 <div style={{display:'flex',marginTop:20}}>
                          <a id="scroll" href="job?id=7">
                            <p style={{color:'#030101',fontWeight:400}}>  
                            <img className="mt-1 m-1" src={ImageNew} width={'10%'} />
                                Data Entry Operator(LOCTION-Jhashi) -: 
                                <i style={{color:'blue',fontWeight:800}}>Apply Now</i></p>
                                </a>
                    </div>
                    <div style={{display:'flex',marginTop:20}}>
                            <a id="scroll" href="job?id=1">
                                 <p style={{color:'#030101',fontWeight:400}}>  
                                 <img className="mt-1 m-1" src={ImageNew} width={'10%'} />
                                    National Institute Of Ayurveda -Panchkula(HARYANA) -: 
                                    <i style={{color:'blue',fontWeight:800}}>Apply Now</i>
                                    </p>
                                </a>
                                </div>
  </Marquee> */}
                 <div>
                    <h5 className="career-head">Drop your cv</h5>
                 </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="mt-4 mb-2">
        <Typography variant="body1" align="left">
          Popular Services
        </Typography>
        <ImageSlider />
      </div>
      <div className="mt-4 mb-4">
        <Typography variant="body1" align="left">
          Our Clients
        </Typography>
        <Clients />
      </div>
    </div>
  );
};

export default Home;
