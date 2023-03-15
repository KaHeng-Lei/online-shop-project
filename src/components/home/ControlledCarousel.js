import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ControlledCarousel = ({ photos, imageStyle, variant }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="carousel-container"
      activeIndex={index}
      onSelect={handleSelect}
      variant={variant}
    >
      {photos?.map((photo) => {
        const { id, name, image } = photo;
        return (
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={image}
              alt={name}
              style={imageStyle}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ControlledCarousel;
