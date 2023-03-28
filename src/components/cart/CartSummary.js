import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useGlobalContext } from "../../context/Context";

const CartSummary = () => {
  const { totalPrice } = useGlobalContext();
  return (
    <ListGroup className="cart-summary-container">
      <ListGroup.Item
        style={{
          fontSize: "1.3rem",
          backgroundColor: "#f2f2f2",
          height: "50px",
        }}
      >
        Order Summary
      </ListGroup.Item>
      <ListGroup.Item
        style={{
          fontSize: "0.85rem",
          lineHeight: "2rem",
          padding: "15px",
        }}
      >
        <div className="d-flex justify-content-between">
          <span>Item Subtotal: </span>
          <span>NT$ {totalPrice}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Delivery Fee:</span>
          <span>NT$ 80</span>
        </div>
        <div>
          <a href="https://codepen.io/your-work">Apply A coupon Code</a>
        </div>
        <div className="underline" style={{ margin: "15px" }}></div>
        <div
          className="d-flex justify-content-between"
          style={{ fontWeight: "700" }}
        >
          <span>Total: </span>
          <span>NT$ {totalPrice + 80}</span>
        </div>
        <Button variant="success" style={{ width: "95%", margin: "10px 5px" }}>
          Proceed to Checkout
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartSummary;
