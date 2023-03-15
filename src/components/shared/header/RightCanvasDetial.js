import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineClose, AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/Context";

const RightCanvasDetial = ({ handleClose }) => {
  const { cart, removeFromCart, setShowRightOffCanvas } = useGlobalContext();
  return (
    <div className="cart-container">
      <div className="cart-title">
        <h2>Shopping Cart</h2>
        <div onClick={() => setShowRightOffCanvas(false)}>
          <AiOutlineClose fontSize="20px" style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="underline"></div>
      {cart.length > 0 ? (
        <>
          {cart.map((prod) => {
            const { id, name, image, price } = prod;
            return (
              <span className="cartItem" key={id}>
                <img src={image} className="cartItemImg" alt={name} />
                <div className="cartItemDetail">
                  <span>{name}</span>
                  <span>NT${price?.split(".")[0]}</span>
                </div>
                <AiOutlineCloseSquare
                  fontSize="20px"
                  style={{ cursor: "pointer" }}
                  onClick={() => removeFromCart(id)}
                />
              </span>
            );
          })}
          <Link to="/cart" onClick={handleClose}>
            <Button style={{ width: "90%", margin: "0 10px" }}>
              Go to Cart
            </Button>
          </Link>
        </>
      ) : (
        <span style={{ padding: 10 }}>Cart is Empty!</span>
      )}
    </div>
  );
};

export default RightCanvasDetial;
