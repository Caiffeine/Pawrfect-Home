import React from "react";
import {
  FaDog,
  FaCat,
  FaMars,
  FaVenus,
  FaRuler,
  FaBirthdayCake,
  FaCheck,
  FaFilter,
} from "react-icons/fa";
import "./availablepets-styles/FilterSidebar.css";

function FilterSidebar({ filters, onFilterChange }) {
  const handleTypeChange = (type) => {
    onFilterChange({ type });
  };

  const handleGenderChange = (gender) => {
    onFilterChange({ gender });
  };

  const handleAgeChange = (age) => {
    onFilterChange({ age });
  };

  const handleSizeChange = (size) => {
    onFilterChange({ size });
  };

  const handleFeatureToggle = (feature) => {
    let newFeatures = [...filters.features];

    if (newFeatures.includes(feature)) {
      newFeatures = newFeatures.filter((f) => f !== feature);
    } else {
      newFeatures.push(feature);
    }

    onFilterChange({ features: newFeatures });
  };

  const resetFilters = () => {
    onFilterChange({
      type: "All",
      gender: "All",
      age: "All",
      size: "All",
      features: [],
    });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3>
          <FaFilter /> Filter Pets
        </h3>
        <button className="reset-btn" onClick={resetFilters}>
          Reset
        </button>
      </div>

      <div className="filter-section">
        <h4>Pet Type</h4>
        <div className="filter-options">
          <button
            className={`filter-option ${
              filters.type === "All" ? "active" : ""
            }`}
            onClick={() => handleTypeChange("All")}
          >
            <span className="option-text">All</span>
          </button>
          <button
            className={`filter-option ${
              filters.type === "Dog" ? "active" : ""
            }`}
            onClick={() => handleTypeChange("Dog")}
          >
            <span className="option-icon">
              <FaDog />
            </span>
            <span className="option-text">Dogs</span>
          </button>
          <button
            className={`filter-option ${
              filters.type === "Cat" ? "active" : ""
            }`}
            onClick={() => handleTypeChange("Cat")}
          >
            <span className="option-icon">
              <FaCat />
            </span>
            <span className="option-text">Cats</span>
          </button>
        </div>
      </div>

      <div className="filter-section">
        <h4>Gender</h4>
        <div className="filter-options">
          <button
            className={`filter-option ${
              filters.gender === "All" ? "active" : ""
            }`}
            onClick={() => handleGenderChange("All")}
          >
            <span className="option-text">All</span>
          </button>
          <button
            className={`filter-option ${
              filters.gender === "Male" ? "active" : ""
            }`}
            onClick={() => handleGenderChange("Male")}
          >
            <span className="option-icon">
              <FaMars />
            </span>
            <span className="option-text">Male</span>
          </button>
          <button
            className={`filter-option ${
              filters.gender === "Female" ? "active" : ""
            }`}
            onClick={() => handleGenderChange("Female")}
          >
            <span className="option-icon">
              <FaVenus />
            </span>
            <span className="option-text">Female</span>
          </button>
        </div>
      </div>

      <div className="filter-section">
        <h4>Age</h4>
        <div className="filter-options age-options">
          <button
            className={`filter-option ${filters.age === "All" ? "active" : ""}`}
            onClick={() => handleAgeChange("All")}
          >
            <span className="option-text">All</span>
          </button>
          <button
            className={`filter-option ${
              filters.age === "Baby" ? "active" : ""
            }`}
            onClick={() => handleAgeChange("Baby")}
          >
            <span className="option-text">Baby</span>
            <span className="option-desc">Under 1 year</span>
          </button>
          <button
            className={`filter-option ${
              filters.age === "Young" ? "active" : ""
            }`}
            onClick={() => handleAgeChange("Young")}
          >
            <span className="option-text">Young</span>
            <span className="option-desc">1-3 years</span>
          </button>
          <button
            className={`filter-option ${
              filters.age === "Adult" ? "active" : ""
            }`}
            onClick={() => handleAgeChange("Adult")}
          >
            <span className="option-text">Adult</span>
            <span className="option-desc">3-7 years</span>
          </button>
          <button
            className={`filter-option ${
              filters.age === "Senior" ? "active" : ""
            }`}
            onClick={() => handleAgeChange("Senior")}
          >
            <span className="option-text">Senior</span>
            <span className="option-desc">7+ years</span>
          </button>
        </div>
      </div>

      <div className="filter-section">
        <h4>Size</h4>
        <div className="filter-options">
          <button
            className={`filter-option ${
              filters.size === "All" ? "active" : ""
            }`}
            onClick={() => handleSizeChange("All")}
          >
            <span className="option-text">All</span>
          </button>
          <button
            className={`filter-option ${
              filters.size === "Small" ? "active" : ""
            }`}
            onClick={() => handleSizeChange("Small")}
          >
            <span className="option-text">Small</span>
          </button>
          <button
            className={`filter-option ${
              filters.size === "Medium" ? "active" : ""
            }`}
            onClick={() => handleSizeChange("Medium")}
          >
            <span className="option-text">Medium</span>
          </button>
          <button
            className={`filter-option ${
              filters.size === "Large" ? "active" : ""
            }`}
            onClick={() => handleSizeChange("Large")}
          >
            <span className="option-text">Large</span>
          </button>
        </div>
      </div>

      <div className="filter-section">
        <h4>Features</h4>
        <div className="filter-checkboxes">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.features.includes("Vaccinated")}
              onChange={() => handleFeatureToggle("Vaccinated")}
            />
            <span className="checkbox-text">Vaccinated</span>
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.features.includes("Neutered")}
              onChange={() => handleFeatureToggle("Neutered")}
            />
            <span className="checkbox-text">Neutered/Spayed</span>
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.features.includes("Friendly")}
              onChange={() => handleFeatureToggle("Friendly")}
            />
            <span className="checkbox-text">Kid/Pet Friendly</span>
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.features.includes("Trained")}
              onChange={() => handleFeatureToggle("Trained")}
            />
            <span className="checkbox-text">House Trained</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
