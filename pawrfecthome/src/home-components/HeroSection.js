import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./../styles/HeroSection.css";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Find Your Pawrfect Companion",
      subtitle: "Adopt a pet and give them a loving home today!",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      cta: "Start Adopting",
    },
    {
      title: "Every Pet Deserves Love",
      subtitle:
        "Browse our selection of adorable pets waiting for their forever homes",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      cta: "Meet Our Pets",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                index === currentSlide
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="adopt-btn">{slide.cta}</button>
            </motion.div>
          </div>
        </div>
      ))}

      <div className="slider-controls">
        <button className="slider-arrow prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        <button className="slider-arrow next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
