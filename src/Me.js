import React from "react";

const Me = () => (
  <>
    <header>
      <div className="container">
        <h1>Sajjad Gozalzadeh</h1>
        <p className="subtitle">Senior Software Engineer</p>
        <p className="subtitle">Istanbul, Turkey</p>
      </div>
    </header>
    <main className="container">
      <section>
        <h2>Professional Summary</h2>
        <p>
          Senior Backend Developer with 10+ years of experience specializing in
          Golang, C# (.NET Core), and Node.js. Proven expertise in designing and
          implementing microservice architectures handling 10M+ monthly
          requests. Skilled in security, authentication, and database
          management, with deep knowledge of cryptography. Recognized for
          delivering robust, secure, and scalable solutions, strong
          problem-solving abilities, and effective team leadership.
        </p>
      </section>
      <section>
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Senior Backend Engineer - Eryaz, Istanbul</h3>
          <p className="date">June 2024 - Present</p>
          <ul>
            <li>
              Designed and implemented a multi-tenant, event-driven microservice
              architecture for B2B services, reducing operational costs by 20%
              and accelerating tenant onboarding from months to days
            </li>
            <li>
              Leveraged Kafka, MSSQL, .NET Core, Kubernetes, and Redis to build
              a scalable and robust system
            </li>
            <li>
              Led a team of 5 backend developers, fostering collaboration across
              cross-functional teams
            </li>
            <li>
              Introduced agile methodologies, streamlining workflows and
              improving delivery timelines
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Senior Backend Engineer - Paribu, Istanbul</h3>
          <p className="date">December 2020 - 2024</p>
          <ul>
            <li>
              Architected and implemented a microservice infrastructure,
              reducing latency by 30% and enabling a 50% increase in concurrent
              requests
            </li>
            <li>
              Optimized database queries, achieving a 40% decrease in response
              time for critical operations
            </li>
            <li>
              Utilized Go, .NET Core, SQL, Redis, and AWS Lambda to enhance
              system scalability
            </li>
            <li>
              Focused on authentication, security, and cryptography for
              cryptocurrency and NFT exchange platforms
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Backend Developer - FanoosPrint team, Tehran</h3>
          <p className="date">2019 - 2020</p>
          <ul>
            <li>
              Optimized algorithms to improve backend performance and efficiency
              using Laravel and PHP
            </li>
            <li>
              Conducted thorough testing and debugging, ensuring system
              reliability
            </li>
            <li>
              Actively participated in code reviews and provided feedback to
              enhance code quality
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Algorithm Developer - Blue House, Tehran</h3>
          <p className="date">2016 - 2019</p>
          <ul>
            <li>
              Spearheaded the development of algorithms to solve industrial
              NP-hard problems
            </li>
            <li>
              Utilized C and C++ to design and implement efficient solutions
            </li>
            <li>
              Drove improvements in operational efficiency and
              cost-effectiveness
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Front-end Developer - J-Developers, Tehran</h3>
          <p className="date">2012 - 2014</p>
          <ul>
            <li>
              Developed responsive and pixel-perfect designs by converting PSD
              to HTML5/CSS3/JavaScript
            </li>
            <li>
              Created custom WordPress themes, ensuring seamless user
              experiences
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>GoLang</li>
              <li>C# (.NET Core)</li>
              <li>PHP (Laravel)</li>
              <li>JavaScript</li>
              <li>C/C++</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>Redis</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Kafka</li>
              <li>RabbitMQ</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>AWS/GCP</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Other Skills</h3>
            <ul>
              <li>API Development</li>
              <li>Testing</li>
              <li>Git</li>
              <li>Agile/Scrum</li>
              <li>Team Leadership</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>Education</h2>
        <div className="education-item">
          <h3>Master of Industrial Engineering</h3>
          <p className="date">2014 - 2016</p>
          <p>Uok, Iran</p>
          <p>
            Gained expertise in systematic problem-solving, optimization, and
            efficiency enhancement, skills directly applicable to backend
            development for scalable and optimized systems.
          </p>
        </div>
      </section>
      <section>
        <h2>Languages</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>English</h3>
            <p>Professional</p>
          </div>
          <div className="skill-category">
            <h3>Turkish</h3>
            <p>Native</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <div className="contact-info">
          <a href="tel:+905528999690" className="contact-item">
            <i className="fas fa-phone-alt"></i>
            +90 (552) 899-9690
          </a>
          <a href="mailto:gozalzadeh.sajjad@gmail.com" className="contact-item">
            <i className="fas fa-envelope"></i>
            gozalzadeh.sajjad@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sajjad-gozalzadeh-455954192/"
            className="contact-item"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
          <a href="https://github.com/sajjadgozal" className="contact-item">
            <i className="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </section>
    </main>
  </>
);

export default Me;
