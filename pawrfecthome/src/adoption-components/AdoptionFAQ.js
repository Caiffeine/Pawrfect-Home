import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "./adoption-styles/AdoptionFAQ.css";

function AdoptionFAQ({ smoothScrollToSection }) {
  const [activeIndices, setActiveIndices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("process");

  // Group FAQ items by category
  const faqCategories = {
    process: {
      title: "Application Process",
      questions: [
        {
          question: "How long does the adoption process take?",
          answer:
            "The entire adoption process typically takes 1-2 weeks from application submission to bringing your pet home. The timeline can vary depending on the volume of applications, the specific pet's needs, and how quickly we can verify your information and conduct any necessary home checks.",
        },
        {
          question: "Do you offer a trial period for adoptions?",
          answer:
            "Yes, we understand that sometimes a pet may not be a perfect fit despite everyone's best intentions. We offer a 14-day trial period during which you can return the pet if the adoption isn't working out. We want both you and the pet to be happy with the match.",
        },
        {
          question: "What happens after I submit my application?",
          answer:
            "After submission, our team reviews your application within 48-72 hours. You'll receive a confirmation email immediately, and a team member will contact you to schedule the next steps, including a meet and greet with your chosen pet.",
        },
      ],
    },
    eligibility: {
      title: "Eligibility & Requirements",
      questions: [
        {
          question: "Can I adopt if I rent my home?",
          answer:
            "Yes, renters can adopt! We just need written permission from your landlord confirming that pets are allowed in your unit. This helps us ensure your new pet won't put your housing situation at risk.",
        },
        {
          question: "Is there an age requirement for adopters?",
          answer:
            "Primary adopters must be at least 21 years old. Applicants between 18-20 years old may adopt with a parent or guardian as a co-adopter who shares responsibility for the pet's care.",
        },
        {
          question: "Do I need to have a fenced yard to adopt a dog?",
          answer:
            "While a fenced yard is beneficial for some dog breeds, it's not a requirement for all adoptions. We evaluate each situation individually, considering the specific dog's needs, your living situation, and your plan for exercise and outdoor time.",
        },
      ],
    },
    family: {
      title: "Family & Other Pets",
      questions: [
        {
          question: "Can I adopt a pet as a gift for someone else?",
          answer:
            "We generally don't recommend adopting a pet as a surprise gift. Instead, we offer gift certificates that allow recipients to select their own pet. If you want to adopt for a family member, we require that the primary caretaker be involved in the selection and adoption process.",
        },
        {
          question: "What if I already have other pets at home?",
          answer:
            "We welcome adopters with existing pets! In fact, we'll want to know about your current pets to ensure a good match. For dog adoptions, we typically recommend a meet-and-greet between your existing dogs and the potential new family member to check compatibility.",
        },
        {
          question: "Are your pets good with children?",
          answer:
            "Many of our pets do well with children, but it depends on the individual animal. Each pet's profile indicates whether they're recommended for homes with children and at what ages. We prioritize making matches that are safe for everyone involved.",
        },
      ],
    },
    logistics: {
      title: "Logistics & Support",
      questions: [
        {
          question: "Do you adopt to people who live out of state?",
          answer:
            "We primarily adopt to families within our state or neighboring states where we can conduct proper follow-up if needed. For distant adoptions, we may require additional steps and verification. Transport costs for long-distance adoptions are the adopter's responsibility.",
        },
        {
          question: "What post-adoption support do you offer?",
          answer:
            "We provide ongoing support including behavioral advice, medical record transfers, training resources, and follow-up check-ins. Our adoption counselors remain available to answer questions and provide guidance throughout your pet's life.",
        },
        {
          question: "What if my new pet has unexpected health issues?",
          answer:
            "All adopted pets come with a health guarantee period, typically 14-30 days depending on the animal and their health history. If significant health issues emerge that weren't disclosed at adoption, contact us immediately to discuss treatment options and support.",
        },
      ],
    },
  };

  const toggleAccordion = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndices([]); // Close all open accordions when changing categories
  };

  return (
    <motion.section
      className="adoption-faq"
      id="adoption-faq"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="section-header"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="section-subtitle">Questions</div>
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our adoption process</p>
      </motion.div>

      <motion.div
        className="faq-category-tabs"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {Object.keys(faqCategories).map((category) => (
          <motion.button
            key={category}
            className={`category-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {faqCategories[category].title}
          </motion.button>
        ))}
      </motion.div>

      <div className="faq-container">
        <motion.div
          className="faq-category-content"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h3
            className="category-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {faqCategories[activeCategory].title}
          </motion.h3>

          {faqCategories[activeCategory].questions.map((item, index) => (
            <motion.div
              key={index}
              className={`faq-item ${
                activeIndices.includes(index) ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <h4>{item.question}</h4>
                <FaChevronDown
                  className={`arrow-icon ${
                    activeIndices.includes(index) ? "rotated" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {activeIndices.includes(index) && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="additional-questions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>Have more questions? Contact our adoption team directly:</p>
        <motion.a
          href="mailto:adoptions@pawrfecthome.org"
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Email Adoption Team
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default AdoptionFAQ;
