import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Make sure to npm install react-icons
import "../styles/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar-compact ${scrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}>
      <div className="nav-container">
        <div className="logo-text" onClick={closeMenu}>
          PAVAN<span>.K</span>
        </div>
        
        {/* Hamburger Icon */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
          <li><a href="#resume" className="nav-link" onClick={closeMenu}>History</a></li>
          <li><a href="#achievements" className="nav-link" onClick={closeMenu}>Impact</a></li>
          
          {/* Talk button moves inside menu on mobile */}
          <li className="mobile-only">
             <a href="#contact" className="talk-btn" onClick={closeMenu}>
              <span>Talk</span>
            </a>
          </li>
        </ul>

        <div className="nav-actions desktop-only">
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