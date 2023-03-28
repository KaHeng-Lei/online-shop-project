import React from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useGlobalContext } from "../../context/Context";
import { FiTrash2 } from "react-icons/fi";

const CartDetail = () => {
  const { cart, changeCartQty, removeFromCart, subtotals, totalQty } =
    useGlobalContext();
  return (
    <ListGroup style={{ margin: "20px auto 0 auto", width: "100%" }}>
      <ListGroup.Item
        style={{
          fontSize: "1.3rem",
          backgroundColor: "#f2f2f2",
          height: "50px",
        }}
      >
        <div className="cart-list-title">
          <span>Shopping Cart ({totalQty}) items</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        style={{
          fontSize: "0.85rem",
          height: "50px",
          lineHeight: "2rem",
        }}
      >
        <Row xs={0}>
          <Col sm={4}>
            <span>Product Infomation</span>
          </Col>
          <Col sm={2}>
            <span>Unit Price</span>
          </Col>
          <Col sm={2}>
            <span>Qty</span>
          </Col>
          <Col sm={2}>
            <span>Subtotal</span>
          </Col>
          <Col sm={2}>
            <span></span>
          </Col>
        </Row>
      </ListGroup.Item>
      {cart?.map((prod) => {
        const { id, name, price, qty, inStock, image } = prod;
        return (
          <ListGroup.Item key={id}>
            <Row>
              <Col xs={3} sm={2}>
                <Image src={image} alt={name} fluid thumbnail />
              </Col>
              <Col xs={3} sm={2}>
                <span>{name}</span>
              </Col>
              <Col xs={6} sm={2}>
                NT${price}
              </Col>
              <Col xs={6} sm={2}>
                <Form.Select
                  value={qty}
                  onChange={(e) => {
                    const newQty = e.target.value;
                    changeCartQty(id, newQty);
                  }}
                >
                  {[...Array(inStock)].map((x, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col xs={4} sm={2}>
                NT${subtotals?.[id]}
              </Col>
              <Col xs={2} sm={2}>
                <Button
                  type="button"
                  variant="light"
                  onClick={() => removeFromCart(id)}
                >
                  <FiTrash2 fontSize="20px" />
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CartDetail;
