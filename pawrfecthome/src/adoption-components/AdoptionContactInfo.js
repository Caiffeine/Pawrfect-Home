import React from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import "./adoption-styles/AdoptionContactInfo.css";

function AdoptionContactInfo({ smoothScrollToSection }) {
  // Fix the error by simplifying the handler
  const handleScheduleVisit = (e) => {
    e.preventDefault();
    smoothScrollToSection("adoption-steps");
  };

  return (
    <section className="adoption-contact-info" id="contact-info">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Get In Touch</div>
          <h2>Ready to Start Your Adoption Journey?</h2>
          <p>
            Our adoption specialists are here to help you every step of the way
          </p>
        </div>

        <div className="cta-container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="paw-icon">
              <FaPaw />
            </div>
            <h3>Start Your Adoption Journey Today</h3>
            <p>
              Browse our available pets and find your perfect match. Our team is
              ready to help you bring your new best friend home.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/available-pets"
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Available Pets
              </motion.a>
              <motion.a
                href="#adoption-steps"
                className="cta-button secondary"
                onClick={handleScheduleVisit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Visit
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionContactInfo;
