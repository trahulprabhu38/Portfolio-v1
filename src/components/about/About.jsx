import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate DevOps Engineer with expertise in cloud infrastructure,
              containerization, and automation. With a strong foundation in both
              development and operations, I bridge the gap between software development
              and IT operations to create efficient, scalable, and reliable systems.
            </p>
            <p>
              My experience includes working with modern DevOps tools and practices
              such as Kubernetes, Docker, AWS, Terraform, and CI/CD pipelines. I
              enjoy solving complex infrastructure challenges and implementing
              automation solutions that improve development workflows.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Technologies Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 