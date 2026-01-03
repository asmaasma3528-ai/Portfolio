import React, { useState, useEffect } from "react";
import "../styles/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-compact ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo-text">
          PAVAN<span>.K</span>
        </div>
        
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#resume" className="nav-link">History</a></li>
          <li><a href="#achievements" className="nav-link">Impact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="talk-btn">
            <span>Talk</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12L12 1M12 1H1M12 1V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}