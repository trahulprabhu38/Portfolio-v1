import React, { useState } from "react";
import "./Certifications.css";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Hackfrost certificates",
      image: "/certificates/hackfrost.png"
    },
    {
      id: 2,
      title: " 100days of leetcode",
      image: "/certificates/100days.png"
    },
    {
      id: 3,
      title: "Docker Certificate",
      image: "/certificates/docker.png"
    },
    {
      id: 4,
      title: "GoLang",
      image: "/certificates/go.png"
    },
    {
      id: 5,
      title: "GoLang Intermediate",
      image: "/certificates/go-intermediate.png"
    },
    {
      id: 6,
      title: "BMS hackathon certificate",
      image: "/certificates/bms.png"
    },
    {
      id: 7,
      title: "Reviewify Certificate",
      image: "/certificates/reviewify copy.jpeg"
    },
    {
      id: 8,
      title: "RV Hackathon Certificate",
      image: "/certificates/rv.png"
    },
    {
      id: 9,
      title: "GsSoC",
      image: "/certificates/1.png"
    },
    {
      id: 10,
      title: "hacktoberfest",
      image: "/certificates/2.png"
    },
    {
      id: 11,
      title: "gssoc Badge",
      image: "/certificates/3.png"
    },
    {
      id: 12,
      title: "Tata Crucible Certificate",
      image: "/certificates/tata.png"
    },
    {
      id: 13,
      title: "Backend Certificate",
      image: "/certificates/backend.png"
    },
    {
      id: 14,
      title: "50 Days Certificate",
      image: "/certificates/50days copy.png"
    },
    {
      id: 15,
      title: "JP Morgan Certificate",
      image: "/certificates/jpmorgan.png"
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