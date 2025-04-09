import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaVenus,
  FaMars,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import "./../styles/FeaturedPets.css";
import PetDetailsModal from "./PetDetailsModal";

function FeaturedPets() {
  const [activeFilter, setActiveFilter] = useState("All Pets");
  const [selectedPet, setSelectedPet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pets = [
    {
      id: 1,
      name: "Buddy",
      type: "Dog",
      breed: "Golden Retriever",
      age: "2 years",
      gender: "Male",
      location: "New York",
      description:
        "Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other pets.",
      vaccinated: true,
      neutered: true,
      friendly: true,
      trained: true,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1561438774-1790fe271b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1633722715534-b490677abf03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvbGRlbiUyMHJldHJpZXZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
    },
    {
      id: 2,
      name: "Mittens",
      type: "Cat",
      breed: "Siamese",
      age: "1 year",
      gender: "Female",
      location: "Boston",
      description:
        "Mittens is a gentle and affectionate Siamese cat who enjoys lounging in sunny spots and cuddling. She's quite vocal and will let you know when she wants attention.",
      vaccinated: true,
      neutered: true,
      friendly: true,
      trained: false,
      image:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2lhbWVzZSUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2lhbWVzZSUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lhbWVzZSUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
    },
    {
      id: 3,
      name: "Charlie",
      type: "Dog",
      breed: "German Shepherd",
      age: "3 years",
      gender: "Male",
      location: "Chicago",
      description:
        "Charlie is a loyal and intelligent German Shepherd. He's well-trained and protective, making him a perfect family guardian. He enjoys puzzle toys and learning new tricks.",
      vaccinated: true,
      neutered: false,
      friendly: true,
      trained: true,
      image:
        "https://images.unsplash.com/photo-1589941013454-ec7d8f2b6125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1589941013454-ec7d8f2b6125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      ],
    },
    {
      id: 4,
      name: "Luna",
      type: "Cat",
      breed: "Maine Coon",
      age: "2 years",
      gender: "Female",
      location: "Seattle",
      description:
        "Luna is a majestic Maine Coon with a friendly disposition. Despite her large size, she's gentle and playful. She gets along well with other cats and enjoys interactive toys.",
      vaccinated: true,
      neutered: true,
      friendly: true,
      trained: false,
      image:
        "https://images.unsplash.com/photo-1616128417859-6ed39cccb731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFpbmUlMjBjb29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1616128417859-6ed39cccb731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFpbmUlMjBjb29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1haW5lJTIwY29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
    },
    {
      id: 5,
      name: "Max",
      type: "Dog",
      breed: "Beagle",
      age: "1 year",
      gender: "Male",
      location: "Dallas",
      description:
        "Max is an energetic Beagle puppy who loves to explore. He's curious and has a great sense of smell. He enjoys playing with toys and going for walks to discover new scents.",
      vaccinated: true,
      neutered: false,
      friendly: true,
      trained: false,
      image:
        "https://images.unsplash.com/photo-1563889958749-625da26ed355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1563889958749-625da26ed355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ],
    },
    {
      id: 6,
      name: "Oliver",
      type: "Cat",
      breed: "Tabby",
      age: "6 months",
      gender: "Male",
      location: "San Francisco",
      description:
        "Oliver is a playful and curious tabby kitten. He's incredibly social and loves to chase toys. He's quickly learning to use his scratching post and enjoys watching birds from the window.",
      vaccinated: true,
      neutered: false,
      friendly: true,
      trained: true,
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
    },
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const openModal = (pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const filteredPets =
    activeFilter === "All Pets"
      ? pets
      : pets.filter((pet) => pet.type === activeFilter);

  return (
    <section className="featured-pets">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Adorable Pets</h2>
          <p>These loving companions are looking for their forever homes</p>
        </div>

        <div className="pet-filter">
          <button
            className={`filter-btn ${
              activeFilter === "All Pets" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("All Pets")}
          >
            All Pets
          </button>
          <button
            className={`filter-btn ${activeFilter === "Dog" ? "active" : ""}`}
            onClick={() => handleFilterChange("Dog")}
          >
            Dogs
          </button>
          <button
            className={`filter-btn ${activeFilter === "Cat" ? "active" : ""}`}
            onClick={() => handleFilterChange("Cat")}
          >
            Cats
          </button>
          <button className="filter-btn">Other Pets</button>
        </div>

        <div className="pet-cards">
          {filteredPets.map((pet, index) => (
            <motion.div
              key={pet.id}
              className="pet-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="pet-card-inner" onClick={() => openModal(pet)}>
                <motion.div
                  className="pet-image"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img src={pet.image} alt={pet.name} />
                  <motion.div
                    className="pet-badges"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.span
                      className="pet-badge pet-type"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {pet.type}
                    </motion.span>
                    <motion.span
                      className="pet-badge pet-gender"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {pet.gender === "Male" ? <FaMars /> : <FaVenus />}
                    </motion.span>
                  </motion.div>
                </motion.div>

                <div className="pet-info">
                  <div className="pet-location">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, color: "#ff6f61" }}
                    >
                      <FaMapMarkerAlt />
                    </motion.div>
                    <span>{pet.location}</span>
                  </div>

                  <motion.h4 whileHover={{ color: "#ff6f61" }}>
                    {pet.name}
                  </motion.h4>

                  <div className="pet-details">
                    <span className="breed">{pet.breed}</span>
                    <span className="age">{pet.age}</span>
                  </div>

                  <div className="pet-card-footer">
                    <motion.button
                      className="adopt-now-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <FaArrowRight className="btn-icon" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="view-all">
          <button className="view-all-btn">View All Pets</button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedPet && (
          <PetDetailsModal pet={selectedPet} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default FeaturedPets;
