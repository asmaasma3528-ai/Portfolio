import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            PAVAN KUMAR<span>&nbsp;CHEEMALA</span>
          </div>
          <p>
            Architecting seamless data pipelines and turning raw data into
            strategic assets.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pavan-1998-kumar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/inside_of_pawankumar/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pavanKumarCheemala1998@gmail.com&su=Hiring%20Opportunity"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
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
