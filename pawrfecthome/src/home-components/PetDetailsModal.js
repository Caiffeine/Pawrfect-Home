import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  FaTimes,
  FaMars,
  FaVenus,
  FaMapMarkerAlt,
  FaCheck,
  FaTimes as FaTimesIcon,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import "./../styles/PetDetailsModal.css";

function PetDetailsModal({ pet, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pet.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pet.gallery.length - 1 : prevIndex - 1
    );
  };

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.1, type: "spring", stiffness: 80 },
    },
  };

  const modalContent = (
    <motion.div
      className="modal-backdrop"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="pet-modal"
        variants={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-modal" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="pet-modal-content">
          <div className="pet-modal-gallery">
            <div className="gallery-main">
              <img
                src={pet.gallery[currentImageIndex]}
                alt={`${pet.name} - image ${currentImageIndex + 1}`}
              />
              {pet.gallery.length > 1 && (
                <>
                  <button className="gallery-nav prev" onClick={prevImage}>
                    <FaChevronLeft />
                  </button>
                  <button className="gallery-nav next" onClick={nextImage}>
                    <FaChevronRight />
                  </button>
                </>
              )}
              <div className="pet-type-badge">{pet.type}</div>
            </div>

            {pet.gallery.length > 1 && (
              <div className="gallery-thumbnails">
                {pet.gallery.map((image, index) => (
                  <div
                    key={index}
                    className={`gallery-thumbnail ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  >
                    <img
                      src={image}
                      alt={`${pet.name} - thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pet-modal-details">
            <div className="pet-modal-header">
              <h2>{pet.name}</h2>
              <div className="pet-modal-meta">
                <span className="pet-badge pet-gender">
                  {pet.gender === "Male" ? <FaMars /> : <FaVenus />}
                  <span>{pet.gender}</span>
                </span>
                <span className="pet-location-modal">
                  <FaMapMarkerAlt />
                  <span>{pet.location}</span>
                </span>
              </div>
            </div>

            <div className="pet-modal-info">
              <div className="info-group">
                <label>Breed:</label>
                <span>{pet.breed}</span>
              </div>
              <div className="info-group">
                <label>Age:</label>
                <span>{pet.age}</span>
              </div>
            </div>

            <div className="pet-modal-description">
              <h3>About {pet.name}</h3>
              <p>{pet.description}</p>
            </div>

            <div className="pet-modal-features">
              <h3>Pet Features</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <div
                    className={`feature-icon ${pet.vaccinated ? "active" : ""}`}
                  >
                    {pet.vaccinated ? <FaCheck /> : <FaTimesIcon />}
                  </div>
                  <div className="feature-text">Vaccinated</div>
                </div>
                <div className="feature-item">
                  <div
                    className={`feature-icon ${pet.neutered ? "active" : ""}`}
                  >
                    {pet.neutered ? <FaCheck /> : <FaTimesIcon />}
                  </div>
                  <div className="feature-text">Neutered</div>
                </div>
                <div className="feature-item">
                  <div
                    className={`feature-icon ${pet.friendly ? "active" : ""}`}
                  >
                    {pet.friendly ? <FaCheck /> : <FaTimesIcon />}
                  </div>
                  <div className="feature-text">Friendly</div>
                </div>
                <div className="feature-item">
                  <div
                    className={`feature-icon ${pet.trained ? "active" : ""}`}
                  >
                    {pet.trained ? <FaCheck /> : <FaTimesIcon />}
                  </div>
                  <div className="feature-text">Trained</div>
                </div>
              </div>
            </div>

            <div className="pet-modal-actions">
              <button className="adopt-btn">Adopt Me</button>
              <button className="favorite-btn">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}

export default PetDetailsModal;
