import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observeStaggerElements } from "../utils/animations";
import "../styles/Home.css";
import "../styles/animations.css";

const Home = () => {
  useEffect(() => {
    observeStaggerElements(".section", 150);
    observeStaggerElements(".nav-card", 100);
    observeStaggerElements(".service-item", 100);
    observeStaggerElements(".stat-item", 100);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">wolka</span>
            </h1>
            <p className="hero-subtitle">Software Development Studio</p>
            <p className="hero-description">
              Creating innovative, scalable, and user-centric applications with
              modern technologies.
            </p>
          </div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb"></div>
          <div className="gradient-orb"></div>
        </div>
      </section>

      {/* Navigation Cards */}
      <main className="main-content">
        <section className="section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Explore</h2>
            <div className="nav-cards">
              <Link
                to="/me"
                className="nav-card animate-on-scroll"
                aria-label="Learn more about our team and experience"
              >
                <h3>About Me</h3>
                <p>
                  Learn about us, Senior Software Engineers with
                  10+ years of experience in backend development.
                </p>
                <div className="card-arrow" aria-hidden="true">→</div>
              </Link>

              <Link
                to="/projects"
                className="nav-card animate-on-scroll"
                aria-label="View our portfolio of projects"
              >
                <h3>Our Projects</h3>
                <p>
                  Discover our portfolio of innovative applications including
                  Loadrix, Decoraray, and MenuCu.
                </p>
                <div className="card-arrow" aria-hidden="true">→</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Consulting Services</h2>
            <div className="consulting-content">
              <p className="consulting-description">
                We provide consulting on designing software architecture, system structure, and databases.
              </p>
              <div className="consulting-services">
                <div className="service-item animate-on-scroll">
                  <h3>Software Architecture</h3>
                  <p>Design scalable and maintainable software architectures tailored to your needs</p>
                </div>
                <div className="service-item animate-on-scroll">
                  <h3>System Structure</h3>
                  <p>Plan and organize system structures for optimal performance and efficiency</p>
                </div>
                <div className="service-item animate-on-scroll">
                  <h3>Database Design</h3>
                  <p>Design robust database schemas and optimize data structures for your applications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="section animate-on-scroll">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item animate-on-scroll">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item animate-on-scroll">
                <div className="stat-number">3</div>
                <div className="stat-label">Active Projects</div>
              </div>
              <div className="stat-item animate-on-scroll">
                <div className="stat-number">10M+</div>
                <div className="stat-label">Monthly Requests</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
