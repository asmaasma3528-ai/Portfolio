import "../styles/about.css";
import pic1 from "../utils/pic1.jpg";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-left">
          <div className="profile-frame">
            <img src={pic1} alt="Pavan Kumar" />
          </div>
        </div>
        <div className="about-right">
          <h2 className="section-title">Turning Raw Data into <span>Strategic Assets</span></h2>
          <p className="description">
            Hi, I'm <strong>Pavan Kumar</strong>. As an ETL Developer, I specialize in 
            architecting seamless data pipelines that bridge the gap between complex 
            data sources and business intelligence. 
          </p>
          <p className="description">
            My philosophy is simple: Data isn't just numbers; it's the narrative of a business. 
            I focus on high-performance integration, data cleansing, and building scalable 
            warehousing solutions using modern tech stacks.
          </p>
          
          <div className="about-mission">
            <div className="mission-item">
              <span className="dot"></span>
              <p>Optimizing ETL workflows for 40% faster processing.</p>
            </div>
            <div className="mission-item">
              <span className="dot"></span>
              <p>Ensuring 99.9% data accuracy across pipelines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}