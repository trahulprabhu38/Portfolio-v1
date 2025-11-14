import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./workExperience.css";
import { WORK_EXPERIENCE } from "../../data/data";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
	const sectionRef = useRef(null);
	const timelineRef = useRef(null);
	const experienceCardsRef = useRef([]);

	// Company images mapping
	const companyImages = {
		"TOINGG": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
		"PGAGI": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
		"ISRO": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
		"DSCE": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
		"Stealth AI (UK)": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
		"GirlScript Summer of Code": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
		"SpawnLabs": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
	};

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Simple fade-in animation for title
			gsap.from('.experience-title', {
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

			// Simple fade-in for experience cards
			experienceCardsRef.current.forEach((card, index) => {
				if (card) {
					gsap.from(card, {
						scrollTrigger: {
							trigger: card,
							start: 'top 85%',
							toggleActions: 'play none none none',
						},
						opacity: 0,
						y: 30,
						duration: 0.5,
						delay: index * 0.1,
						ease: 'power2.out',
					});
				}
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const getCompanyName = (title) => {
		const parts = title.split(' - ');
		return parts[parts.length - 1];
	};

	const getRole = (title) => {
		const parts = title.split(' - ');
		return parts[0];
	};

  return (
	<section className="experience-container" ref={sectionRef} id="experience">
	  <div className="experience-header">
		<h2 className="experience-title">Professional Journey</h2>
		<p className="experience-subtitle">
		  Building scalable infrastructure and driving DevOps excellence across organizations
		</p>
	  </div>

	  <div className="timeline-container">
		{/* Vertical Timeline Line */}
		<div className="timeline-line" ref={timelineRef}></div>

		{/* Experience Cards */}
		<div className="timeline-items">
		  {WORK_EXPERIENCE.map((item, index) => {
			const companyName = getCompanyName(item.title);
			const role = getRole(item.title);
			const isEven = index % 2 === 0;

			return (
			  <div
				key={index}
				className={`timeline-item ${isEven ? 'left' : 'right'}`}
				ref={(el) => (experienceCardsRef.current[index] = el)}
			  >
				{/* Timeline Dot */}
				<div className="timeline-dot">
				  <div className="timeline-dot-inner"></div>
				  <div className="timeline-dot-pulse"></div>
				</div>

				{/* Experience Card */}
				<div className="timeline-card">
				  <div className="timeline-card-inner">
					{/* Date Badge */}
					<div className="timeline-date">{item.date}</div>

					{/* Card Content */}
					<div className="timeline-content">
					  {/* Company Image */}
					  <div className="timeline-image">
						<img
						  src={companyImages[companyName] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"}
						  alt={companyName}
						/>
						<div className="timeline-overlay">
						  <div className="company-badge-timeline">{companyName}</div>
						</div>
					  </div>

					  {/* Details */}
					  <div className="timeline-details">
						<h3 className="timeline-role">{role}</h3>
						<div className="timeline-company">{companyName}</div>

						<div className="timeline-responsibilities">
						  <h4>Key Achievements</h4>
						  <ul>
							{item.responsibilities.map((responsibility, idx) => (
							  <li key={idx}>
								<span className="timeline-bullet">
								  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
									<circle cx="10" cy="10" r="4" fill="#77709c"/>
								  </svg>
								</span>
								<span>{responsibility}</span>
							  </li>
							))}
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			);
		  })}
		</div>
	  </div>
	</section>
  );
}
export default WorkExperience;