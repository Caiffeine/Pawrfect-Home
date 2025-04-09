import React, { useEffect } from "react";
import AboutHero from "./AboutHero";
import BackgroundSection from "./BackgroundSection";
import TeamSection from "./TeamSection";
import GoalSection from "./GoalSection";
import Newsletter from "../home-components/Newsletter";

function About() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHero />
      <BackgroundSection />
      <TeamSection />
      <GoalSection />
      <Newsletter />
    </>
  );
}

export default About;
