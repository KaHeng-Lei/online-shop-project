import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import ProductPagination from "./ProductPagination";
import { useGlobalContext } from "../context/Context";
const FeaturedProducts = () => {
  const { products } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const featuredProducts = products.filter((prod) => prod.isFeatured);
  const totalItems = featuredProducts?.length;
  const itemsToDisplay = featuredProducts?.slice(startIndex, endIndex);
  const paginate = (page) => setCurrentPage(page);

  return (
    <div className="featuredProducts">
      <h4>Featured Products</h4>
      <div className="featuredProductsContainer">
        {itemsToDisplay?.map((prod) => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })}
      </div>
      <ProductPagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
      />
    </div>
  );
};

export default FeaturedProducts;
