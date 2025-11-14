import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Professional Summary</h3>
            <p>
              DevOps Engineer with 1 years of experience specializing in cloud infrastructure,
              Kubernetes orchestration, and CI/CD automation. Currently working at TOINGG, deploying
              production-grade AKS clusters and implementing GitOps workflows with ArgoCD.
            </p>

            <h3>Key Achievements</h3>
            <ul className="achievements-list">
              <li>Reduced Mean Time To Recovery (MTTR) by 70% through Prometheus-Grafana monitoring</li>
              <li>Achieved 90% cost reduction through multi-cloud infrastructure optimization</li>
              <li>Improved data processing throughput by 90% at PGAGI</li>
              <li>Led 10-member team at ISRO for Bhuvan geospatial platform development</li>
              <li>Ranked #35 on GSSoC'24 leaderboard with 90+ open-source contributions</li>
              <li>Mentored 70+ students achieving 100% project completion rate</li>
            </ul>

            <h3>Technical Expertise</h3>
            <ul className="expertise-list">
              <li><strong>Cloud & DevOps:</strong> AWS, Azure (AKS), GCP, Docker, Kubernetes, Terraform, Ansible</li>
              <li><strong>CI/CD & GitOps:</strong> Jenkins, ArgoCD, GitHub Actions</li>
              <li><strong>Observability:</strong> Prometheus, Grafana, Loki, EFK Stack</li>
              <li><strong>Security:</strong> DevSecOps, SonarQube, Trivy</li>
              <li><strong>Development:</strong> Python, Go, JavaScript, React, Node.js</li>
            </ul>

            <div className="tools-cta">
              <a href="https://tools.trahulprabhu.work" target="_blank" rel="noopener noreferrer" className="tools-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <span>Explore My DevOps Toolkit</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>4</h3>
              <p>Companies</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Deployed</p>
            </div>
            <div className="stat-item">
              <h3>90+</h3>
              <p>Open Source PRs</p>
            </div>
            <div className="stat-item">
              <h3>70%</h3>
              <p>MTTR Reduction</p>
            </div>
            <div className="stat-item">
              <h3>90%</h3>
              <p>Cost Savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 