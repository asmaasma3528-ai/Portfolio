import { useState, useEffect } from "react";
import "./styles/App.css";
import ProjectCard from "../src/components/projectCard";
import Hero from "./components/heroComponent";
import Header from "../src/components/header";
import Skills from "../src/components/skills";
import Projects from "../src/components/project";
import About from "../src/components/about";
import ExperienceEducation from "../src/components/education";
import Achievements from "../src/components/acheivements";
import Contact from "../src/components/contact";
import Footer from "./components/footer";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://pavan-portfolio-api.onrender.com/api/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.db_data) setProjects(data.db_data);
      });
  }, []);

  return (
    <div className="app-main-wrapper">
      <section className="full-width-section">
        <Header />
      </section>

      <section className="full-width-section">
        <Hero />
      </section>

      <section className="full-width-section">
        <About />
      </section>

      <main className="container">
        <section className="full-width-section">
          <Skills />
        </section>
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          <section className="full-width-section">
            <Projects />
          </section>
          <section className="full-width-section">
            <ExperienceEducation />
          </section>
          <section className="full-width-section">
            <Achievements />
          </section>
          <section className="full-width-section">
          <Contact />
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
