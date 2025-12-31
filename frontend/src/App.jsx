
import { useState, useEffect } from "react";
import "./styles/App.css";

import ProjectCard from "../src/components/projectCard";
import Hero from "./components/heroComponent";
import Header from "../src/components/header";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.db_data) setProjects(data.db_data);
      });
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      
      <main className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </main>
    </div>
  );
}