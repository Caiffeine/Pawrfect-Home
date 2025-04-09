import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaPaperPlane, FaHandshake, FaHome } from "react-icons/fa";
import "./../styles/AdoptionSteps.css";

function AdoptionSteps() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse Available Pets",
      description:
        "Explore our directory of adorable pets waiting for their forever homes.",
      number: "01",
    },
    {
      icon: <FaPaperPlane />,
      title: "Submit Application",
      description:
        "Fill out our adoption application form with your information and preferences.",
      number: "02",
    },
    {
      icon: <FaHandshake />,
      title: "Meet Your Match",
      description:
        "Schedule a visit to meet and spend time with your potential new companion.",
      number: "03",
    },
    {
      icon: <FaHome />,
      title: "Bring Your Pet Home",
      description:
        "Complete the adoption process and welcome your new family member.",
      number: "04",
    },
  ];

  return (
    <section className="adoption-steps">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">How It Works</div>
          <h2>Simple Adoption Process</h2>
          <p>Follow these easy steps to bring your new best friend home</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="steps-bottom">
          <p>Ready to give a pet their forever home?</p>
          <a href="/adoption-process" className="start-adoption-btn">
            Start Adoption Process
          </a>
        </div>
      </div>
    </section>
  );
}

export default AdoptionSteps;
