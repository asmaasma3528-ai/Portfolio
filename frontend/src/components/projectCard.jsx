
export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-icon">📊</div>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer">
        View Project →
      </a>
    </div>
  );
}