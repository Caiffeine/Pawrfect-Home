import React from "react";
import { motion } from "framer-motion";
import "./services-styles/ServicesHero.css";

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-overlay"></div>
      <div className="container">
        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Our Services</h1>
          <p>
            Comprehensive pet services designed with your furry friend's health
            and happiness in mind
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesHero;
