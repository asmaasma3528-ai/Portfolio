import "../styles/Hero.css";
import pic2 from "../utils/pic2.jpg";

export default function Hero() {
  return (
    <section className="hero-wrapper" style={{ marginTop: "4rem" }} id="home">
      <div className="hero-content">
        <h3 style={{ color: "var(--accent-cyan)" }}>Hello, I'm</h3>
        <h1 style={{ fontSize: "4rem", margin: "10px 0" }}>Pavan Kumar</h1>
        <h2 style={{ color: "var(--text-dim)", fontWeight: "400" }}>
          And I'm a{" "}
          <span style={{ color: "var(--accent-cyan)", fontWeight: "bold" }}>
            ETL Developer
          </span>
        </h2>

        {/* STATS SECTION from the video */}
        <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
          <div className="stat">
            <h2 style={{ margin: 0 }}>4+</h2>
            <p style={{ color: "var(--text-dim)", fontSize: "14px" }}>
              Years Experience
            </p>
          </div>
          <div className="stat">
            <h2 style={{ margin: 0 }}>30+</h2>
            <p style={{ color: "var(--text-dim)", fontSize: "14px" }}>
              Projects Completed
            </p>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
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

      <div className="hero-image-box">
        <div className="profile-frame">
          <img src={pic2} alt="Pavan Kumar" />
        </div>
      </div>
    </section>
  );
}
