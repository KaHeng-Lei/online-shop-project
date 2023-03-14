import React from "react";
import { Button, Form } from "react-bootstrap";
import { useGlobalContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import MyAccordion from "./MyAccordion";
import Rating from "./Rating";

const Filters = () => {
  const {
    products,
    filterBySex,
    sortByPrice,
    filterByStock,
    filterByDelivery,
    filterByFeatured,
    filterByCategory,
    removeFilterByCategory,
    filterByMaterial,
    removeFilterByMaterial,
    clearFilter,
    filterByRating,
    bySex,
    byStock,
    byFastDelivery,
    byFeatured,
    byRating,
    byMaterial,
    byCategory,
  } = useGlobalContext();

  const materials = [...new Set(products?.map((prod) => prod.material))];
  const mainCategories = [...new Set(products?.map((prod) => prod.category))];

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <MyAccordion title={"Sex"}>
          <Form.Check
            type="checkbox"
            id="checkbox-men"
            label="Men"
            value="male"
            onChange={(e) =>
              e.target.checked ? filterBySex(e.target.value) : filterBySex("")
            }
            checked={bySex === "male"}
          />
          <Form.Check
            type="checkbox"
            id="checkbox-Women"
            label="Women"
            value="female"
            onChange={(e) =>
              e.target.checked ? filterBySex(e.target.value) : filterBySex("")
            }
            checked={bySex === "female"}
          />
        </MyAccordion>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <MyAccordion title={"Sort By Price"}>
          <Form.Check
            inline
            name="sortInPrice"
            type="radio"
            id="checkbox-lth"
            label="Low to High"
            value="lowToHigh"
            onChange={(e) => sortByPrice(e.target.value)}
          />
          <Form.Check
            inline
            name="sortInPrice"
            type="radio"
            id="checkbox-htl"
            label="High to Low"
            value="highToLow"
            onChange={(e) => sortByPrice(e.target.value)}
          />
        </MyAccordion>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Form.Check
          inline
          type="checkbox"
          id="checkbox-instock"
          label="Include Out of Stock"
          onChange={filterByStock}
          checked={byStock}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Form.Check
          inline
          type="checkbox"
          id="checkbox-fast-delivery"
          label="Fast Delivery Only"
          onChange={filterByDelivery}
          checked={byFastDelivery}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Form.Check
          inline
          type="checkbox"
          id="checkbox-featuredItems"
          label="Featured Items"
          onChange={filterByFeatured}
          checked={byFeatured}
        />
      </div>
      {/* by Ratings */}
      <div style={{ marginBottom: "10px" }}>
        <span>Rating: </span>
        <Rating
          rating={byRating}
          onClick={filterByRating}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <MyAccordion title={"Material"}>
          {materials.map((material) => (
            <Form.Check
              key={uuidv4()}
              type="checkbox"
              id={`checkbox-${material}`}
              label={material}
              value={material}
              onChange={(e) =>
                e.target.checked
                  ? filterByMaterial(e.target.value)
                  : removeFilterByMaterial(e.target.value)
              }
              checked={
                byMaterial?.length > 0 &&
                byMaterial?.some((mat) => mat === material)
              }
            />
          ))}
        </MyAccordion>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <MyAccordion title={"Category"}>
          {mainCategories.map((category) => (
            <Form.Check
              key={uuidv4()}
              type="checkbox"
              id={`checkbox-${category}`}
              label={category}
              value={category}
              onChange={(e) =>
                e.target.checked
                  ? filterByCategory(e.target.value)
                  : removeFilterByCategory(e.target.value)
              }
              checked={
                byCategory?.length > 0 &&
                byCategory?.some((cat) => cat === category)
              }
            />
          ))}
        </MyAccordion>
      </div>
      <Button variant="light" onClick={clearFilter}>
        Clear Filters
      </Button>
    </>
  );
};

export default Filters;
