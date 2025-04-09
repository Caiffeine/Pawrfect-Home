import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaHandsHelping, FaUsers } from "react-icons/fa";
import "./../styles/GoalSection.css";

function GoalSection() {
  const goals = [
    {
      icon: <FaHeartbeat />,
      title: "Saving Lives",
      description:
        "Our primary goal is to reduce animal homelessness by finding permanent loving homes for as many pets as possible.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Support",
      description:
        "We aim to educate the community about responsible pet ownership and provide ongoing support for adopters.",
    },
    {
      icon: <FaUsers />,
      title: "Perfect Matches",
      description:
        "We strive to create perfect matches between pets and families to ensure lifelong happiness for both.",
    },
  ];

  return (
    <section className="goal-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Our Mission</div>
          <h2>Our Goals</h2>
          <p>What we're working towards every day</p>
        </div>

        <div className="goal-content">
          <div className="goal-text">
            <h3>Making A Difference</h3>
            <p>
              At Pawrfect Home, our mission goes beyond just pet adoption. We
              envision a world where every pet has a loving home and every home
              has the perfect pet. Through education, support, and community
              engagement, we're working to make this vision a reality.
            </p>

            <p>
              We believe that the human-animal bond enriches lives on both
              sides, and our goal is to facilitate these meaningful connections
              while ensuring the welfare of every animal in our care.
            </p>
          </div>

          <div className="goal-cards">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="goal-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="goal-icon">{goal.icon}</div>
                <h4>{goal.title}</h4>
                <p>{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoalSection;
