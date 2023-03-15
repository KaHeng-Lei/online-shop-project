import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useGlobalContext } from "../../../context/Context";
import { v4 as uuidv4 } from "uuid";
import MainCategories from "./MainCategories";
import { Link } from "react-router-dom";

const LeftCanvasDetial = () => {
  const {
    showMenOptions,
    setShowMenOptions,
    showWomenOptions,
    setShowWomenOptions,
  } = useGlobalContext();

  const showCategories = (gender) => {
    if (gender === "Men") {
      setShowMenOptions(!showMenOptions);
      setShowWomenOptions(false);
      setActiveGender(gender);
    } else if (gender === "Women") {
      setShowMenOptions(false);
      setShowWomenOptions(!showWomenOptions);
      setActiveGender(gender);
    }
  };

  const [activeGender, setActiveGender] = useState(null);

  const menWomen = ["Men", "Women"];
  const categories = [
    "Features",
    "Apparel",
    "Sport",
    "Accessories",
    "UnderWear",
    "Gifts",
    "SALE",
  ];

  return (
    <>
      <Offcanvas.Header
        style={{ width: "100%", marginTop: "5px" }}
        className="justify-content-end"
        closeButton
      ></Offcanvas.Header>
      <Offcanvas.Body>
        <div
          style={{
            height: "3.2rem",
            fontSize: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          <Link
            to="/products"
            style={{ color: "black", textDecoration: "none" }}
          >
            All Products
          </Link>
        </div>
        {menWomen.map((sex) => (
          <React.Fragment key={uuidv4()}>
            <div
              className="d-flex justify-content-between"
              onClick={() => showCategories(sex)}
              style={{
                height: "3.2rem",
                fontSize: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              <span style={{ cursor: "pointer" }}>{sex}</span>
              {sex === "Men" ? (
                showMenOptions ? (
                  <AiOutlineMinus style={{ marginTop: "10px" }} />
                ) : (
                  <AiOutlinePlus style={{ marginTop: "10px" }} />
                )
              ) : (
                <></>
              )}
              {sex === "Women" ? (
                showWomenOptions ? (
                  <AiOutlineMinus style={{ marginTop: "10px" }} />
                ) : (
                  <AiOutlinePlus style={{ marginTop: "10px" }} />
                )
              ) : (
                <></>
              )}
            </div>
            {activeGender === sex && showMenOptions && (
              <MainCategories categories={categories} />
            )}
            {activeGender === sex && showWomenOptions && (
              <MainCategories categories={categories} />
            )}
          </React.Fragment>
        ))}
      </Offcanvas.Body>
    </>
  );
};

export default LeftCanvasDetial;
