import React from "react";
import { Pagination } from "react-bootstrap";
import "./CustomPagination.css";

function CustomPagination({ totalPages, currentPage, handlePageChange }) {
  return (
    <Pagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index}
          className={
            index + 1 === currentPage
              ? "activeBtn pagination-item"
              : "normalBtn pagination-item"
          }
          active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </Pagination>
  );
}

export default CustomPagination;
