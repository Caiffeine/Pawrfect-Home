import React from "react";
import { motion } from "framer-motion";
import "./../styles/AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay"></div>
      <div className="container">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Us</h1>
          <p>
            Learn more about our mission, our team, and our commitment to
            finding loving homes for every pet
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
