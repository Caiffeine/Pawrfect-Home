import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "./services-styles/ServicesFAQ.css";

function ServicesFAQ() {
  const [activeIndices, setActiveIndices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("general");

  // Group FAQ items by category
  const faqCategories = {
    general: {
      title: "General Services",
      questions: [
        {
          question: "What is included in the pet adoption fee?",
          answer:
            "Our adoption fee includes spaying/neutering, initial vaccinations, microchipping, a health check by our veterinarians, and a starter kit with food and basic supplies. We also provide ongoing support for you and your new pet.",
        },
        {
          question: "How often should I schedule home visits after adoption?",
          answer:
            "We typically recommend at least one follow-up home visit within the first month of adoption. Depending on how your pet is adjusting, additional visits can be scheduled as needed. These visits are included in your adoption fee.",
        },
        {
          question: "Can I switch pet insurance plans later if needed?",
          answer:
            "Yes, the pet insurance plans we offer allow for flexibility. You can adjust your coverage during renewal periods, and our staff can help you understand your options and find the best plan for your pet's changing needs.",
        },
      ],
    },
    grooming: {
      title: "Grooming Services",
      questions: [
        {
          question: "How long does the grooming service take?",
          answer:
            "The duration of our grooming services depends on the size of your pet, coat condition, and the specific services requested. Typically, a full grooming session can take between 1-3 hours. We prioritize your pet's comfort throughout the process.",
        },
        {
          question: "How often should I schedule grooming for my pet?",
          answer:
            "Most dogs benefit from professional grooming every 4-6 weeks, while cats may require less frequent sessions. The ideal schedule depends on your pet's breed, coat type, and lifestyle. Our groomers can recommend a personalized schedule during your first visit.",
        },
        {
          question: "Do you offer specialized grooming for different breeds?",
          answer:
            "Yes, our professional groomers are trained in breed-specific cuts and styling techniques. We understand the unique needs of different breeds and can provide specialized care whether you have a Poodle, Persian cat, or any other breed with specific grooming requirements.",
        },
      ],
    },
    veterinary: {
      title: "Veterinary Care",
      questions: [
        {
          question: "Do you offer emergency veterinary services?",
          answer:
            "Yes, we provide emergency veterinary care during our operating hours. For after-hours emergencies, we work with a network of 24-hour emergency clinics and can guide you to the nearest facility.",
        },
        {
          question: "What routine vaccinations do you recommend?",
          answer:
            "For dogs, we typically recommend core vaccines including rabies, distemper, parvovirus, and adenovirus. For cats, we recommend rabies, feline distemper, and feline leukemia vaccines. Additional vaccines may be recommended based on your pet's lifestyle and risk factors.",
        },
        {
          question: "How often should my pet have a wellness exam?",
          answer:
            "We recommend annual wellness exams for adult pets in good health. Senior pets (typically over 7 years old) and pets with chronic conditions should have check-ups every 6 months. Puppies and kittens require more frequent visits for initial vaccinations and development monitoring.",
        },
      ],
    },
    training: {
      title: "Training Programs",
      questions: [
        {
          question: "What types of training programs do you offer?",
          answer:
            "We offer a variety of training programs including basic obedience training, puppy socialization classes, behavior modification for specific issues, and advanced training. Our certified trainers use positive reinforcement techniques tailored to your pet's needs.",
        },
        {
          question: "How long does it take to see results from training?",
          answer:
            "While some behaviors can improve within a few sessions, most training programs require 6-8 weeks of consistent practice to see lasting results. The timeline varies depending on the specific behavior, your pet's temperament, and how consistently training is reinforced at home.",
        },
        {
          question: "Do you offer group classes or private training?",
          answer:
            "We offer both group classes and private training sessions. Group classes are great for socialization and learning in a structured environment, while private sessions allow for personalized attention and focus on specific issues. Many pet owners benefit from a combination of both approaches.",
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
      className="services-faq"
      id="services-faq"
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
        <div className="section-subtitle">FAQ</div>
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our services</p>
      </motion.div>

      <motion.div
        className="faq-category-tabs"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {Object.keys(faqCategories).map((category, idx) => (
          <motion.button
            key={category}
            className={`category-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            viewport={{ once: true }}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
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
        viewport={{ once: true, amount: 0.5 }}
      >
        <p>Have more questions? Contact our services team directly:</p>
        <motion.a
          href="mailto:services@pawrfecthome.org"
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Email Services Team
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default ServicesFAQ;
