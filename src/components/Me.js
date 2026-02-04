import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observeStaggerElements } from "../utils/animations";
import "../styles/Me.css";
import "../styles/animations.css";

const Me = () => {
  useEffect(() => {
    observeStaggerElements(".section", 150);
    observeStaggerElements(".timeline-item", 100);
    observeStaggerElements(".skill-category", 100);
  }, []);

  return (
    <div className="me-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Sajjad Gozalzadeh</span>
            </h1>
            <p className="hero-subtitle">Senior Software Engineer</p>
            <p className="hero-location">Istanbul, Turkey</p>
            <div className="hero-cta">
              <a
                href="#contact"
                className="cta-button"
                aria-label="Scroll to contact section"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="cta-button secondary"
                aria-label="Scroll to experience section"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb"></div>
          <div className="gradient-orb"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p className="about-text">
                Senior Backend Developer with 10+ years of experience
                specializing in Golang, C# (.NET Core), and Node.js. Proven
                expertise in designing and implementing microservice
                architectures handling 10M+ monthly requests. Skilled in
                security, authentication, and database management, with deep
                knowledge of cryptography. Recognized for delivering robust,
                secure, and scalable solutions, strong problem-solving
                abilities, and effective team leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3>Staff Engineer</h3>
                    <span className="company">
                      <a
                        href="https://www.armut.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        Armut / HomeRun, Istanbul, Türkiye
                      </a>
                    </span>
                    <span className="duration">Aug 2025 - Present</span>
                  </div>
                  <ul className="job-description">
                    <li>
                      Design and implement payment systems with multi-provider
                      integration (Stripe, iyzico, PayPal, direct bank payments)
                    </li>
                    <li>
                      Drive system and reporting standards toward IFRS
                      compliance for financial operations
                    </li>
                    <li>
                      Build and maintain scalable payment services using .NET
                      Core and Golang
                    </li>
                    <li>
                      Improve payment reconciliation, reporting, and audit
                      readiness across the platform
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3>Senior Backend Engineer</h3>
                    <span className="company">
                      <a
                        href="https://eryaz.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        Eryaz, Istanbul
                      </a>
                    </span>
                    <span className="duration">June 2024 - Aug 2025</span>
                  </div>
                  <ul className="job-description">
                    <li>
                      Designed and implemented a multi-tenant, event-driven
                      microservice architecture for B2B services, reducing
                      operational costs by 20%
                    </li>
                    <li>
                      Leveraged Kafka, MSSQL, .NET Core, Kubernetes, and Redis
                      to build a scalable and robust system
                    </li>
                    <li>
                      Led a team of 5 backend developers, fostering
                      collaboration across cross-functional teams
                    </li>
                    <li>
                      Introduced agile methodologies, streamlining workflows and
                      improving delivery timelines
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3>Senior Backend Engineer</h3>
                    <span className="company">
                      <a
                        href="https://paribu.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        Paribu, Istanbul
                      </a>
                    </span>
                    <span className="duration">December 2020 - 2024</span>
                  </div>
                  <ul className="job-description">
                    <li>
                      Architected and implemented a microservice infrastructure,
                      reducing latency by 30%
                    </li>
                    <li>
                      Optimized database queries, achieving a 40% decrease in
                      response time for critical operations
                    </li>
                    <li>
                      Utilized Go, .NET Core, SQL, Redis, and AWS Lambda to
                      enhance system scalability
                    </li>
                    <li>
                      Focused on authentication, security, and cryptography for
                      cryptocurrency and NFT exchange platforms
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3>Backend Developer</h3>
                    <span className="company">
                      <a
                        href="https://fanoosprint.ir/product-price/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        FanoosPrint team, Tehran
                      </a>
                    </span>
                    <span className="duration">2019 - 2020</span>
                  </div>
                  <ul className="job-description">
                    <li>
                      Optimized algorithms to improve backend performance and
                      efficiency using Laravel and PHP
                    </li>
                    <li>
                      Conducted thorough testing and debugging, ensuring system
                      reliability
                    </li>
                    <li>
                      Actively participated in code reviews and provided
                      feedback to enhance code quality
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3>Algorithm Developer</h3>
                    <span className="company">Blue House, Tehran</span>
                    <span className="duration">2016 - 2019</span>
                  </div>
                  <ul className="job-description">
                    <li>
                      Spearheaded the development of algorithms to solve
                      industrial NP-hard problems
                    </li>
                    <li>
                      Utilized C and C++ to design and implement efficient
                      solutions
                    </li>
                    <li>
                      Drove improvements in operational efficiency and
                      cost-effectiveness
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3>Front-end Developer</h3>
                    <span className="company">J-Developers, Tehran</span>
                    <span className="duration">2012 - 2014</span>
                  </div>
                  <ul className="job-description">
                    <li>
                      Developed responsive and pixel-perfect designs by
                      converting PSD to HTML5/CSS3/JavaScript
                    </li>
                    <li>
                      Created custom WordPress themes, ensuring seamless user
                      experiences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category animate-on-scroll">
                <h3>Programming Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">GoLang</span>
                  <span className="skill-tag">C# (.NET Core)</span>
                  <span className="skill-tag">PHP (Laravel)</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">C/C++</span>
                </div>
              </div>
              <div className="skill-category animate-on-scroll">
                <h3>Databases</h3>
                <div className="skill-tags">
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">NoSQL</span>
                  <span className="skill-tag">Redis</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>
              <div className="skill-category animate-on-scroll">
                <h3>Tools & Technologies</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Kafka</span>
                  <span className="skill-tag">RabbitMQ</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">AWS/GCP</span>
                </div>
              </div>
              <div className="skill-category animate-on-scroll">
                <h3>Other Skills</h3>
                <div className="skill-tags">
                  <span className="skill-tag">API Development</span>
                  <span className="skill-tag">Testing</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Agile/Scrum</span>
                  <span className="skill-tag">Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="education-card">
              <div className="education-content">
                <h3>Master of Industrial Engineering</h3>
                <p className="education-school">Uok, Iran</p>
                <p className="education-duration">2014 - 2016</p>
                <p className="education-description">
                  Gained expertise in systematic problem-solving, optimization,
                  and efficiency enhancement, skills directly applicable to
                  backend development for scalable and optimized systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Languages</h2>
            <div className="languages-grid">
              <div className="language-card">
                <h3>English</h3>
                <p>Professional</p>
              </div>
              <div className="language-card">
                <h3>Turkish</h3>
                <p>Native</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-grid">
              <a
                href="mailto:sajjad@wolka.dev"
                className="contact-card"
                aria-label="Send email to sajjad@wolka.dev"
              >
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>Email</h3>
                  <p>sajjad@wolka.dev</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/sajjad-gozalzadeh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                aria-label="Visit LinkedIn profile"
              >
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/sajjad-gozalzadeh</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Me;
