import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./../styles/TeamSection.css";
import russImage from "./../img/team/russ.jpg";
import josefImage from "./../img/team/josef.jpg";
import cairosImage from "./../img/team/cairos.jpg";

function TeamSection() {
  const teamMembers = [
    {
      name: "Russ Peter E. Garcia",
      role: "Fullstack Developer",
      image: russImage,
      description:
        "Russ is a young full-stack developer with a bright mind that takes no excuses when tackling a task. He mainly focuses more on the backend side of system, but he is not afraid to get his hands dirty with a little bit of frontend development.",
      socialLinks: {
        linkedin: "#",
        github: "https://github.com/iamrussgarcia",
        email: "russpeter.garcia.cics@ust.edu.ph",
      },
    },
    {
      name: "Josef Luis M. Jacinto",
      role: "Backend Developer",
      image: josefImage,
      description:
        "Josef is a web developer who started freelancing in 2025. I specialize in building SaaS applications and have a strong focus on leveraging CDNs and cloud functions to create fast, scalable solutions.",
      socialLinks: {
        linkedin: "#",
        github: "https://github.com/josefluis12",
        email: "josefluis.jacinto.cics@ust.edu.ph",
      },
    },
    {
      name: "John Cairos A. Magno",
      role: "Frontend Developer | UI/UX Designer",
      image: cairosImage,
      description:
        "Cairos combines creative vision with technical expertise to craft intuitive user interfaces. He ensures the application delivers a seamless and visually appealing user experience through his strong design skills.",
      socialLinks: {
        linkedin: "#",
        github: "https://github.com/Caiffeine",
        email: "johncairos.magno.cics@ust.edu.ph",
      },
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Our Team</div>
          <h2>Meet The Developers</h2>
          <p>The passionate people behind Pawrfect Home</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-social">
                  <a href={member.socialLinks.linkedin} aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href={member.socialLinks.github} aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={member.socialLinks.email} aria-label="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p className="member-bio">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
