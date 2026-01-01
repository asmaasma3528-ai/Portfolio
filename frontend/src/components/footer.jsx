import React from 'react';
import "../styles/Footer.css";
import instaLogo from "../utils/insta.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">PAVAN KUMAR<span>&nbsp;CHEEMALA</span>
          
          </div>
          <p>Architecting seamless data pipelines and turning raw data into strategic assets.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>

            <a href="https://github.com/your-github" target="_blank" rel="noreferrer">GitHub</a>

            <a href="mailto:Pavankumarcheemala1998@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Pavan Kumar. All Rights Reserved.</p>
        <p>Built with React & Passion for Data</p>
      </div>
    </footer>
  );
};

export default Footer;