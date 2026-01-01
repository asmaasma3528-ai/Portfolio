// frontend/src/components/Projects.jsx
import ProjectCard from "./projectCard";
import { projectData } from "../data/projectDetails";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="section-title">My <span>Work</span></h2>
      <div className="project-grid">
        {projectData.map((singleProject) => (
          <ProjectCard key={singleProject.id} project={singleProject} />
        ))}
      </div>
    </section>
  );
}