import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
  const slides = [
    [
      'https://via.placeholder.com/350?text=Image+1',
      'https://via.placeholder.com/350?text=Image+2',
      'https://via.placeholder.com/350?text=Image+3',
      'https://via.placeholder.com/350?text=Image+4',
      'https://via.placeholder.com/350?text=Image+5',
    ],
    [
      'https://via.placeholder.com/150?text=Image+6',
      'https://via.placeholder.com/150?text=Image+7',
      'https://via.placeholder.com/150?text=Image+8',
      'https://via.placeholder.com/150?text=Image+9',
      'https://via.placeholder.com/150?text=Image+10',
    ],
    [
      'https://via.placeholder.com/150?text=Image+11',
      'https://via.placeholder.com/150?text=Image+12',
      'https://via.placeholder.com/150?text=Image+13',
      'https://via.placeholder.com/150?text=Image+14',
      'https://via.placeholder.com/150?text=Image+15',
    ],
  ];

  return (
    <Carousel controls={true} indicators={true} interval={3000}>
      {slides.map((slideImages, index) => (
        <Carousel.Item key={index}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            {slideImages.map((image, imgIndex) => (
              <div key={imgIndex} style={{ margin: '0 10px' }}>
                <img
                  className="d-block"
                  src={image}
                  alt={`Slide ${index} Image ${imgIndex}`}
                  style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
