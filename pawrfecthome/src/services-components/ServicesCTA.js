import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import "./services-styles/ServicesCTA.css";

function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="services-cta-overlay"></div>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaPaw className="cta-icon" />
          <h2>Ready to Give a Pet Their Forever Home?</h2>
          <p>
            Browse our available pets and find your perfect companion today. Our
            team is ready to guide you through every step of the adoption
            process.
          </p>
          <div className="cta-buttons">
            <Link to="/available-pets" className="cta-button primary">
              Meet Our Pets
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesCTA;
