import React from "react";
import { motion } from "framer-motion";
import {
  FaPaw,
  FaHeartbeat,
  FaCut,
  FaDog,
  FaHome,
  FaShieldAlt,
} from "react-icons/fa";
import "./services-styles/DetailedServices.css";

function DetailedServices() {
  const services = [
    {
      id: 1,
      icon: <FaPaw />,
      title: "Pet Adoption",
      description:
        "Find your perfect companion from our selection of rescued pets ready for adoption.",
      details: [
        "Personalized matching process to find the right pet for your lifestyle",
        "Complete health check and vaccinations before adoption",
        "Post-adoption support and resources",
        "Follow-up visits to ensure smooth transition",
      ],
      image:
        "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      title: "Veterinary Care",
      description:
        "We provide complete health checks and medical care for all our animals.",
      details: [
        "Comprehensive health examinations",
        "Preventive care including vaccinations",
        "Treatment for injuries and illnesses",
        "Dental care and maintenance",
        "Parasite prevention and treatment",
      ],
      image:
        "https://images.unsplash.com/photo-1584275556260-9a3bc9a79207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      icon: <FaCut />,
      title: "Grooming Services",
      description:
        "Keep your pet looking and feeling their best with our professional grooming.",
      details: [
        "Bath and coat conditioning",
        "Haircuts and styling",
        "Nail trimming and ear cleaning",
        "Specialized treatments for skin conditions",
        "Breed-specific grooming techniques",
      ],
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 4,
      icon: <FaDog />,
      title: "Training Programs",
      description:
        "We offer behavior training and socialization for newly adopted pets.",
      details: [
        "Basic obedience training",
        "Behavior modification for specific issues",
        "Socialization classes for puppies and kittens",
        "Advanced training for specialized skills",
        "One-on-one training sessions with certified trainers",
      ],
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      icon: <FaHome />,
      title: "Home Visits",
      description:
        "Free home visits to ensure a smooth transition for both pets and owners.",
      details: [
        "Pre-adoption home evaluation",
        "Post-adoption check-ins",
        "Environmental enrichment recommendations",
        "Help with pet-proofing your home",
        "Guidance for introducing new pets to existing pets",
      ],
      image:
        "https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Pet Insurance",
      description:
        "Access to discounted insurance plans for your adopted pet's future care.",
      details: [
        "Partnerships with leading pet insurance providers",
        "Coverage options for accidents and illnesses",
        "Preventive care add-ons available",
        "Special rates for adopted pets",
        "Assistance with claims and reimbursements",
      ],
      image:
        "https://images.unsplash.com/photo-1581276879454-4a70f6d9547c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <section className="detailed-services">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">What We Offer</div>
          <h2>Comprehensive Pet Services</h2>
          <p>
            Providing the best care for your furry friends at every stage of
            their lives
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-item ${index % 2 === 1 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-details">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <button className="service-btn">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailedServices;
