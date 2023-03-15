import React from "react";
import CartDetail from "../components/cart/CartDetail";
import DeliveryPayment from "../components/cart/DeliveryPayment";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  return (
    <div
      className="cart-container"
      style={{ width: "1000px", margin: "0 auto" }}
    >
      <CartDetail />
      <div className="d-flex justify-content-between">
        <DeliveryPayment />
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
