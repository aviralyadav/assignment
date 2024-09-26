import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Marquee.css'; // Import the CSS file for styling

const VerticalMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };

  return (
    <Container className="vertical-marquee" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className={`marquee-content ${isPaused ? 'paused' : ''}`}>
        <marquee direction="up">

        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
        <span>Item 4</span>
        <span>Item 5</span>
        </marquee>
      </div>
    </Container>
  );
};

export default VerticalMarquee;
