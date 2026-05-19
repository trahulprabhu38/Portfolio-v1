import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "1+", label: "Years Experience" },
  { value: "6", label: "Companies" },
  { value: "15+", label: "Projects Deployed" },
  { value: "90+", label: "Open Source PRs" },
  { value: "3", label: "Cloud Certifications" },
  { value: "45%", label: "Infra Cost Cut" },
];

const ACHIEVEMENTS = [
  "ISO 27001 certification via hardened infra controls at Valura.AI",
  "45% dev cost reduction by migrating AWS → on-prem Proxmox",
  "Production evacuation ME-Central-1 → AP-South-1 in sub-15 min",
  "90% infra cost reduction via multi-cloud Terraform at TOINGG",
  "Led 10-member ISRO team on Bhuvan geospatial platform",
  "GSSoC'24 Peak #1, Final #35 — 90+ open-source contributions",
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-eyebrow, .about-h2", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%" },
      });
      gsap.from(".about-bio", {
        opacity: 0,
        x: -36,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });
      gsap.from(".about-ach-item", {
        opacity: 0,
        x: -24,
        duration: 0.5,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".about-stat", {
        opacity: 0,
        y: 28,
        scale: 0.88,
        duration: 0.5,
        stagger: 0.07,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-glow-left" />
      <div className="about-glow-right" />

      <div className="about-inner">
        <div className="about-header">
          <span className="about-eyebrow">About Me</span>
          <h2 className="about-h2">Building Reliable Systems</h2>
        </div>

        <div className="about-body">
          <div className="about-left">
            <p className="about-bio">
              SRE @Signzy · DevOps @Valura.AI · ISRO platform dev · KCNA, CKAD &amp; Terraform
              certified. 1+ year building reliable, cost-efficient production infrastructure across
              AWS, Azure, GCP and on-premises — with a focus on security, observability, and
              GitOps-driven delivery.
            </p>

            <ul className="about-achievements">
              {ACHIEVEMENTS.map((a, i) => (
                <li key={i} className="about-ach-item">
                  <span className="ach-pip" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://tools.trahulprabhu.work"
              target="_blank"
              rel="noopener noreferrer"
              className="about-toolkit-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              Explore DevOps Toolkit
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="about-right">
            <div className="about-stats-grid">
              {STATS.map((s, i) => (
                <div key={i} className="about-stat">
                  <div className="stat-shine" />
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
