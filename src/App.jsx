import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import WorkExperience from './components/workExperience/workExperience';
import ContactMe from './components/contactMe/contact';
import Footer from './components/footer/footer';
import ProjectsPage from './components/projects/ProjectsPage';
import About from './components/about/About.jsx';
import Certifications from "./components/certifications/Certifications.jsx";
import ThreeBackground from './components/three/ThreeBackground.jsx';

gsap.registerPlugin(ScrollTrigger);

// Only 3 horizontal panels — Contact moves to the vertical bottom
export const H_PANELS = ['hero', 'about', 'skills'];
const PANEL_LABELS = ['Home', 'About', 'Skills'];

function PanelNav({ total }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = (e) => {
      const idx = H_PANELS.indexOf(e.detail);
      if (idx >= 0) setActive(idx);
    };
    window.addEventListener('h-section-change', handler);
    return () => window.removeEventListener('h-section-change', handler);
  }, []);

  const goTo = (idx) => {
    const data = window.__hScrollData;
    if (!data) return;
    const total = data.panelCount - 1;
    const targetY = total === 0
      ? data.start
      : data.start + (idx / total) * (data.end - data.start);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div className="panel-nav">
      {active < total - 1 && (
        <button className="panel-arrow-btn" onClick={() => goTo(active + 1)}>
          <span>{PANEL_LABELS[active + 1]}</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      <div className="panel-dots">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`panel-dot ${i === active ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={PANEL_LABELS[i]}
          />
        ))}
      </div>

      {active > 0 && (
        <button className="panel-arrow-btn panel-arrow-back" onClick={() => goTo(active - 1)}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{PANEL_LABELS[active - 1]}</span>
        </button>
      )}

      <div className="panel-scroll-hint">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 1v10M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>scroll</span>
      </div>
    </div>
  );
}

function MainPage() {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const numPanels = H_PANELS.length;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -100 * (numPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: true,
          end: () => `+=${(numPanels - 1) * window.innerHeight}`,
          id: "h-scroll",
          onUpdate: (self) => {
            window.__hScrollData = {
              start: self.start,
              end: self.end,
              panelCount: numPanels,
            };
            const panelIdx = Math.min(numPanels - 1, Math.floor(self.progress * numPanels));
            window.dispatchEvent(
              new CustomEvent('h-section-change', { detail: H_PANELS[panelIdx] })
            );
          },
        },
      });
    });

    return () => {
      ctx.revert();
      delete window.__hScrollData;
    };
  }, []);

  return (
    <div className="main-page">
      {/* ── Horizontal panels: Hero · About · Skills ── */}
      <div className="h-scroll-wrapper" ref={wrapperRef}>
        <div className="h-panels-track" ref={trackRef}>
          <div className="h-panel"><Hero /></div>
          <div className="h-panel"><About /></div>
          <div className="h-panel"><Skills /></div>
        </div>
        <PanelNav total={H_PANELS.length} />
      </div>

      {/* ── Vertical sections below ── */}
      <WorkExperience />
      <ContactMe />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThreeBackground />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
