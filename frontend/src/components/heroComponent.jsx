import "../styles/hero.css";
import pic2 from "../utils/pic2.jpg";

export default function Hero() {
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-image-box">
        <div className="profile-frame">
          <img src={pic2} alt="Pavan Kumar" />
        </div>
      </div>

      <div className="hero-content">
        <h3 className="hero-subtitle">Hello, I'm</h3>
        <h1 className="hero-title">Pavan Kumar</h1>
        <h2 className="hero-role">
          And I'm a <span>ETL Developer</span>
        </h2>

        {/* STATS SECTION */}
        <div className="stats-container">
          <div className="stat">
            <h2>4+</h2>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h2>30+</h2>
            <p>Projects Completed</p>
          </div>
        </div>

        <div className="hero-btns">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pavanKumarCheemala1998@gmail.com&su=Hiring%20Opportunity"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-cyan">Hire Me</button>
          </a>

          <a href="https://wa.me/918897025462" target="_blank" rel="noreferrer">
            <button className="btn-outline">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
}