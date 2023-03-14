import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import OffCanvas from "./OffCanvas";
import LeftCanvasDetial from "./LeftCanvasDetial";
import TopCanvasDetial from "./TopCanvasDetial";
import RightCanvasDetial from "./RightCanvasDetial";
import { useGlobalContext } from "../context/Context";

import { Container, Nav, Navbar, NavbarBrand, Badge } from "react-bootstrap";
const Header = () => {
  const {
    totalQty,
    showTopOffCanvas,
    setShowTopOffCanvas,
    showLeftOffCanvas,
    setShowLeftOffCanvas,
    showRightOffCanvas,
    setShowRightOffCanvas,
  } = useGlobalContext();

  const handleCloseTop = () => setShowTopOffCanvas(false);
  const handleShowTop = () => setShowTopOffCanvas(true);
  const handleCloseLeft = () => setShowLeftOffCanvas(false);
  const handleShowLeft = () => setShowLeftOffCanvas(true);
  const handleCloseRight = () => setShowRightOffCanvas(false);
  const handleShowRight = () => setShowRightOffCanvas(true);

  return (
    <Navbar variant="dark">
      <Container className="navbar-container">
        <div className="top-and-left-canvas-icon">
          <Nav className="sidebar-toggle" onClick={handleShowLeft}>
            <AiOutlineMenu color="white" fontSize="25px" />
          </Nav>
          <OffCanvas
            placement={"start"}
            handleClose={handleCloseLeft}
            show={showLeftOffCanvas}
            style={{ height: "100vh", overflowY: "auto", width: "400px" }}
          >
            <LeftCanvasDetial />
          </OffCanvas>
          <Nav className="sidebar-toggle" onClick={handleShowTop}>
            <FaSearch color="white" fontSize="25px" />
          </Nav>
          <OffCanvas
            placement={"top"}
            handleClose={handleCloseTop}
            show={showTopOffCanvas}
            style={{ height: "150px" }}
          >
            <TopCanvasDetial />
          </OffCanvas>
        </div>
        <NavbarBrand className="mx-auto">
          <Link to="/">Online Shop</Link>
        </NavbarBrand>
        <Nav className="sidebar-toggle" onClick={handleShowRight}>
          <FaShoppingCart color="white" fontSize="25px" />
          <Badge bg="none">{totalQty}</Badge>
        </Nav>
        <OffCanvas
          placement={"end"}
          handleClose={handleCloseRight}
          show={showRightOffCanvas}
          style={{ height: "100vh", overflowY: "auto" }}
        >
          <RightCanvasDetial />
        </OffCanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
