import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaFileAlt,
  FaHome,
  FaPaw,
  FaUsers,
  FaHandHoldingHeart,
} from "react-icons/fa";
import "./adoption-styles/AdoptionStepsDetails.css";

function AdoptionStepsDetails() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse Available Pets",
      description:
        "Start by exploring our directory of pets looking for their forever homes. Filter by type, age, size, and more to find pets that match your preferences.",
      details:
        "Take your time to read their profiles and backgrounds. Each pet has unique needs and personalities that we've carefully documented to help you make the best match.",
    },
    {
      icon: <FaFileAlt />,
      title: "Submit an Application",
      description:
        "Found a pet you're interested in? Fill out our adoption application form with your information, living situation, and experience with pets.",
      details:
        "Our application helps us understand your lifestyle and preferences to ensure a good match. Be honest and thorough – this helps us help you find the perfect companion.",
    },
    {
      icon: <FaUsers />,
      title: "Meet & Greet",
      description:
        "We'll review your application and arrange a meet and greet with the pet you're interested in. This is a chance to interact and see if there's a connection.",
      details:
        "Feel free to ask our staff questions during this time. We encourage multiple family members to attend so everyone can meet the potential new family member.",
    },
    {
      icon: <FaHome />,
      title: "Home Check",
      description:
        "For some adoptions, we conduct a brief home check to ensure the environment is safe and suitable for the specific needs of the pet.",
      details:
        "This isn't about judging your housekeeping – we're simply making sure the space is safe and appropriate for the specific pet you're interested in.",
    },
    {
      icon: <FaPaw />,
      title: "Adoption Approval",
      description:
        "Once approved, you'll complete the adoption paperwork, pay the adoption fee, and receive information about your new pet's medical history and care needs.",
      details:
        "The adoption fee covers vaccinations, spay/neuter surgery, microchipping, and helps us continue our rescue efforts for other animals in need.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Welcome Home",
      description:
        "Take your new family member home! We'll provide resources and support to help with the transition and remain available for any questions after adoption.",
      details:
        "The first few weeks are an adjustment period for both you and your pet. We offer post-adoption support and check-ins to ensure everything is going smoothly.",
    },
  ];

  return (
    <section className="adoption-steps-details" id="adoption-steps">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">The Process</div>
          <h2>Your Path to Pet Parenthood</h2>
          <p>
            Our comprehensive adoption process ensures the best match for both
            you and your future pet
          </p>
        </div>

        <div className="steps-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-detail-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <p className="step-additional-info">{step.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="adoption-note">
          <h4>Note:</h4>
          <p>
            The adoption process typically takes 1-2 weeks from application to
            bringing your pet home. This timeline ensures we have adequate time
            to process your application, conduct necessary checks, and prepare
            your pet for their new home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdoptionStepsDetails;
