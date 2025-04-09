import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FilterSidebar from "./FilterSidebar";
import PetGrid from "./PetGrid";
import PetSearch from "./PetSearch";
import PetPagination from "./PetPagination";
import "./availablepets-styles/AvailablePetsPage.css";

// Sample pet data (in a real app, this would come from an API)
const allPets = [
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
    size: "Large",
    color: "Golden",
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
    size: "Medium",
    color: "Cream",
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
    size: "Large",
    color: "Black/Tan",
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
    size: "Large",
    color: "Tabby",
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
    size: "Medium",
    color: "Tricolor",
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
    size: "Small",
    color: "Orange Tabby",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: 7,
    name: "Bella",
    type: "Dog",
    breed: "Labrador Retriever",
    age: "4 years",
    gender: "Female",
    location: "Denver",
    description:
      "Bella is a sweet and calm Labrador who loves water and retrieving toys. She's great with children and other animals, making her perfect for an active family.",
    vaccinated: true,
    neutered: true,
    friendly: true,
    trained: true,
    size: "Large",
    color: "Chocolate",
    image:
      "https://images.unsplash.com/photo-1579213838826-6ebf6aef2b4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFicmFkb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1579213838826-6ebf6aef2b4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFicmFkb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: 8,
    name: "Simba",
    type: "Cat",
    breed: "Bengal",
    age: "3 years",
    gender: "Male",
    location: "Miami",
    description:
      "Simba is a striking Bengal cat with high energy and a playful nature. He loves climbing and exploring, so an enriched environment with cat trees would be ideal for him.",
    vaccinated: true,
    neutered: true,
    friendly: true,
    trained: true,
    size: "Medium",
    color: "Spotted",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZ2FsJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZ2FsJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2lhbWVzZSUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: 9,
    name: "Rocky",
    type: "Dog",
    breed: "Boxer",
    age: "5 years",
    gender: "Male",
    location: "Philadelphia",
    description:
      "Rocky is a strong but gentle Boxer who's great with families. He's well-trained and enjoys playing in the yard. He needs regular exercise and loves going for runs.",
    vaccinated: true,
    neutered: true,
    friendly: true,
    trained: true,
    size: "Large",
    color: "Fawn",
    image:
      "https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym94ZXIlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym94ZXIlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: 10,
    name: "Daisy",
    type: "Cat",
    breed: "Persian",
    age: "4 years",
    gender: "Female",
    location: "Austin",
    description:
      "Daisy is a beautiful Persian cat with a calm demeanor. She loves being groomed and enjoys quiet environments. She's best suited for a home without young children or other pets.",
    vaccinated: true,
    neutered: true,
    friendly: false,
    trained: true,
    size: "Medium",
    color: "White",
    image:
      "https://images.unsplash.com/photo-1635521844699-7d879615c394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1635521844699-7d879615c394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1616128417859-6ed39cccb731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFpbmUlMjBjb29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: 11,
    name: "Leo",
    type: "Dog",
    breed: "Pomeranian",
    age: "2 years",
    gender: "Male",
    location: "Portland",
    description:
      "Leo is a fluffy and energetic Pomeranian who loves attention. Despite his small size, he has a big personality. He's good with older children but may be too delicate for very young kids.",
    vaccinated: true,
    neutered: false,
    friendly: true,
    trained: true,
    size: "Small",
    color: "Orange",
    image:
      "https://images.unsplash.com/photo-1582456891925-a53965520520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9tZXJhbmlhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1582456891925-a53965520520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9tZXJhbmlhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1563889958749-625da26ed355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: 12,
    name: "Milo",
    type: "Cat",
    breed: "Scottish Fold",
    age: "1 year",
    gender: "Male",
    location: "Washington DC",
    description:
      "Milo is an adorable Scottish Fold with distinctive folded ears. He's playful yet gentle, and loves interactive toys. He gets along well with other cats and calm dogs.",
    vaccinated: true,
    neutered: true,
    friendly: true,
    trained: false,
    size: "Medium",
    color: "Gray",
    image:
      "https://images.unsplash.com/photo-1595752776689-aebef37b5d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NvdHRpc2glMjBmb2xkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1595752776689-aebef37b5d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NvdHRpc2glMjBmb2xkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
];

function AvailablePetsPage() {
  const [pets, setPets] = useState(allPets);
  const [filteredPets, setFilteredPets] = useState(allPets);
  const [filters, setFilters] = useState({
    type: "All",
    gender: "All",
    age: "All",
    size: "All",
    features: [],
    searchTerm: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 9;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter pets based on current filters
  useEffect(() => {
    let result = allPets;

    // Filter by type
    if (filters.type !== "All") {
      result = result.filter((pet) => pet.type === filters.type);
    }

    // Filter by gender
    if (filters.gender !== "All") {
      result = result.filter((pet) => pet.gender === filters.gender);
    }

    // Filter by age
    if (filters.age !== "All") {
      result = result.filter((pet) => {
        const ageNum = parseInt(pet.age);
        switch (filters.age) {
          case "Baby":
            return (
              pet.age.includes("month") ||
              (ageNum < 1 && pet.age.includes("year"))
            );
          case "Young":
            return ageNum >= 1 && ageNum <= 3 && pet.age.includes("year");
          case "Adult":
            return ageNum > 3 && ageNum <= 7 && pet.age.includes("year");
          case "Senior":
            return ageNum > 7 && pet.age.includes("year");
          default:
            return true;
        }
      });
    }

    // Filter by size
    if (filters.size !== "All") {
      result = result.filter((pet) => pet.size === filters.size);
    }

    // Filter by features
    if (filters.features.length > 0) {
      result = result.filter((pet) => {
        return filters.features.every(
          (feature) => pet[feature.toLowerCase()] === true
        );
      });
    }

    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(
        (pet) =>
          pet.name.toLowerCase().includes(searchLower) ||
          pet.breed.toLowerCase().includes(searchLower) ||
          pet.location.toLowerCase().includes(searchLower)
      );
    }

    setFilteredPets(result);
    setCurrentPage(1);
  }, [filters]);

  // Get current pets for pagination
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="available-pets-page">
      <div className="available-pets-hero">
        <div className="overlay"></div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Available Pets</h1>
            <p>
              Find your perfect companion among our adorable pets waiting for a
              loving home
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="available-pets-content">
          <PetSearch filters={filters} onFilterChange={handleFilterChange} />

          <div className="pets-container">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
            />

            <div className="pets-main-content">
              <div className="pets-results-info">
                <p>
                  Showing <span>{indexOfFirstPet + 1}</span> -
                  <span>{Math.min(indexOfLastPet, filteredPets.length)}</span>{" "}
                  of
                  <span> {filteredPets.length}</span> pets
                </p>
              </div>

              {filteredPets.length > 0 ? (
                <>
                  <PetGrid pets={currentPets} />
                  <PetPagination
                    petsPerPage={petsPerPage}
                    totalPets={filteredPets.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </>
              ) : (
                <div className="no-pets-found">
                  <img
                    src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=740&t=st=1682458891~exp=1682459491~hmac=db3e2eb6c5b06186ec95b2524d1bb7ac84a498c5edbb287cd85826131c04cab3"
                    alt="No pets found"
                  />
                  <h3>No pets found matching your criteria</h3>
                  <p>Try adjusting your filters or search term</p>
                  <button
                    className="reset-filters-btn"
                    onClick={() =>
                      setFilters({
                        type: "All",
                        gender: "All",
                        age: "All",
                        size: "All",
                        features: [],
                        searchTerm: "",
                      })
                    }
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailablePetsPage;
