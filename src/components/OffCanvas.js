import React from "react";
import { Offcanvas } from "react-bootstrap";

const OffCanvas = ({ placement, handleClose, show, style, children }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={placement}
      style={style}
    >
      {children}
    </Offcanvas>
  );
};

export default OffCanvas;
