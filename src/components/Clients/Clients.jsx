import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

const Clients = () => {
  const cards = [
    { icon: MicrosoftIcon, text: 'Programming & Services' },
    { icon: MicrosoftIcon, text: 'Graphics & Design.' },
    { icon: MicrosoftIcon, text: 'Digital Marketing' },
    { icon: MicrosoftIcon, text: 'Writing and Translation' },
    { icon: MicrosoftIcon, text: 'Videos & Animation' },
    { icon: MicrosoftIcon, text: 'AI Services' },
    { icon: MicrosoftIcon, text: 'Music & Audio' },
    { icon: MicrosoftIcon, text: 'Business' },
    { icon: MicrosoftIcon, text: 'Consulting' },
  ];

  return (
    <div className='mt-3'>
    <Row xs={1} md={2} lg={6} className="g-4">
      {cards.map((card, index) => (
        <Col key={index}>
          <Card style={{height: '15vh'}}>
            <Card.Body>
              {/* <Card.Img variant='top' src={card.icon}/> */}
              <div className='flex justify-content-between'><MicrosoftIcon /></div>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Clients;
