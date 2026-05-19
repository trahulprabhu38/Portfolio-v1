import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Certifications.css";

gsap.registerPlugin(ScrollTrigger);

const featuredCerts = [
  {
    id: 1,
    title: "KCNA",
    fullTitle: "Kubernetes & Cloud Native Associate",
    issuer: "CNCF / Linux Foundation",
    date: "May 2026",
    type: "k8s",
    image: "/certificates/kcna.png",
    link: "#",
    isNew: true,
  },
  {
    id: 2,
    title: "CKAD",
    fullTitle: "Certified Kubernetes Application Developer",
    issuer: "CNCF / Linux Foundation",
    date: "2024",
    type: "k8s",
    image: "/certificates/ckad.png",
    link: "https://www.credly.com/earner/earned",
  },
  {
    id: 3,
    title: "Terraform Associate",
    fullTitle: "HashiCorp Infrastructure Automation Certified",
    issuer: "HashiCorp",
    date: "2024",
    type: "hashi",
    image: null,
    icon: "◈",
    link: "https://www.credly.com/earner/earned",
  },
];

const galleryCerts = [
  { id: 4,  title: "Google Cloud Engineering",      image: "/certificates/docker.png" },
  { id: 5,  title: "Docker Certification",          image: "/certificates/docker.png" },
  { id: 6,  title: "GoLang Advanced",               image: "/certificates/go.png" },
  { id: 7,  title: "GoLang Intermediate",           image: "/certificates/go-intermediate.png" },
  { id: 8,  title: "GirlScript Summer of Code",     image: "/certificates/1.png" },
  { id: 9,  title: "Hacktoberfest 2024",            image: "/certificates/2.png" },
  { id: 10, title: "GSSoC 2024 Badge",              image: "/certificates/3.png" },
  { id: 11, title: "100 Days of LeetCode",          image: "/certificates/100days.png" },
  { id: 12, title: "Backend Development",           image: "/certificates/backend.png" },
  { id: 13, title: "JP Morgan Software Engineering",image: "/certificates/jpmorgan.png" },
  { id: 14, title: "Hackfrost Hackathon",           image: "/certificates/hackfrost.png" },
  { id: 15, title: "BMS Hackathon",                 image: "/certificates/bms.png" },
  { id: 16, title: "RV Hackathon",                  image: "/certificates/rv.png" },
  { id: 17, title: "Reviewify Certification",       image: "/certificates/reviewify copy.jpeg" },
  { id: 18, title: "Tata Crucible",                 image: "/certificates/tata.png" },
  { id: 19, title: "50 Days Challenge",             image: "/certificates/50days copy.png" },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const featuredRef = useRef(null);
  const galleryCardsRef = useRef([]);
  const featuredCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.from(".certs-page-header", {
        opacity: 0, y: -24, duration: 0.7, ease: "power3.out",
      });

      // Featured: stagger slide-up
      gsap.fromTo(
        featuredCardsRef.current,
        { opacity: 0, y: 60, scale: 0.93 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      // Gallery: scale + fade from below, staggered
      gsap.set(galleryCardsRef.current, { opacity: 0, scale: 0.82, y: 28 });
      galleryCardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.to(card, {
          opacity: 1, scale: 1, y: 0,
          duration: 0.55,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" className="certifications-page">
      <div className="certs-bg-glow certs-bg-glow-1" />
      <div className="certs-bg-glow certs-bg-glow-2" />

      <div className="certs-page-header">
        <span className="certs-eyebrow">Credentials</span>
        <h1>Certifications & Achievements</h1>
        <p>Industry-recognised certifications in Kubernetes, Cloud, and DevOps</p>
      </div>

      {/* Featured */}
      <div className="featured-certs-section" ref={featuredRef}>
        <span className="certs-section-label">Professional Certifications</span>
        <div className="featured-certs-grid">
          {featuredCerts.map((cert, i) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`featured-cert-card cert-${cert.type}`}
              ref={el => (featuredCardsRef.current[i] = el)}
            >
              {cert.isNew && <span className="cert-new-badge">NEW</span>}

              {cert.image ? (
                <div className="featured-cert-img-wrap">
                  <img src={cert.image} alt={cert.title} />
                  <div className="featured-cert-img-overlay" />
                </div>
              ) : (
                <div className="featured-cert-icon-wrap">
                  <span className="featured-cert-icon">{cert.icon}</span>
                </div>
              )}

              <div className="featured-cert-info">
                <h3>{cert.title}</h3>
                <p className="featured-cert-full">{cert.fullTitle}</p>
                <div className="featured-cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <span className="featured-cert-cta">
                  View on Credly
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5l7-7M9.5 2.5H2.5M9.5 2.5v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="certs-gallery-section">
        <span className="certs-section-label">All Certifications</span>
        <div className="certs-gallery-grid">
          {galleryCerts.map((cert, i) => (
            <div
              key={cert.id}
              className="cert-gallery-card"
              ref={el => (galleryCardsRef.current[i] = el)}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-gallery-image">
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <div className="cert-gallery-shine" />
              </div>
              <div className="cert-gallery-title">{cert.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>×</button>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img" />
            <h3>{selectedCert.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
