import React, { useState } from "react";
import SingleProduct from "../components/product/SingleProduct";
import { useGlobalContext } from "../context/Context";
import Filters from "../components/product/Filters";
import MyPagination from "../components/product/MyPagination";
import { Dropdown } from "react-bootstrap";

const Products = () => {
  const {
    products,
    sort,
    bySex,
    byStock,
    byFastDelivery,
    byFeatured,
    byMaterial,
    byCategory,
    byRating,
    searchQuery,
  } = useGlobalContext();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (bySex) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.sex.toLowerCase() === bySex
      );
    }

    // for multiple-selection, using array.some() to check if
    // at least one of the selected matches the property
    if (byMaterial.length > 0) {
      sortedProducts = sortedProducts.filter((prod) =>
        byMaterial.some(
          (selection) => prod.material.toLowerCase() === selection.toLowerCase()
        )
      );
    }

    if (byCategory.length > 0) {
      sortedProducts = sortedProducts.filter((prod) =>
        byCategory.some(
          (selection) => prod.category.toLowerCase() === selection.toLowerCase()
        )
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byFeatured) {
      sortedProducts = sortedProducts.filter((prod) => prod.isFeatured);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    console.log(sortedProducts);
    return sortedProducts;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = transformProducts()?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(transformProducts()?.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (number) => {
    setItemsPerPage(number);
  };

  return (
    <div className="productHome">
      <div className="filters">
        <Filters />
      </div>
      <div className="product-box">
        <div className="productList-info">
          <span>
            <h2>View All</h2>
          </span>
          <div>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#ffffff", color: "#000000" }}
              >
                {itemsPerPage} Items per page
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleItemsPerPageChange(24)}>
                  24 Items per page
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleItemsPerPageChange(48)}>
                  48 Items per page
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleItemsPerPageChange(72)}>
                  72 Items per page
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="productContainer">
          {itemsToDisplay.map((prod, index) => {
            return <SingleProduct key={prod.id} prod={prod} index={index} />;
          })}
        </div>
        <div style={{ margin: "30px 0" }}>
          <MyPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
