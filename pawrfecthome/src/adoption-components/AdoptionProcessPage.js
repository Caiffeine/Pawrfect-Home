import React, { useEffect } from "react";
import AdoptionHero from "./AdoptionHero";
import AdoptionStepsDetails from "./AdoptionStepsDetails";
import AdoptionRequirements from "./AdoptionRequirements";
import AdoptionFAQ from "./AdoptionFAQ";
import AdoptionContactInfo from "./AdoptionContactInfo";
import "./adoption-styles/AdoptionProcessPage.css";

function AdoptionProcessPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Improved smooth scroll function for navigation
  const smoothScrollToSection = (id) => {
    if (!id) return; // Guard against null/undefined IDs

    const element = document.getElementById(id);
    if (element) {
      // Add offset for any fixed headers (adjust value as needed)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        behavior: "smooth",
        top: offsetPosition,
      });
    }
  };

  return (
    <div className="adoption-process-page">
      <AdoptionHero smoothScrollToSection={smoothScrollToSection} />
      <AdoptionStepsDetails />
      <AdoptionRequirements />
      <AdoptionFAQ smoothScrollToSection={smoothScrollToSection} />
      <AdoptionContactInfo smoothScrollToSection={smoothScrollToSection} />
    </div>
  );
}

export default AdoptionProcessPage;
