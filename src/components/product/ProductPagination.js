import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
const ProductPagination = ({
  currentPage,
  paginate,
  itemsPerPage,
  totalItems,
}) => {
  const lastPage = Math.ceil(totalItems / itemsPerPage);
  const prev = () => {
    paginate(currentPage - 1);
  };
  const next = () => {
    paginate(currentPage + 1);
  };

  return (
    <nav>
      <ul className="pagination-list">
        <li>
          <button onClick={prev} disabled={currentPage === 1}>
            <AiOutlineArrowLeft />
          </button>
        </li>
        {[...Array(5)].map((_x, i) => {
          if (currentPage <= 3) {
            return (
              <li key={uuidv4()}>
                <button
                  onClick={() => paginate(i + 1)}
                  className={currentPage === i + 1 ? "active" : null}
                >
                  {i + 1}
                </button>
              </li>
            );
          } else if (currentPage >= lastPage - 2) {
            return (
              <li key={uuidv4()}>
                <button
                  onClick={() => paginate(lastPage - 4 + i)}
                  className={
                    currentPage === currentPage - 2 + i ? "active" : null
                  }
                >
                  {lastPage - 4 + i}
                </button>
              </li>
            );
          } else {
            return (
              <li key={uuidv4()}>
                <button
                  onClick={() => paginate(currentPage - 2 + i)}
                  className={
                    currentPage === currentPage - 2 + i ? "active" : null
                  }
                >
                  {currentPage - 2 + i}
                </button>
              </li>
            );
          }
        })}
        <li>
          <button onClick={next} disabled={currentPage === lastPage}>
            <AiOutlineArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ProductPagination;
