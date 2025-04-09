import React from "react";
import { motion } from "framer-motion";
import {
  FaPaw,
  FaHome,
  FaHeartbeat,
  FaCut,
  FaDog,
  FaShieldAlt,
} from "react-icons/fa";
import "./../styles/ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      icon: <FaPaw />,
      title: "Pet Adoption",
      description:
        "Find your perfect companion from our selection of rescued pets ready for adoption.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Veterinary Care",
      description:
        "We provide complete health checks and medical care for all our animals.",
    },
    {
      icon: <FaCut />,
      title: "Grooming Services",
      description:
        "Keep your pet looking and feeling their best with our professional grooming.",
    },
    {
      icon: <FaDog />,
      title: "Training Programs",
      description:
        "We offer behavior training and socialization for newly adopted pets.",
    },
    {
      icon: <FaHome />,
      title: "Home Visits",
      description:
        "Free home visits to ensure a smooth transition for both pets and owners.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Pet Insurance",
      description:
        "Access to discounted insurance plans for your adopted pet's future care.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Our Services</div>
          <h2>What We Offer</h2>
          <p>
            We provide comprehensive services to ensure pets and owners have the
            best experience
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="learn-more">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
