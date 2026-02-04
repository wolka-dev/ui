import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">wolka</h3>
            <p className="footer-description">
              Software Development Studio creating innovative, scalable, and
              user-centric applications.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/me" className="footer-link">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="mailto:sajjad@wolka.dev"
                  className="footer-link"
                  aria-label="Send email to sajjad@wolka.dev"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/sajjad-gozalzadeh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="Visit LinkedIn profile"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="Visit GitHub profile"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li>
                <span className="footer-link-text">Software Architecture</span>
              </li>
              <li>
                <span className="footer-link-text">System Design</span>
              </li>
              <li>
                <span className="footer-link-text">Database Design</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Wolka.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

