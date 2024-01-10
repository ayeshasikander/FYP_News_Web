
import React from "react";
import { Link } from "react-router-dom";
export default function Pagination({ currentPage, pageCount, onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <li className={`page-item ${currentPage === i ? "active" : ""}`} key={i}>
          <Link className="page-link" to="/" onClick={() => handlePageChange(i)}>
            {i}
          </Link>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="CSS">
      <ul className="pagination1">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Link className="page-link" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous">
            <span aria-hidden="true">Prev</span>
          </Link>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
          <Link className="page-link" onClick={() => handlePageChange(currentPage + 1)} aria-label="Next">
            <span aria-hidden="true">Next</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
