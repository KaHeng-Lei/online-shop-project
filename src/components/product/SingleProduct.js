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
    <div>
      <Card
        className="single-product"
        style={{ width: "12rem", height: "24rem" }}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-btn-container">
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "12rem", height: "16rem", objectFit: "cover" }}
          />
          {hoveredIndex === index && (
            <div className="add-to-cart-btn">
              {cart.some((p) => p.id === prod.id) ? (
                <Button
                  onClick={() => {
                    removeFromCart(prod.id);
                  }}
                  size="lg"
                  style={{
                    backgroundColor: "#191314",
                    height: "3rem",
                    opacity: 0.8,
                    position: "absolute",
                    top: "13rem",
                    width: "100%",
                    border: "none",
                  }}
                >
                  Remove from cart
                </Button>
              ) : (
                <Button
                  size="lg"
                  style={{
                    backgroundColor: "#191314",
                    height: "3rem",
                    opacity: 0.8,
                    position: "absolute",
                    top: "13rem",
                    width: "100%",
                    border: "none",
                  }}
                  onClick={() => addToCart(prod)}
                  disabled={!prod.inStock}
                >
                  {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                </Button>
              )}
            </div>
          )}
        </div>

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>NT${price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
