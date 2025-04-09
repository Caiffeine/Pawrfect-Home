import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";
import "./../styles/BackToTopButton.css";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="back-to-top-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          aria-label="Back to top"
        >
          <motion.div
            animate={
              isHovered
                ? {
                    y: -3,
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.5,
                    },
                  }
                : { y: 0 }
            }
          >
            <FaChevronUp />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTopButton;
