import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineRight } from "react-icons/ai";
const MainCategories = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <div key={uuidv4()} style={{ height: "2.5rem", fontSize: "0.85rem" }}>
          <div
            className="d-flex justify-content-between"
            style={{ marginBottom: "9px" }}
          >
            <span>{category}</span>
            <AiOutlineRight style={{ marginTop: "2px" }} />
          </div>
          <div className="underline"></div>
        </div>
      ))}
    </>
  );
};

export default MainCategories;
