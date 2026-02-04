import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-visual">
          <h1 className="not-found-code">404</h1>
          <div className="not-found-orb"></div>
        </div>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

