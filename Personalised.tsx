import React from 'react';
import { FaSearch, FaBriefcase, FaFileAlt, FaChartLine, FaRoad, FaUserTie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Personalised.css';

const CareerOpportunities: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaBriefcase className="feature-icon" />,
      title: "Internship Recommendations",
      description: "Get personalized internship suggestions based on your profile and career goals",
      onClick: () => navigate('/InternshipRecommendation')
    },
    {
      icon: <FaFileAlt className="feature-icon" />,
      title: "Resume Parser",
      description: "AI-powered analysis to match your skills with perfect job opportunities",
      onClick: () => navigate('/resume-parser')
    },
    {
      icon: <FaRoad className="feature-icon" />,
      title: "Skills Roadmap",
      description: "Personalized learning path and skill development for your dream career",
      onClick: () => navigate('/skills')
    }
  ];

  return (
    <div className="career-opportunities-container">
      {/* Full Width Header */}
      <header className="opportunities-header">
        <h1>Personalized Career Opportunities</h1>
        <p>Discover tailored tools and resources to accelerate your career journey at GITAM</p>
      </header>

      {/* Features Section - Full Width with centered content */}
      <section className="features-section">
        <div className="features-content-wrapper">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                onClick={feature.onClick}
              >
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <button className="explore-button">Explore Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect with Mentors Section - Full Width */}
      <section className="mentor-section">
        <div className="mentor-content-wrapper">
          <div className="mentor-content">
            <FaUserTie className="mentor-icon" />
            <h2>Connect with Career Advisors</h2>
            <p>
              Get one-on-one guidance from experienced mentors who can help you with:
            </p>
            <div className="mentor-benefits">
              <div className="benefit-item">
                <span></span>
                <p>Career planning and goal setting</p>
              </div>
              <div className="benefit-item">
                <span></span>
                <p>Interview preparation and mock sessions</p>
              </div>
              <div className="benefit-item">
                <span></span>
                <p>Industry insights and trends</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/talk-to-mentor')} 
              className="mentor-button"
            >
              <FaUserTie /> Connect with Mentor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerOpportunities;