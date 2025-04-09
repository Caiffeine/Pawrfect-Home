import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaHome, FaPaw } from "react-icons/fa";
import "./../styles/BackgroundSection.css";

function BackgroundSection() {
  return (
    <section className="background-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Our Background</div>
          <h2>The Story Behind Pawrfect Home</h2>
          <p>How we started and why we're passionate about pet adoption</p>
        </div>

        <div className="background-content">
          <motion.div
            className="background-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Pet adoption center"
            />
          </motion.div>

          <div className="background-text">
            <h3>Founded With Love</h3>
            <p>
              Pawrfect Home was established in 2025 by a group of animal lovers
              who saw a need for a more personalized approach to pet adoption.
              What started as a small rescue operation quickly grew into a
              full-service adoption center dedicated to matching pets with their
              perfect forever homes.
            </p>

            <p>
              Over the years, we've helped thousands of pets find loving
              families. Our commitment to animal welfare and responsible pet
              ownership has made us a trusted name in the community.
            </p>

            <div className="achievement-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaPaw />
                </div>
                <div className="stat-number">5000+</div>
                <div className="stat-text">Pets Adopted</div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <FaHome />
                </div>
                <div className="stat-number">4000+</div>
                <div className="stat-text">Happy Families</div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <FaHandHoldingHeart />
                </div>
                <div className="stat-number">10+</div>
                <div className="stat-text">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackgroundSection;
