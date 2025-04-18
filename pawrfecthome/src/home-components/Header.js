import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaw,
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AdoptModal from "./AdoptModal";
import "./../styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);

    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);

  // Function to handle logo click and home link click
  const handleHomeNavigation = () => {
    if (location.pathname === "/") {
      // If already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Otherwise React Router will handle navigation
  };

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-contact">
              <div className="contact-item">
                <FaPhone className="icon" />
                <span>(123) 456-7890</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>info@pawrfecthome.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>123 Pet Street, Animal City</span>
              </div>
            </div>
            <div className="top-bar-social">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={handleHomeNavigation}>
              <motion.div
                className="logo-container"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaw className="logo-icon" />
                <h1>Pawrfect Home</h1>
              </motion.div>
            </Link>

            <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
              <ul>
                {[
                  { path: "/home", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/available-pets", label: "Available Pets" },
                  { path: "/services", label: "Services" },
                  { path: "/adoption-process", label: "Adoption Process" },
                  { path: "/admin-playground", label: "Admin Playground" },
                ].map((item, index) => (
                  <motion.li key={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        className={
                          location.pathname === item.path ? "active" : ""
                        }
                        onClick={
                          item.path === "/" ? handleHomeNavigation : undefined
                        }
                      >
                        {item.label}
                        {location.pathname === item.path && (
                          <motion.div
                            className="active-indicator"
                            layoutId="activeNavIndicator"
                            initial={false}
                            style={{
                              position: "absolute",
                              bottom: "-2px",
                              left: "0",
                              right: "0",
                              height: "2px",
                              backgroundColor: "#ff6f61",
                              borderRadius: "1px",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
                <li>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#contact">Contact</a>
                  </motion.div>
                </li>
              </ul>
              <motion.button
                className="adopt-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleModal}
              >
                Adopt Now
              </motion.button>
            </nav>

            <motion.div
              className="menu-toggle"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </div>
        </div>
        <div className="header-background"></div>
      </header>

      <AnimatePresence>
        {isModalOpen && (
          <AdoptModal isOpen={isModalOpen} onClose={toggleModal} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
