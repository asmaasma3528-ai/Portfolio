import "../styles/Hero.css";
import profileImg from "../utils/Animemine.jpg";

export default function Hero() {
  return (
    <section className="hero-wrapper"  style = {{marginTop:"4rem"}}>
      <div className="hero-content">
        <h3 style={{ color: "var(--accent-cyan)" }}>Hello, I'm</h3>
        <h1 style={{ fontSize: "4rem", margin: "10px 0" }}>Pavan Kumar</h1>
        <h2 style={{ color: "var(--text-dim)", fontWeight: "400" }}>
          And I'm a <span style={{ color: "var(--accent-cyan)", fontWeight: "bold" }}>ETL Developer</span>
        </h2>
        
        {/* STATS SECTION from the video */}
        <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
          <div className="stat">
            <h2 style={{ margin: 0 }}>10+</h2>
            <p style={{ color: "var(--text-dim)", fontSize: "14px" }}>Years Experience</p>
          </div>
          <div className="stat">
            <h2 style={{ margin: 0 }}>30+</h2>
            <p style={{ color: "var(--text-dim)", fontSize: "14px" }}>Projects Completed</p>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <button className="btn-cyan">Hire Me</button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>

      <div className="hero-image-box" >
        <div className="profile-frame">
          <img src={profileImg} alt="Pavan Kumar" />
        </div>
      </div>
    </section>
  );
}