import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const projectCardsRef = useRef([]);

  const projects = [
    {
      title: "DevOps Infrastructure Hub",
      description: "Full DevOps infrastructure stack with CI/CD, GitOps, and observability on self-hosted VPS. Single-node Kubernetes with ArgoCD, Jenkins, Prometheus, Grafana, Helm, NGINX ingress, DNS routing, and Cloudflare traffic management.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      deployedLink: "https://tools.trahulprabhu.work",
      githubLink: "https://github.com/trahulprabhu38",
      tags: ["Kubernetes", "ArgoCD", "Jenkins", "Prometheus", "Grafana"]
    },
    {
      title: "Three-Tier Architecture on AWS",
      description: "Secure, scalable 3-tier full-stack application deployment on AWS EKS. React frontend, Node.js/Express backend, MongoDB database with CI/CD using Jenkins, SonarQube code quality analysis, and Trivy security scanning.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      deployedLink: "#",
      githubLink: "https://github.com/trahulprabhu38/3-tier-full-stack-deployment",
      tags: ["AWS EKS", "Jenkins", "SonarQube", "Trivy", "MongoDB"]
    },
    {
      title: "StackOps - DevOps Demo",
      description: "End-to-end DevOps demonstration project built on AWS ECS Fargate with GitHub Actions CI/CD. Terraform for infrastructure provisioning, Docker-native deployments, and reference architecture for cloud-native DevOps workflows.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      deployedLink: "#",
      githubLink: "https://github.com/trahulprabhu38/stackOps",
      tags: ["AWS ECS", "Terraform", "GitHub Actions", "Docker"]
    },
    {
      title: "Regression-DevOpsified",
      description: "Complete MLOps + DevOps pipeline for Walmart sales Streamlit prediction app. Dockerized ML application with Jenkins CI/CD, AWS EC2 infrastructure automation, Prometheus + Grafana monitoring, and MLflow integration for model tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      deployedLink: "#",
      githubLink: "https://github.com/trahulprabhu38",
      tags: ["MLOps", "Docker", "Jenkins", "AWS EC2", "MLflow"]
    },
    {
      title: "KrishiSeva - AI Agriculture Platform",
      description: "AI-powered agriculture platform with crop recommendation via ML, damage alert system, disease detection, real-time weather integration, and marketplace for farmers. Built with MERN stack, TensorFlow, and Twilio integration.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      deployedLink: "#",
      githubLink: "https://github.com/trahulprabhu38/34_Zenith_AgricultureAndFoodTechnologies",
      tags: ["MERN", "TensorFlow", "AI/ML", "Twilio"]
    },
    {
      title: "ResQ - Healthcare Platform",
      description: "Healthcare platform with role-based access via QR codes, GenAI-powered health reports, daily checkups, AES-256 & JWT security. Deployed using Docker and Kubernetes with complete DevOps pipeline.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      deployedLink: "#",
      githubLink: "https://github.com/trahulprabhu38/resQ",
      tags: ["Docker", "Kubernetes", "GenAI", "Healthcare"]
    }
  ];

  useEffect(() => {
    // Simplified animations - just fade in
    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-header">
        <h2 className="section-title">Featured DevOps Projects</h2>
        <p className="section-subtitle">
          Transforming infrastructure through automation, orchestration, and cloud excellence
        </p>
      </div>

      {/* Horizontal Sliding Carousel */}
      <div className="projects-carousel-container">
        <div
          className="projects-carousel"
          ref={projectsContainerRef}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-slide ${index === currentIndex ? 'active' : ''}`}
              ref={(el) => (projectCardsRef.current[index] = el)}
            >
              <div className="project-card-modern">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-actions">
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn primary"
                    >
                      <span>Live Demo</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn secondary"
                    >
                      <span>GitHub</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button className="carousel-control prev" onClick={prevProject} aria-label="Previous project">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="carousel-control next" onClick={nextProject} aria-label="Next project">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="carousel-pagination">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="project-counter">
        <span className="current">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="divider">/</span>
        <span className="total">{String(projects.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
};

export default Projects; 