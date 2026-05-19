import React from 'react';
import Typed from 'typed.js';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const TECH_PILLS = ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'ArgoCD', 'Prometheus', 'Go', 'Istio', 'Linux'];

const Hero = () => {
  const el = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['DevOps Engineer', 'Site Reliability Engineer', 'K8s Enthusiast'],
      typeSpeed: 80,
      backSpeed: 55,
      smartBackspace: true,
      loop: true,
      shuffle: false,
      cursorChar: '>',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <div className="hero-cert-badges">
          <span className="cert-badge cert-kcna">KCNA</span>
          <span className="cert-badge cert-ckad">CKAD</span>
          <span className="cert-badge cert-tf">Terraform</span>
          <span className="cert-badge cert-gssoc">GSSoC #1</span>
          <span className="cert-badge cert-iso">ISO 27001</span>
        </div>

        <h2>I<b className='pq'>'</b>m <b className='pq'>a</b> <span ref={el} /></h2>

        <p>
          SRE @Signzy · DevOps @Valura.AI · @ISRO · Open Source Contributor · DSCE'26 AIML
        </p>

        <div className="hero-cta-row">
          <button className="hero-btn-primary" onClick={() => navigate('/projects')}>
            View Projects
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a className="hero-btn-secondary" href="/resume-TRahulPrabhu.pdf" download="Resume-TRahulPrabhu.pdf">
            Resume
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="hero-tech-row">
          {TECH_PILLS.map(tech => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>

      <div className="hero-img">
        <div>
          <div className="personalImage">
            <img src='./personalPhotos.jpg' alt="T Rahul Prabhu" />
          </div>
        </div>
        <div><br /><br /></div>
      </div>
    </section>
  );
};

export default Hero;
