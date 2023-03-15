import React from "react";
import { Offcanvas, Navbar, FormControl } from "react-bootstrap";
import { useGlobalContext } from "../../../context/Context";

const TopCanvasDetial = () => {
  const { filterBySearch } = useGlobalContext();
  return (
    <>
      <Offcanvas.Header
        style={{ width: "90%", marginTop: "15px" }}
        className="justify-content-end"
        closeButton
      ></Offcanvas.Header>
      <Offcanvas.Body>
        <Navbar.Text>
          <FormControl
            placeholder="Search a product"
            className="m-auto"
            style={{ width: "80%" }}
            onChange={(e) => {
              filterBySearch(e.target.value);
            }}
          />
        </Navbar.Text>
      </Offcanvas.Body>
    </>
  );
};

export default TopCanvasDetial;
