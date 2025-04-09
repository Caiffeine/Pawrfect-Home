import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./availablepets-styles/PetSearch.css";

function PetSearch({ filters, onFilterChange }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ searchTerm: searchInput });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e);
    }
  };

  const handleClearSearch = () => {
    setSearchInput("");
    onFilterChange({ searchTerm: "" });
  };

  return (
    <div className="pet-search-container">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search by name, breed, or location..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {searchInput && (
            <button
              type="button"
              className="clear-search"
              onClick={handleClearSearch}
            >
              ×
            </button>
          )}
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </div>
      </form>
      {filters.searchTerm && (
        <div className="active-search">
          <span>
            Search results for: <strong>{filters.searchTerm}</strong>
          </span>
          <button onClick={handleClearSearch}>Clear</button>
        </div>
      )}
    </div>
  );
}

export default PetSearch;
