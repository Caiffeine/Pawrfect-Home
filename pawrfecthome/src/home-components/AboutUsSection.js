import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaHeart, FaHandHoldingHeart } from "react-icons/fa";
import "./../styles/AboutUsSection.css";

function AboutUsSection() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <motion.img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="Happy dogs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span>Years of Experience</span>
            </div>
          </div>

          <div className="about-text">
            <div className="section-subtitle">About Us</div>
            <h2>We Help You Find Your New Best Friend</h2>
            <p>
              At Pawrfect Home, we believe that every pet deserves a loving
              home. Our mission is to connect amazing animals with caring
              families and provide support throughout the adoption journey.
            </p>
            <p>
              Since 2013, we have successfully helped over 5,000 pets find their
              forever homes. Our team of dedicated animal lovers works
              tirelessly to ensure each pet gets the care they need before
              finding their perfect match.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaPaw />
                </div>
                <div className="feature-text">
                  <h4>Carefully Vetted</h4>
                  <p>All our animals receive complete medical care</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FaHeart />
                </div>
                <div className="feature-text">
                  <h4>Well Socialized</h4>
                  <p>Pets are prepared for their new families</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FaHandHoldingHeart />
                </div>
                <div className="feature-text">
                  <h4>Ongoing Support</h4>
                  <p>We're here for you even after adoption</p>
                </div>
              </div>
            </div>

            <button className="learn-more-btn">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
