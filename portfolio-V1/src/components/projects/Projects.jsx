import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/src/assets/ecommerce.jpg",
      deployedLink: "https://your-ecommerce-demo.com",
      githubLink: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
      image: "/src/assets/taskmanager.jpg",
      deployedLink: "https://your-taskmanager-demo.com",
      githubLink: "https://github.com/yourusername/taskmanager"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts using OpenWeather API. Features include location search, temperature conversion, and weather maps.",
      image: "/src/assets/weather.jpg",
      deployedLink: "https://your-weather-demo.com",
      githubLink: "https://github.com/yourusername/weather-dashboard"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and styled-components. Features include dark mode, smooth animations, and a contact form.",
      image: "/src/assets/portfolio.jpg",
      deployedLink: "https://your-portfolio-demo.com",
      githubLink: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Chat Application",
      description: "A real-time chat application with features like private messaging, group chats, and file sharing. Built with Socket.io and Express.js.",
      image: "/src/assets/chat.jpg",
      deployedLink: "https://your-chat-demo.com",
      githubLink: "https://github.com/yourusername/chat-app"
    },
    {
      title: "Recipe Finder",
      description: "A recipe search application that helps users find recipes based on ingredients. Features include recipe filtering, saving favorites, and nutritional information.",
      image: "/src/assets/recipe.jpg",
      deployedLink: "https://your-recipe-demo.com",
      githubLink: "https://github.com/yourusername/recipe-finder"
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 