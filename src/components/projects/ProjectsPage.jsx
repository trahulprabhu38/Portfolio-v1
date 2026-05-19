import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectsPage.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "DevOps Infrastructure Hub",
    description: "Full DevOps infrastructure stack with CI/CD, GitOps, and observability on self-hosted VPS. Single-node Kubernetes with ArgoCD, Jenkins, Prometheus, Grafana, Helm, NGINX ingress, DNS routing, and Cloudflare traffic management.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    deployedLink: "https://tools.trahulprabhu.work",
    githubLink: "https://github.com/trahulprabhu38",
    tags: ["Kubernetes", "ArgoCD", "Jenkins", "Prometheus", "Grafana"],
    category: "Infrastructure",
    featured: true,
  },
  {
    title: "Agent Nexus – 6-Agent RAG System",
    description: "Productionised a 6-agent RAG pipeline on 2-node bare-metal k8s using Cilium (eBPF, kube-proxy replacement) + Istio STRICT mTLS. Deployed MetalLB (Layer 2) for on-premise VIP and Kiali + Prometheus for zero-instrumentation live service topology.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    deployedLink: "#",
    githubLink: "https://github.com/trahulprabhu38",
    tags: ["Cilium", "Istio", "MetalLB", "eBPF", "Kubernetes"],
    category: "Infrastructure",
    featured: true,
  },
  {
    title: "Three-Tier Architecture on AWS",
    description: "Secure, scalable 3-tier full-stack application on AWS EKS. React frontend, Node.js/Express backend, MongoDB database with CI/CD via Jenkins, SonarQube code quality analysis, and Trivy security scanning.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    deployedLink: "#",
    githubLink: "https://github.com/trahulprabhu38/3-tier-full-stack-deployment",
    tags: ["AWS EKS", "Jenkins", "SonarQube", "Trivy", "MongoDB"],
    category: "Cloud",
  },
  {
    title: "StackOps – DevOps Demo",
    description: "End-to-end DevOps demonstration on AWS ECS Fargate with GitHub Actions CI/CD. Terraform for infrastructure provisioning, Docker-native deployments, and reference architecture for cloud-native workflows.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    deployedLink: "#",
    githubLink: "https://github.com/trahulprabhu38/stackOps",
    tags: ["AWS ECS", "Terraform", "GitHub Actions", "Docker"],
    category: "Cloud",
  },
  {
    title: "Regression-DevOpsified",
    description: "Complete MLOps + DevOps pipeline for a Walmart sales prediction app. Dockerized ML application with Jenkins CI/CD, AWS EC2 automation, Prometheus + Grafana monitoring, and MLflow for model tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    deployedLink: "#",
    githubLink: "https://github.com/trahulprabhu38",
    tags: ["MLOps", "Docker", "Jenkins", "AWS EC2", "MLflow"],
    category: "Infrastructure",
  },
  {
    title: "KrishiSeva – AI Agriculture Platform",
    description: "AI-powered agriculture platform with crop recommendation via ML, damage alert system, disease detection, real-time weather integration, and farmer marketplace. Built with MERN stack and TensorFlow.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    deployedLink: "#",
    githubLink: "https://github.com/trahulprabhu38/34_Zenith_AgricultureAndFoodTechnologies",
    tags: ["MERN", "TensorFlow", "AI/ML", "Twilio"],
    category: "AI/ML",
  },
  {
    title: "ResQ – Healthcare Platform",
    description: "Healthcare platform with role-based access via QR codes, GenAI-powered health reports, daily checkups, AES-256 & JWT security. Deployed with Docker and Kubernetes via a full DevOps pipeline.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    deployedLink: "#",
    githubLink: "https://github.com/trahulprabhu38/resQ",
    tags: ["Docker", "Kubernetes", "GenAI", "Healthcare"],
    category: "Infrastructure",
  },
];

const FILTERS = ['All', 'Infrastructure', 'Cloud', 'AI/ML'];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -24,
        duration: 0.65,
        ease: 'power3.out',
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 36, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: i * 0.07,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <div className="projects-page">
      <div className="pp-bg-grid" />

      <div className="pp-header" ref={headerRef}>
        <span className="pp-eyebrow">Portfolio</span>
        <h1>Featured Projects</h1>
        <p>Production-grade infrastructure, cloud architectures, and full-stack systems.</p>
        <div className="pp-filter-bar">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`pp-filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="pp-grid">
        {filtered.map((project, index) => (
          <div
            key={project.title}
            className={`pp-card ${project.featured ? 'featured' : ''}`}
            ref={el => (cardsRef.current[index] = el)}
          >
            <div className="pp-card-img">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="pp-card-overlay">
                <div className="pp-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="pp-tag">{tag}</span>
                  ))}
                </div>
              </div>
              {project.featured && <span className="pp-featured-badge">Featured</span>}
            </div>

            <div className="pp-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="pp-card-actions">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="pp-btn-primary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="pp-btn-secondary">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
