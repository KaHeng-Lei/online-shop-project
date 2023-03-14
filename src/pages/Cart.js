import React from "react";
import CartDetail from "../components/CartDetail";
import DeliveryPayment from "../components/DeliveryPayment";
import CartSummary from "../components/CartSummary";

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
