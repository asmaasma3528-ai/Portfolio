import React from 'react';
import "../styles/acheivements.css";

const Achievements = () => {
  const awards = [
    {
      title: "Pipeline Optimization Lead",
      organization: "DataCorp Solutions",
      result: "Reduced data latency by 45%",
      icon: "⚡"
    },
    {
      title: "Certified Data Engineering Professional",
      organization: "Cloud Academy",
      result: "Top 5% of the cohort",
      icon: "🏆"
    },
    {
      title: "Data Migration Excellence",
      organization: "Internal Project Award",
      result: "Zero data loss across 10TB migration",
      icon: "💎"
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title">Milestones & <span>Impact</span></h2>
        
        <div className="achievements-grid">
          {awards.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-info">
                <span className="achievement-result">{item.result}</span>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-org">{item.organization}</p>
              </div>
              <div className="hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;