import React, { useEffect } from "react";
import ServicesHero from "./ServicesHero";
import DetailedServices from "./DetailedServices";
import ServicesFAQ from "./ServicesFAQ";
import ServicesCTA from "./ServicesCTA";
import Newsletter from "../home-components/Newsletter";

function Services() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHero />
      <DetailedServices />
      <ServicesFAQ />
      <ServicesCTA />
      <Newsletter />
    </>
  );
}

export default Services;
