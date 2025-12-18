// components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import gitamLogo from "../assets/images/gitam-logo.svg";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* GITAM Logo */}
        <div className="logo-container">
          <Link to="/">
            <img src={gitamLogo} alt="GITAM University" className="logo" />
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/features" className="nav-link">
            Features
          </Link>
          <Link to="/Personalised" className="nav-link">
            Personalized Career
          </Link>
          <Link to="/internships" className="nav-link">
            Internships
          </Link>
          <Link to="/placement-insights" className="nav-link">
            Placements
          </Link>
        </div>
        {/* Sign In Button */}
        <div className="auth-section">
          <Link to="/signin" className="signin-button">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
