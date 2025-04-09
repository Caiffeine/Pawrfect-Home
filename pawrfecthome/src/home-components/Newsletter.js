import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import "./../styles/Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      // Here you would typically handle the form submission with an API
      console.log("Email submitted:", email);
      setSubmitted(true);
      setEmail("");

      // Reset the submitted state after a delay
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <motion.div
            className="newsletter-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-subtitle">Newsletter</div>
            <h2>Subscribe To Get Pet Adoption Updates</h2>
            <p>
              Stay informed about new pets available for adoption, special
              events, and helpful pet care tips. Join our community of animal
              lovers today!
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane />
                  <span>Subscribe</span>
                </motion.button>
              </div>
              {submitted && (
                <motion.p
                  className="success-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            className="newsletter-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1560807707-8cc77767d1d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Happy dog with owner"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
