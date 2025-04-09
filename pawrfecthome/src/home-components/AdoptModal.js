import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom"; // Add this import
import Swal from "sweetalert2";
import "./../styles/AdoptModal.css";

function AdoptModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Show success message with SweetAlert2
    Swal.fire({
      title: "Application Submitted!",
      text: `Thank you ${formData.name}! We've received your adoption application and will be in touch soon.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#ff6f61",
      background: "#fff",
      iconColor: "#ff6f61",
      customClass: {
        popup: "swal-custom-popup",
        title: "swal-custom-title",
        content: "swal-custom-content",
      },
    });

    // Reset form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      petType: "",
      message: "",
    });

    // Close the modal after submission
    onClose();
  };

  if (!isOpen) return null;

  // Create the modal content
  const modalContent = (
    <motion.div
      className="adopt-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="adopt-modal"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-modal" onClick={onClose}>
          &times;
        </button>
        <h2>Adoption Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="petType">
              Preferred Pet Type <span className="required">*</span>
            </label>
            <select
              id="petType"
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              required
            >
              <option value="">Select a pet type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </motion.div>
    </motion.div>
  );

  // Use createPortal to render the modal directly into the document body
  return createPortal(modalContent, document.body);
}

export default AdoptModal;
