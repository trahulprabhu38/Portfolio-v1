import React, { useState, useEffect } from "react";
import { HiBars3, HiOutlineXCircle } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import MobileNav from "./MobileNav";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleDownload = () => {
        // Handle resume download
    }

    const handleCertificationsClick = () => {
        navigate('/certifications');
    }

    // Contact is now a vertical section — not in horizontal panels
    const H_PANELS = ['hero', 'about', 'skills'];

    const navigateToPanel = (sectionId) => {
        const panelIdx = H_PANELS.indexOf(sectionId);
        if (panelIdx >= 0) {
            const data = window.__hScrollData;
            if (data) {
                const targetY = data.start + (panelIdx / (data.panelCount - 1)) * (data.end - data.start);
                window.scrollTo({ top: targetY, behavior: 'smooth' });
            } else {
                // Fallback before ScrollTrigger initialises
                window.scrollTo({ top: panelIdx * window.innerWidth, behavior: 'smooth' });
            }
        } else {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => navigateToPanel(sectionId), 350);
        } else {
            navigateToPanel(sectionId);
        }
    };

    // Track active section via horizontal scroll events + normal scroll
    useEffect(() => {
        const onHChange = (e) => setActiveSection(e.detail);
        window.addEventListener('h-section-change', onHChange);

        const handleScroll = () => {
            const sections = ['experience', 'contact'];
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('h-section-change', onHChange);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <FaHome
                        onClick={() => {
                            navigate('/');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#fff' }}
                    />

                    <ul className="nav-menu">
                        <li>
                            <a
                                className={`menu-item ${activeSection === 'skills' ? 'active' : ''}`}
                                onClick={() => scrollToSection('skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                className={`menu-item ${location.pathname === '/projects' ? 'active' : ''}`}
                                onClick={() => navigate('/projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                className={`menu-item ${activeSection === 'experience' ? 'active' : ''}`}
                                onClick={() => scrollToSection('experience')}
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                className={`menu-item ${activeSection === 'about' ? 'active' : ''}`}
                                onClick={() => scrollToSection('about')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className={`menu-item ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                href="https://medium.com/@trahulprabhu38"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Blogs
                            </a>
                        </li>
                    </ul>

                    <ul className="nav-actions">
                        <a href="https://tools.trahulprabhu.work" target="_blank" rel="noopener noreferrer">
                            <button className="tools-nav-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                                </svg>
                                Tools
                            </button>
                        </a>
                        <a href="/resume-TRahulPrabhu.pdf" download="Resume-TRahulPrabhu.pdf">
                            <button className="contact-btn" onClick={handleDownload}>Resume</button>
                        </a>
                        <button className="contact-btn" onClick={handleCertificationsClick}>
                            Certifications
                        </button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
                            {openMenu ? <HiOutlineXCircle /> : <HiBars3 />}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
 