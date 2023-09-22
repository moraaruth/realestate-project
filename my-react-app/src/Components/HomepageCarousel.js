import React, { useEffect, useState }from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function HomepageCarousel() {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % 3); 
        }, 3000); 
    
        return () => clearInterval(interval);
      }, []);
    return (
      <Carousel  activeIndex={index} onSelect={() => {}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/09/20/13/07/kitchen-3690795_640.jpg"
            alt="First slide"
          
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/06/18/21/31/house-2417321_640.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/08/15/20/53/bad-3609071_640.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
export default HomepageCarousel;