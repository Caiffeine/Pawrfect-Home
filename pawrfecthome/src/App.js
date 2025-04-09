import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./home-components/Header";
import HeroSection from "./home-components/HeroSection";
import FeaturedPets from "./home-components/FeaturedPets";
import ServicesSection from "./home-components/ServicesSection";
import AboutUsSection from "./home-components/AboutUsSection";
import AdoptionSteps from "./home-components/AdoptionSteps";
import Testimonials from "./home-components/Testimonials";
import Newsletter from "./home-components/Newsletter";
import Footer from "./home-components/Footer";
import BackToTopButton from "./home-components/BackToTopButton";
import LoadingScreen from "./home-components/LoadingScreen";
import About from "./about-components/About";
import AvailablePetsPage from "./availablepets-components/AvailablePetsPage";
import Services from "./services-components/Services";
import AdoptionProcessPage from "./adoption-components/AdoptionProcessPage";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const HomePage = () => {
    // Add useEffect to scroll to top when HomePage mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <>
        <HeroSection />
        <AboutUsSection />
        <FeaturedPets />
        <ServicesSection />
        <AdoptionSteps />
        <Testimonials />
        <Newsletter />
      </>
    );
  };

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/available-pets" element={<AvailablePetsPage />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/adoption-process"
                element={<AdoptionProcessPage />}
              />
            </Routes>
          </main>
          <Footer />
          <BackToTopButton />
        </Router>
      )}
    </div>
  );
}

export default App;
