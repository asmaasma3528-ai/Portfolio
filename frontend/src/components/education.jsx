import React from 'react';
import "../styles/education.css";

const ExperienceEducation = () => {
  const experiences = [
    {
      company: "DataCorp Solutions",
      role: "ETL Developer",
      duration: "2022 - Present",
      description: "Designed and implemented end-to-end ETL pipelines using Informatica and SQL Server. Reduced data processing time by 30% through query optimization."
    },
    {
      company: "Tech Mahindra (Example)",
      role: "Data Analyst Intern",
      duration: "2021 - 2022",
      description: "Assisted in data cleansing and mapping for large-scale migration projects. Performed automated validation checks using Python scripts."
    }
  ];

  const education = [
    {
      institution: "Sri Krishnadevaraya University",
      degree: "Bachelor of Science",
      year: "2018 - 2022",
      grade: "8.5 CGPA"
    },
    {
      institution: "Sri Krishnadevaraya University",
      degree: "Higher Secondary Education",
      year: "2016 - 2018",
      grade: "95%"
    }
  ];

  return (
    <section className="exp-edu-section" id="resume">
      <div className="container">
        <h2 className="section-title">Resume <span>History</span></h2>
        
        <div className="resume-grid">
          {/* Experience Column */}
          <div className="resume-column">
            <h3 className="column-heading">Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="resume-item" key={index}>
                  <div className="dot"></div>
                  <span className="duration">{exp.duration}</span>
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="resume-column">
            <h3 className="column-heading">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="resume-item" key={index}>
                  <div className="dot"></div>
                  <span className="duration">{edu.year}</span>
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  <p>Result: {edu.grade}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;