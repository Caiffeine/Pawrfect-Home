import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./../styles/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Dog Parent",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Adopting Max from Pawrfect Home was the best decision I've ever made. The staff was incredibly helpful throughout the process, and the home visit ensured we were prepared for our new family member. Max has brought so much joy to our lives!",
    },
    {
      id: 2,
      name: "Michael Reynolds",
      role: "Cat Parent",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "I was nervous about adopting a cat as a first-time pet owner, but Pawrfect Home guided me every step of the way. Luna was perfectly matched to my lifestyle and personality. The follow-up support has been amazing too!",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Multiple Pet Parent",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      text: "We've adopted three pets from Pawrfect Home over the years, and each time has been a wonderful experience. The care they provide to their animals before adoption is evident. Our home wouldn't be complete without our fur babies!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Testimonials</div>
          <h2>What Our Adopters Say</h2>
          <p>
            Hear from families who found their perfect companions through our
            adoption service
          </p>
        </div>

        <div className="testimonial-slider">
          <button className="slider-btn prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>

          <div className="testimonial-wrapper">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === currentIndex ? "active" : ""
                }`}
                initial={{ opacity: 0, x: 100 }}
                animate={
                  index === currentIndex
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index < currentIndex ? -100 : 100 }
                }
                transition={{ duration: 0.5 }}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="slider-btn next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
