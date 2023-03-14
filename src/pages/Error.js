import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/">back to homepage</Link>
    </Container>
  );
};

export default Error;
