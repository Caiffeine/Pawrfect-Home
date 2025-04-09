import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaVenus, FaMars, FaArrowRight } from "react-icons/fa";
import PetDetailsModal from "../home-components/PetDetailsModal";
import "./availablepets-styles/PetGrid.css";

function PetGrid({ pets }) {
  const [selectedPet, setSelectedPet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="pet-grid">
        {pets.map((pet, index) => (
          <motion.div
            key={pet.id}
            className="pet-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            onClick={() => openModal(pet)}
          >
            <div className="pet-card-inner">
              <div className="pet-image">
                <img src={pet.image} alt={pet.name} />
                <div className="pet-badges">
                  <span className="pet-badge pet-type">{pet.type}</span>
                  <span className="pet-badge pet-gender">
                    {pet.gender === "Male" ? <FaMars /> : <FaVenus />}
                  </span>
                </div>
              </div>
              <div className="pet-info">
                <div className="pet-location">
                  <FaMapMarkerAlt />
                  <span>{pet.location}</span>
                </div>
                <h4>{pet.name}</h4>
                <div className="pet-details">
                  <span className="breed">{pet.breed}</span>
                  <span className="age">{pet.age}</span>
                </div>
                <div className="pet-features">
                  {pet.vaccinated && (
                    <span className="feature">Vaccinated</span>
                  )}
                  {pet.neutered && <span className="feature">Neutered</span>}
                  {pet.friendly && <span className="feature">Friendly</span>}
                  {pet.trained && <span className="feature">Trained</span>}
                </div>
                <div className="pet-card-footer">
                  <button className="view-details-btn">
                    View Details
                    <FaArrowRight className="btn-icon" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedPet && (
          <PetDetailsModal pet={selectedPet} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
}

export default PetGrid;
