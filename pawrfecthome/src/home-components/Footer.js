import React from "react";
import {
  FaPaw,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget about-widget">
              <div className="footer-logo">
                <FaPaw className="logo-icon" />
                <h3>Pawrfect Home</h3>
              </div>
              <p>
                We are dedicated to finding loving homes for pets in need. Our
                mission is to connect animals with caring families and provide
                support throughout the adoption journey.
              </p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="footer-widget quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">
                    <FaChevronRight /> Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Available Pets
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Adoption Process
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Success Stories
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight /> Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-widget contact-widget">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <p>
                  <FaMapMarkerAlt /> 123 Pet Street, Animal City, AC 12345
                </p>
                <p>
                  <FaPhone /> +1 (555) 123-4567
                </p>
                <p>
                  <FaEnvelope /> info@pawrfecthome.com
                </p>
              </div>
              <div className="office-hours">
                <h5>Opening Hours</h5>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="footer-widget gallery-widget">
              <h4>Pet Gallery</h4>
              <div className="gallery-grid">
                <a href="#" className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Dog"
                  />
                </a>
                <a href="#" className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Cat"
                  />
                </a>
                <a href="#" className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFiYml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rabbit"
                  />
                </a>
                <a href="#" className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFtc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Hamster"
                  />
                </a>
                <a href="#" className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1559070169-7a021d58773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Bird"
                  />
                </a>
                <a href="#" className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1577036421869-3125afd4a109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Fish"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Pawrfect Home. All rights
            reserved. Designed with <span className="heart">❤</span> for pets.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
