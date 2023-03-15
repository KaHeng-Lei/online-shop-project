import React from "react";
import { ListGroup } from "react-bootstrap";
import Select from "react-select";
import { useGlobalContext } from "../../context/Context";

const DeliveryPayment = () => {
  const {
    destination,
    deliveryMethods,
    paymentMethod,
    setDestinationOption,
    setDeliveryOption,
    setPaymentOption,
  } = useGlobalContext();

  return (
    <ListGroup style={{ width: "65%", marginTop: "20px" }}>
      <ListGroup.Item
        style={{
          fontSize: "1.3rem",
          backgroundColor: "#f2f2f2",
          height: "50px",
        }}
      >
        Select Delivery & Payment Method
      </ListGroup.Item>
      <ListGroup.Item>
        <div
          style={{
            fontSize: "0.85rem",
            padding: "15px 0",
          }}
        >
          <span>Shipping Destination</span>
          <div
            className="App"
            style={{ marginTop: "5px", marginBottom: "15px" }}
          >
            <Select
              className="basic-single"
              defaultValue={destination[8]}
              onChange={setDestinationOption}
              options={destination}
            />
          </div>
          <span>Delivery Method</span>
          <div
            className="App"
            style={{ marginTop: "5px", marginBottom: "15px" }}
          >
            <Select
              className="basic-single"
              defaultValue={deliveryMethods[1]}
              onChange={setDeliveryOption}
              options={deliveryMethods}
            />
          </div>
          <span>Payment Method</span>
          <div className="App" style={{ marginTop: "5px" }}>
            <Select
              className="basic-single"
              defaultValue={paymentMethod[0]}
              onChange={setPaymentOption}
              options={paymentMethod}
            />
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default DeliveryPayment;
