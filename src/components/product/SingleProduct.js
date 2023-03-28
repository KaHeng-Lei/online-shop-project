import React from "react";
import { Button, Card } from "react-bootstrap";
import { useGlobalContext } from "../../context/Context";

const SingleProduct = ({ prod, index }) => {
  const {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
    addToCart,
    cart,
    removeFromCart,
  } = useGlobalContext();
  const { name, image, price } = prod;

  return (
    <>
      <Card
        className="single-product"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-btn-container">
          <Card.Img variant="top" src={image} className="single-prod-image" />
          {hoveredIndex === index && (
            <div className="add-to-cart-box">
              {cart.some((p) => p.id === prod.id) ? (
                <Button
                  className="add-to-cart-btn"
                  onClick={() => {
                    removeFromCart(prod.id);
                  }}
                  size="lg"
                >
                  Remove from cart
                </Button>
              ) : (
                <Button
                  className="add-to-cart-btn"
                  size="lg"
                  onClick={() => addToCart(prod)}
                  disabled={!prod.inStock}
                >
                  {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                </Button>
              )}
            </div>
          )}
        </div>

        <Card.Body className="single-product-detail">
          <Card.Title>{name}</Card.Title>
          <Card.Text>NT${price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleProduct;
