import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import Login from "./login-components/Login"; // Import the Login component
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false); // Start without loading
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (via session storage)
    const checkLoginStatus = () => {
      const loginStatus = sessionStorage.getItem("isLoggedIn");

      // If already logged in and page was refreshed, show loading
      if (loginStatus === "true") {
        setIsLoading(true);
        setIsLoggedIn(true);

        // Simulate loading time after refresh
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    checkLoginStatus();
  }, []);

  // Login handler function to pass to Login component
  const handleLogin = () => {
    setIsLoading(true); // Show loading screen during transition
    setIsLoggedIn(true);

    // Store login status in session storage to detect refreshes
    sessionStorage.setItem("isLoggedIn", "true");

    // Simulate loading time after login
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  // If loading is active, show the loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

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

  const MainLayout = ({ children }) => (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </>
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Make login page the default route */}
          <Route path="/" element={<Login onLogin={handleLogin} />} />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/available-pets"
            element={
              <MainLayout>
                <AvailablePetsPage />
              </MainLayout>
            }
          />
          <Route
            path="/services"
            element={
              <MainLayout>
                <Services />
              </MainLayout>
            }
          />
          <Route
            path="/adoption-process"
            element={
              <MainLayout>
                <AdoptionProcessPage />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
