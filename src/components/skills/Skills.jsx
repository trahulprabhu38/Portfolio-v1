import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "#326CE5",
    skills: [
      { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Terraform", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "ArgoCD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
      { name: "Jenkins", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitHub Actions", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "Ansible", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
      { name: "Helm", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
      { name: "GCP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Nginx", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "Istio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/istio/istio-original.svg" },
    ],
  },
  {
    id: "obs",
    label: "Observability & Security",
    color: "#e6522c",
    skills: [
      { name: "Prometheus", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Loki", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Elasticsearch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg" },
      { name: "Kibana", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original.svg" },
      { name: "SonarQube", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
      { name: "Trivy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Vault", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
    ],
  },
  {
    id: "dev",
    label: "Languages & Frameworks",
    color: "#10b981",
    skills: [
      { name: "Go", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Bash", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    ],
  },
  {
    id: "db",
    label: "Databases",
    color: "#7c66e3",
    skills: [
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "DynamoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "S3 / Object", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    ],
  },
];

const totalTools = CATEGORIES.reduce((a, c) => a + c.skills.length, 0);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-eyebrow, .skills-h2", {
        opacity: 0,
        y: 20,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%" },
      });
      gsap.from(".sk-category", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-glow-tl" />
      <div className="skills-glow-br" />

      <div className="skills-inner">
        <div className="skills-header">
          <span className="skills-eyebrow">Technical Proficiency</span>
          <h2 className="skills-h2">Tools of the Trade</h2>
        </div>

        <div className="skills-all-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="sk-category"
              style={{ '--cat-color': cat.color }}
            >
              <span className="sk-category-label" style={{ color: cat.color }}>
                {cat.label}
              </span>
              <div className="sk-tools-row">
                {cat.skills.map((skill, i) => (
                  <div key={`${cat.id}-${i}`} className="sk-card">
                    <div className="sk-img-wrap">
                      <img src={skill.img} alt={skill.name} loading="lazy" />
                    </div>
                    <span className="sk-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer-row">
          <span className="skills-count">{totalTools}+ tools</span>
          <span className="skills-tagline">Production-grade · Cloud-native · Security-first</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
