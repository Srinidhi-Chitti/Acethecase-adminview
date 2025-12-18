import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import './Features.css';
import featuresHero from '../assets/images/Featurespagehero.jpg';

const Features: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "PERSONALIZED CAREER OPPORTUNITIES",
      description: "Explore top internships with company names, locations, and durations. Find and apply in just a few clicks!",
      action: () => navigate("/personalised")
    },
    {
      title: "PLACEMENT INSIGHTS",
      description: "Track company visits, hiring trends, and skill demands year-wise to stay ahead in your career.",
      action: () => navigate("/placement-insights")
    },
    {
      title: "COMPANY SPECIFIC Q & A",
      description: "Access past interview questions and tech stacks of top companies to prepare smarter and ace your interviews.",
      action: () => navigate("/placements") // Changed from "/company-qa" to "/placements"
    }
  ];

  return (
    <div className="features-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src={featuresHero} 
          alt="GITAM Placement Features" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>DISCOVER OUR POWERFUL FEATURES</h1>
          <p className="hero-subtitle">Three ways to boost your career journey</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-content">
        <h2 className="section-title">HOW WE HELP YOU SUCCEED</h2>
        <div className="feature-cards">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <button 
                  className="explore-button"
                  onClick={feature.action}
                >
                  Explore now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <FaGraduationCap className="logo-icon" />
            <span>GITAM Career Portal</span>
          </div>
          <a
            href="https://ct3.gitam.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Visit Official Career Portal
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} GITAM University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Features;