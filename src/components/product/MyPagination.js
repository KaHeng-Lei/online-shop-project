import React from "react";
import { Pagination } from "react-bootstrap";

const MyPagination = ({ currentPage, totalPages, onPageChange }) => {
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        value={number}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default MyPagination;
