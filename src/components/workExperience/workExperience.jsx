import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./workExperience.css";
import { WORK_EXPERIENCE } from "../../data/data";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from([".exp-eyebrow", ".exp-title", ".exp-subtitle"], {
        opacity: 0,
        y: 32,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // Line draws itself as you scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".exp-timeline",
            start: "top 60%",
            end: "bottom 85%",
            scrub: 1,
          },
        }
      );

      // Each entry: card slides in from left, dot springs in
      document.querySelectorAll(".exp-entry").forEach((entry) => {
        const card = entry.querySelector(".exp-card");
        const dot = entry.querySelector(".exp-dot");

        gsap.fromTo(
          card,
          {
            x: -80,
            opacity: 0,
            filter: "blur(6px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 84%",
              toggleActions: "play none none none",
            },
          }
        );

        // Dot springs in
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(2.5)",
            scrollTrigger: {
              trigger: entry,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="exp-section" id="experience" ref={sectionRef}>
      <div className="exp-cloud exp-cloud-orange" />
      <div className="exp-cloud exp-cloud-blue" />
      <div className="exp-cloud exp-cloud-green" />
      <div className="exp-header">
        <span className="exp-eyebrow">Experience</span>
        <h2 className="exp-title">Professional Journey</h2>
        <p className="exp-subtitle">
          Building reliable infrastructure and shipping DevOps culture across organizations
        </p>
      </div>

      <div className="exp-timeline">
        <div className="exp-line" ref={lineRef} />

        {WORK_EXPERIENCE.map((item, index) => {
          const parts = item.title.split(" - ");
          const company = parts[parts.length - 1];
          const role = parts.slice(0, -1).join(" - ");

          return (
            <div key={index} className="exp-entry">
              <div className="exp-dot-col">
                <div className="exp-dot">
                  <div className="exp-dot-ring" />
                </div>
              </div>
              <div className="exp-card">
                <div className="exp-card-glow" />
                <div className="exp-card-top">
                  <span className="exp-company-chip">{company}</span>
                  <span className="exp-date-chip">{item.date}</span>
                </div>
                <h3 className="exp-role">{role}</h3>
                <ul className="exp-bullets">
                  {item.responsibilities.map((r, i) => (
                    <li key={i}>
                      <span className="exp-bullet-dot" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;
