import React from "react";
import "../styles/Me.css";

const Me = () => (
  <div className="me-container">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">Sajjad Gozalzadeh</span>
          </h1>
          <p className="hero-subtitle">Senior Software Engineer</p>
          <p className="hero-location">📍 Istanbul, Turkey</p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">
              Get in Touch
            </a>
            <a href="#experience" className="cta-button secondary">
              View Experience
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-icon">🚀</div>
            <h3>10+ Years</h3>
            <p>Experience</p>
          </div>
          <div className="floating-card">
            <div className="card-icon">⚡</div>
            <h3>10M+</h3>
            <p>Monthly Requests</p>
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
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              Senior Backend Developer with 10+ years of experience specializing
              in Golang, C# (.NET Core), and Node.js. Proven expertise in
              designing and implementing microservice architectures handling
              10M+ monthly requests. Skilled in security, authentication, and
              database management, with deep knowledge of cryptography.
              Recognized for delivering robust, secure, and scalable solutions,
              strong problem-solving abilities, and effective team leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3>Senior Backend Engineer</h3>
                  <span className="company">Eryaz, Istanbul</span>
                  <span className="duration">June 2024 - Present</span>
                </div>
                <ul className="job-description">
                  <li>
                    Designed and implemented a multi-tenant, event-driven
                    microservice architecture for B2B services, reducing
                    operational costs by 20%
                  </li>
                  <li>
                    Leveraged Kafka, MSSQL, .NET Core, Kubernetes, and Redis to
                    build a scalable and robust system
                  </li>
                  <li>
                    Led a team of 5 backend developers, fostering collaboration
                    across cross-functional teams
                  </li>
                  <li>
                    Introduced agile methodologies, streamlining workflows and
                    improving delivery timelines
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3>Senior Backend Engineer</h3>
                  <span className="company">Paribu, Istanbul</span>
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

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3>Backend Developer</h3>
                  <span className="company">FanoosPrint team, Tehran</span>
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
                    Actively participated in code reviews and provided feedback
                    to enhance code quality
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
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

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3>Front-end Developer</h3>
                  <span className="company">J-Developers, Tehran</span>
                  <span className="duration">2012 - 2014</span>
                </div>
                <ul className="job-description">
                  <li>
                    Developed responsive and pixel-perfect designs by converting
                    PSD to HTML5/CSS3/JavaScript
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
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">💻</div>
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">GoLang</span>
                <span className="skill-tag">C# (.NET Core)</span>
                <span className="skill-tag">PHP (Laravel)</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C/C++</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon">🗄️</div>
              <h3>Databases</h3>
              <div className="skill-tags">
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">NoSQL</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon">🛠️</div>
              <h3>Tools & Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Kafka</span>
                <span className="skill-tag">RabbitMQ</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">AWS/GCP</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon">🎯</div>
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
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-icon">🎓</div>
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
      <section id="languages" className="section">
        <div className="container">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            <div className="language-card">
              <div className="language-icon">🇬🇧</div>
              <h3>English</h3>
              <p>Professional</p>
            </div>
            <div className="language-card">
              <div className="language-icon">🇹🇷</div>
              <h3>Turkish</h3>
              <p>Native</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <a href="tel:+905528999690" className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-info">
                <h3>Phone</h3>
                <p>+90 (552) 899-9690</p>
              </div>
            </a>
            <a
              href="mailto:gozalzadeh.sajjad@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>gozalzadeh.sajjad@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sajjad-gozalzadeh-455954192/"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>
            </a>
            <a
              href="https://github.com/sajjadgozal"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>View my projects</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Me;
