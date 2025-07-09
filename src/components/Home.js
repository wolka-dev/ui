import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">Wolka.dev</span>
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
        <section className="section">
          <div className="container">
            <h2 className="section-title">Explore</h2>
            <div className="nav-cards">
              <Link to="/me" className="nav-card">
                <div className="card-icon">👨‍💻</div>
                <h3>About Me</h3>
                <p>
                  Learn about Sajjad Gozalzadeh, Senior Software Engineer with
                  10+ years of experience in backend development.
                </p>
                <div className="card-arrow">→</div>
              </Link>

              <Link to="/projects" className="nav-card">
                <div className="card-icon">🚀</div>
                <h3>Our Projects</h3>
                <p>
                  Discover our portfolio of innovative applications including
                  Loadrix, Decoraray, and MenuCu.
                </p>
                <div className="card-arrow">→</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Active Projects</div>
              </div>
              <div className="stat-item">
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
