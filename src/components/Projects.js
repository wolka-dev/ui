import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Loadrix",
      url: "https://loadrix.com",
      description:
        "A comprehensive load testing and performance monitoring platform designed to help developers and DevOps teams ensure their applications can handle high traffic and maintain optimal performance under stress.",
      technologies: ["React", "Node.js", "Docker", "Kubernetes", "Redis"],
      category: "Performance Testing",
      status: "Live",
      image: "🚀",
    },
    {
      id: 2,
      name: "Decoraray",
      url: "https://decoraray.ir",
      description:
        "An innovative interior design and decoration platform that connects homeowners with professional designers, offering personalized design solutions and a curated marketplace for home decor products.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Stripe"],
      category: "E-commerce",
      status: "Live",
      image: "🏠",
    },
    {
      id: 3,
      name: "MenuCu",
      url: "https://menucu.online",
      description:
        "A digital menu management system for restaurants and cafes, enabling easy menu updates, QR code generation, and seamless customer ordering experience with real-time synchronization.",
      technologies: [
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDB",
        "Stripe",
      ],
      category: "Restaurant Tech",
      status: "Live",
      image: "🍽️",
    },
    {
      id: 4,
      name: "Kervan Konut",
      url: "https://kervankonut.com.tr",
      description:
        "A professional WordPress website for Kervan Konut, a construction and real estate company based in Istanbul. The site showcases their projects and services in the construction and real estate sector.",
      technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
      category: "Real Estate & Construction",
      status: "Live",
      image: "🏗️",
    },
  ];

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Wolka.dev Projects</span>
            </h1>
            <p className="hero-subtitle">
              Innovative solutions built with modern technology
            </p>
            <p className="hero-description">
              Discover our portfolio of cutting-edge applications designed to
              solve real-world problems and deliver exceptional user
              experiences.
            </p>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-icon">💻</div>
              <h3>4+</h3>
              <p>Active Projects</p>
            </div>
            <div className="floating-card">
              <div className="card-icon">⚡</div>
              <h3>100%</h3>
              <p>Uptime</p>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb"></div>
          <div className="gradient-orb"></div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="main-content">
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <div className="project-icon">{project.image}</div>
                    <div className="project-status">
                      <span
                        className={`status-badge ${project.status.toLowerCase()}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-category">{project.category}</p>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-footer">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Visit Project
                      <svg
                        className="link-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Wolka.dev */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">About Wolka.dev</h2>
            <div className="about-content">
              <p className="about-text">
                Wolka.dev is a software development studio focused on creating
                innovative, scalable, and user-centric applications. We
                specialize in modern web technologies, mobile development, and
                cloud infrastructure, delivering solutions that drive business
                growth and enhance user experiences.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
