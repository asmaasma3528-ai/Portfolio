import "../styles/Header.css";

export default function Header() {
  return (
    <nav className="navbar-compact">
      <div className="nav-container">
        <div className="logo-text">
          Portfolio
        </div>
        
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="btn-nav-small">Talk</button>
      </div>
    </nav>
  );
}