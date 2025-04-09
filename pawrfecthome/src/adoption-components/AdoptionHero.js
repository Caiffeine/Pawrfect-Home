import React from "react";
import { motion } from "framer-motion";
import "./adoption-styles/AdoptionHero.css";

function AdoptionHero({ smoothScrollToSection }) {
  const handleClick = (e) => {
    e.preventDefault();
    // Fix the error by directly using the known section ID
    smoothScrollToSection("adoption-steps");
  };

  return (
    <div className="adoption-hero">
      <div className="overlay"></div>
      <div className="adoption-hero-container">
        <motion.div
          className="adoption-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>How to Adopt</h1>
          <p>Find your perfect companion with our simple adoption process</p>
          <a
            href="#adoption-steps"
            className="hero-cta-btn"
            onClick={handleClick}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-content"
            >
              View Adoption Steps
            </motion.span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default AdoptionHero;
