import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaIdCard,
  FaCalendarAlt,
  FaHome,
  FaHandshake,
} from "react-icons/fa";
import "./adoption-styles/AdoptionRequirements.css";

function AdoptionRequirements() {
  const requirements = [
    {
      icon: <FaIdCard />,
      title: "Valid Identification",
      description:
        "Government-issued photo ID with current address or proof of address if ID doesn't match where you live.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Age Requirement",
      description:
        "Adopters must be at least 21 years of age. Those 18-20 may adopt with a parent or guardian as co-adopter.",
    },
    {
      icon: <FaHome />,
      title: "Housing Verification",
      description:
        "Proof of residence and, if renting, landlord's written permission stating pets are allowed in your unit.",
    },
    {
      icon: <FaHandshake />,
      title: "Meet All Family Members",
      description:
        "All household members should meet the pet prior to adoption to ensure compatibility.",
    },
  ];

  const disqualifiers = [
    "History of animal abuse or neglect",
    "Providing false information on adoption application",
    "Inability to provide proper care, space, or attention for the pet",
    "Certain breeds may have specific housing requirements due to insurance restrictions",
  ];

  return (
    <section className="adoption-requirements">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Eligibility</div>
          <h2>Adoption Requirements</h2>
          <p>
            To ensure our pets go to loving, responsible homes, we have the
            following requirements for adopters
          </p>
        </div>

        <div className="requirements-container">
          <div className="requirements-list">
            <h3>
              <FaCheckCircle /> What You'll Need
            </h3>
            <div className="requirements-grid">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  className="requirement-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="requirement-icon">{req.icon}</div>
                  <h4>{req.title}</h4>
                  <p>{req.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="disqualifiers">
            <h3>
              <FaExclamationTriangle /> Adoption Disqualifiers
            </h3>
            <ul>
              {disqualifiers.map((disqualifier, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {disqualifier}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="adoption-fees">
          <h3>Adoption Fees</h3>
          <div className="fees-container">
            <div className="fee-card">
              <h4>Dogs</h4>
              <div className="fee-amount">$150 - $350</div>
              <p>Varies based on age, breed, and special needs</p>
            </div>
            <div className="fee-card">
              <h4>Cats</h4>
              <div className="fee-amount">$75 - $175</div>
              <p>Varies based on age, breed, and special needs</p>
            </div>
            <div className="fee-card special">
              <h4>Senior & Special Needs Pets</h4>
              <div className="fee-amount">$50 - $150</div>
              <p>Reduced fees to encourage adoption</p>
            </div>
          </div>
          <div className="fee-includes">
            <p>
              <strong>All adoption fees include:</strong> Spay/neuter surgery,
              vaccinations, microchipping, deworming, flea treatment, basic
              health check, and a starter kit with food and supplies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionRequirements;
