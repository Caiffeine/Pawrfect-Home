import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./availablepets-styles/PetPagination.css";

function PetPagination({ petsPerPage, totalPets, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPets / petsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    // For small number of pages, show all
    if (pageNumbers.length <= 5) {
      return pageNumbers.map((number) => (
        <li key={number} className={currentPage === number ? "active" : ""}>
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      ));
    }

    // For many pages, show limited with ellipsis
    const visibleNumbers = [];

    // Always show first and last page
    visibleNumbers.push(1);

    // Show around current page
    if (currentPage > 2) {
      visibleNumbers.push("...");
    }

    if (currentPage !== 1 && currentPage !== pageNumbers.length) {
      visibleNumbers.push(currentPage);
    }

    if (currentPage < pageNumbers.length - 1) {
      visibleNumbers.push("...");
    }

    visibleNumbers.push(pageNumbers.length);

    return visibleNumbers.map((item, index) => {
      if (item === "...") {
        return (
          <li key={`ellipsis-${index}`} className="ellipsis">
            ...
          </li>
        );
      }

      return (
        <li key={item} className={currentPage === item ? "active" : ""}>
          <button onClick={() => paginate(item)}>{item}</button>
        </li>
      );
    });
  };

  return (
    <div className="pet-pagination">
      <button
        className="page-nav prev"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft /> Previous
      </button>

      <ul className="page-numbers">{renderPageNumbers()}</ul>

      <button
        className="page-nav next"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalPets / petsPerPage)}
      >
        Next <FaChevronRight />
      </button>
    </div>
  );
}

export default PetPagination;
