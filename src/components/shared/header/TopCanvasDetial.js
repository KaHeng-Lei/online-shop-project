import React from "react";
import { Offcanvas, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/Context";
import { AiOutlineSearch } from "react-icons/ai";

const TopCanvasDetial = () => {
  const { filterBySearch, searchInput, setSearchInput } = useGlobalContext();
  return (
    <div style={{ width: "90%", margin: "15px auto" }}>
      <Offcanvas.Header
        className="justify-content-end"
        closeButton
      ></Offcanvas.Header>
      <Offcanvas.Body>
        <Form className="d-flex justify-content-between">
          <Col md={11}>
            <Form.Control
              placeholder="Search a product"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </Col>
          <Col md={1} className="d-flex justify-content-end">
            <Link
              to="/products"
              type="submit"
              onClick={() => filterBySearch(searchInput)}
            >
              <AiOutlineSearch
                style={{
                  fontSize: "1.5rem",
                  textDecoration: "none",
                  color: "#191314",
                }}
              />
            </Link>
          </Col>
        </Form>
      </Offcanvas.Body>
    </div>
  );
};

export default TopCanvasDetial;
