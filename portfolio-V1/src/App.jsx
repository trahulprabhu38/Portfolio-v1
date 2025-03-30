import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import WorkExperience from './components/workExperience/workExperience'
import ContactMe from './components/contactMe/contact'
import Footer from './components/footer/footer'
import SkillsPage from './components/Skillspage/SkillsPage'
import Projects from './components/projects/Projects'
import Certifications from "./components/certifications/Certifications.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero id="home" />
                <Skills id="skills" />
                <SkillsPage id="skillsPage"/>
                <Projects id="projects" />
                <WorkExperience id="work" />
                <ContactMe id="contact" />
              </>
            } />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
