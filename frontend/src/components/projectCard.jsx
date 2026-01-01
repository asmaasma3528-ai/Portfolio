import "../styles/projectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-top">
        <div className="card-icon">📊</div>
        <div className="external-link">
           <a href={project.link} target="_blank" rel="noreferrer">🔗</a>
        </div>
      </div>
      
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      
      <div className="project-tech-stack">
        {project.tech?.map((item, index) => (
          <span key={index} className="tech-tag">{item}</span>
        ))}
      </div>
    </div>
  );
}