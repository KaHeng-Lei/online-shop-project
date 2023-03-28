import React from "react";
import CartDetail from "../components/cart/CartDetail";
import DeliveryPayment from "../components/cart/DeliveryPayment";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  return (
    <div className="cart-container" style={{ width: "100%", margin: "0 auto" }}>
      <CartDetail />
      <div className="cart-second-container">
        <DeliveryPayment />
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
