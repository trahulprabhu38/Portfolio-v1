import React, { useState } from "react";
import "./Certifications.css";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Google Cloud Engineering Certificate",
      image: "/certificates/google-cloud.png",
      link: "https://www.credly.com/earner/earned/badge/3e030a80-6842-4208-a7c5-afbeed8373c2"
    },
    {
      id: 2,
      title: "Docker Certification",
      image: "/certificates/docker.png"
    },
    {
      id: 3,
      title: "GoLang Advanced",
      image: "/certificates/go.png"
    },
    {
      id: 4,
      title: "GoLang Intermediate",
      image: "/certificates/go-intermediate.png"
    },
    {
      id: 5,
      title: "GirlScript Summer of Code 2024",
      image: "/certificates/1.png"
    },
    {
      id: 6,
      title: "Hacktoberfest 2024",
      image: "/certificates/2.png"
    },
    {
      id: 7,
      title: "GSSoC 2024 Badge",
      image: "/certificates/3.png"
    },
    {
      id: 8,
      title: "100 Days of LeetCode",
      image: "/certificates/100days.png"
    },
    {
      id: 9,
      title: "Backend Development Certificate",
      image: "/certificates/backend.png"
    },
    {
      id: 10,
      title: "JP Morgan Software Engineering",
      image: "/certificates/jpmorgan.png"
    },
    {
      id: 11,
      title: "Hackfrost Hackathon",
      image: "/certificates/hackfrost.png"
    },
    {
      id: 12,
      title: "BMS Hackathon",
      image: "/certificates/bms.png"
    },
    {
      id: 13,
      title: "RV Hackathon",
      image: "/certificates/rv.png"
    },
    {
      id: 14,
      title: "Reviewify Certification",
      image: "/certificates/reviewify copy.jpeg"
    },
    {
      id: 15,
      title: "Tata Crucible",
      image: "/certificates/tata.png"
    },
    {
      id: 16,
      title: "50 Days Challenge",
      image: "/certificates/50days copy.png"
    }
  ];

  return (
    <section id="certifications">
      <div className="certifications-container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="certification-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>
              ×
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="modal-image"
            />
            <div className="modal-details">
              <h3>{selectedCert.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications; 