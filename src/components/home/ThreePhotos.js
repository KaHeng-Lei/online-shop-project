import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useGlobalContext } from "../../context/Context";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const ThreePhotos = () => {
  const { products } = useGlobalContext();
  const [index, setIndex] = useState(0);

  const featuredProducts = products?.filter((prod) => prod.isFeatured === true);

  const length = featuredProducts?.length;
  const next = () => {
    setIndex(index === length - 3 ? 0 : index + 1);
  };

  const prev = () => {
    setIndex(index === 0 ? length - 3 : index - 1);
  };
  return (
    <Container className="threePhotosContainer">
      <Row>
        {[...Array(3)].map((_x, i) => {
          return (
            <Col
              sm={12}
              lg={4}
              key={uuidv4()}
              className="threePhotos-box position-relative"
            >
              {i === 0 && (
                <AiOutlineArrowLeft
                  className="arrow arrow-left"
                  onClick={prev}
                />
              )}
              {i === 2 && (
                <AiOutlineArrowRight
                  className="arrow arrow-right"
                  onClick={next}
                />
              )}
              <img
                className="threePhotos"
                src={featuredProducts[index + i].image}
                alt={featuredProducts[index + i].name}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ThreePhotos;
