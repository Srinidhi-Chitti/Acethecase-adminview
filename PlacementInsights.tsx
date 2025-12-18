import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlacementInsights.css';

// Import logos
import tcsLogo from '../assets/images/TCS.jpg';
import cognizantLogo from '../assets/images/cognizant.jpg';
import accentureLogo from '../assets/images/accenture.jpg';
import ciscoLogo from '../assets/images/cisco.jpg';
import amazonLogo from '../assets/images/amazon.jpg';
import wiproLogo from '../assets/images/wipro.jpg';
import infosysLogo from '../assets/images/infosys.jpg';
import jpmorganLogo from '../assets/images/JPMorgan.jpg';
import morganStanleyLogo from '../assets/images/Morgan Stanley.jpg';
import ibmLogo from '../assets/images/IBM.jpg';
import deloitteLogo from '../assets/images/Deloitte.jpg';
import microsoftLogo from '../assets/images/Microsoft.jpg';
import googleLogo from '../assets/images/google.jpg';
import oracleLogo from '../assets/images/oracle.jpg';
import intelLogo from '../assets/images/intel.jpg';

const PlacementInsights = () => {
  const navigate = useNavigate();
  
  // Company data with links to their careers pages
  const companies = [
    { name: "TCS", logo: tcsLogo, url: "https://www.tcs.com/careers" },
    { name: "Cognizant", logo: cognizantLogo, url: "https://careers.cognizant.com" },
    { name: "Accenture", logo: accentureLogo, url: "https://www.accenture.com/us-en/careers" },
    { name: "Cisco", logo: ciscoLogo, url: "https://jobs.cisco.com" },
    { name: "Amazon", logo: amazonLogo, url: "https://www.amazon.jobs" },
    { name: "Wipro", logo: wiproLogo, url: "https://careers.wipro.com" },
    { name: "Infosys", logo: infosysLogo, url: "https://www.infosys.com/careers" },
    { name: "J.P. Morgan", logo: jpmorganLogo, url: "https://careers.jpmorgan.com" },
    { name: "Morgan Stanley", logo: morganStanleyLogo, url: "https://www.morganstanley.com/people-opportunities" },
    { name: "IBM", logo: ibmLogo, url: "https://www.ibm.com/careers" },
    { name: "Deloitte", logo: deloitteLogo, url: "https://www2.deloitte.com/global/en/careers.html" },
    { name: "Microsoft", logo: microsoftLogo, url: "https://careers.microsoft.com" },
    { name: "Google", logo: googleLogo, url: "https://careers.google.com" },
    { name: "Oracle", logo: oracleLogo, url: "https://www.oracle.com/careers" },
    { name: "Intel", logo: intelLogo, url: "https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html" }
  ];

  const handleExploreClick = () => {
    navigate('/placements');
  };

  return (
    <div className="placement-insights-container">
      {/* Full Width Header */}
      <header className="placement-header">
        <div className="header-content-wrapper">
          <h1 className="placement-title">Placement Insights</h1>
          <p className="placement-subtitle">Connecting talent with opportunity</p>
        </div>
      </header>

      {/* Stats Section - Full Width with centered content */}
      <section className="stats-section">
        <div className="stats-content-wrapper">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-value">100+</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">90%</div>
              <div className="stat-label">Guidance & Assistance</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">80%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">40%</div>
              <div className="stat-label">Placed In Top Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section - Full Width with centered content */}
      <section className="companies-section">
        <div className="companies-content-wrapper">
          <h2 className="section-title">Explore Top Companies</h2>
          <p className="section-subtitle">Click on any company logo to visit their careers page</p>
          <div className="logos-grid">
            {companies.map((company, index) => (
              <a 
                key={index} 
                href={company.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="company-logo-link"
                aria-label={`Visit ${company.name} careers page`}
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="company-logo" 
                />
                <div className="company-name">{company.name}</div>
                <div className="company-tooltip">Visit {company.name} Careers</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width with centered content */}
      <section className="cta-section">
        <div className="cta-content-wrapper">
          <h2 className="cta-title">Want to know which companies come to GITAM?</h2>
          <button 
            className="cta-button"
            onClick={handleExploreClick}
          >
            Explore Placement Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlacementInsights;