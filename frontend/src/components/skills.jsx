import React from 'react';
import "../styles/Skills.css";

const Skills = () => {
  const skillGroups = [
    {
      category: "ETL & Integration",
      skills: ["Informatica", "Talend", "SSIS", "Azure Data Factory"]
    },
    {
      category: "Databases & Warehousing",
      skills: ["SQL Server", "Oracle", "Snowflake", "PostgreSQL", "Teradata"]
    },
    {
      category: "Languages & Scripting",
      skills: ["SQL", "Python", "Shell Scripting", "PowerShell"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical <span>Expertise</span></h2>
        
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={index}>
              <div className="card-header">
                <div className="pulse-dot"></div>
                <h3>{group.category}</h3>
              </div>
              <div className="pill-container">
                {group.skills.map((skill, i) => (
                  <span className="skill-pill" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Marquee Logic Refined */}
      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-content">
            <span className="skill-tag">Data Engineering</span>
            <span className="skill-tag">Pipeline Automation</span>
            <span className="skill-tag">Cloud Migration</span>
            <span className="skill-tag">Data Warehousing</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="marquee-content" aria-hidden="true">
            <span className="skill-tag">Data Engineering</span>
            <span className="skill-tag">Pipeline Automation</span>
            <span className="skill-tag">Cloud Migration</span>
            <span className="skill-tag">Data Warehousing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;