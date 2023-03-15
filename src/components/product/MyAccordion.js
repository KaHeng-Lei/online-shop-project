import React from "react";
import { Accordion } from "react-bootstrap";

const MyAccordion = ({ title, children }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MyAccordion;
