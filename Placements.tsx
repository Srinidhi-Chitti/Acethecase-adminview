// src/pages/Placements.tsx
import React, { useState } from 'react';
import './Placements.css';
import { FaBuilding, FaUsers, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// Company interface
interface Company {
  id: number;
  name: string;
  arrivalDate: string;
  rounds: {
    name: string;
    date: string;
    selected: number;
  }[];
  packageRange: string;
  eligibility: string;
}

const oncampusCompanies: Company[] = [
  {
    id: 1,
    name: "TCS",
    arrivalDate: "August 2023",
    rounds: [
      { name: "Aptitude Test", date: "Aug 5, 2023", selected: 150 },
      { name: "Technical Interview", date: "Aug 10, 2023", selected: 80 },
      { name: "HR Interview", date: "Aug 15, 2023", selected: 45 }
    ],
    packageRange: "₹3.5 - 7 LPA",
    eligibility: "B.Tech (All branches), 6.0+ CGPA"
  },
  {
    id: 2,
    name: "Infosys",
    arrivalDate: "September 2023",
    rounds: [
      { name: "Online Test", date: "Sep 2, 2023", selected: 180 },
      { name: "Technical Interview", date: "Sep 7, 2023", selected: 90 },
      { name: "HR Interview", date: "Sep 12, 2023", selected: 60 }
    ],
    packageRange: "₹3.5 - 8 LPA",
    eligibility: "B.Tech (All branches), 6.5+ CGPA"
  },
  {
    id: 3,
    name: "Wipro",
    arrivalDate: "October 2023",
    rounds: [
      { name: "Written Test", date: "Oct 10, 2023", selected: 200 },
      { name: "Technical Round", date: "Oct 15, 2023", selected: 100 },
      { name: "HR Round", date: "Oct 20, 2023", selected: 70 }
    ],
    packageRange: "₹3.5 - 6.5 LPA",
    eligibility: "B.Tech (All branches), 6.0+ CGPA"
  },
  {
    id: 4,
    name: "Accenture",
    arrivalDate: "November 2023",
    rounds: [
      { name: "Aptitude Test", date: "Nov 5, 2023", selected: 220 },
      { name: "Group Discussion", date: "Nov 10, 2023", selected: 120 },
      { name: "Final Interview", date: "Nov 15, 2023", selected: 80 }
    ],
    packageRange: "₹4.0 - 7 LPA",
    eligibility: "B.Tech (All branches), 6.5+ CGPA"
  },
  {
    id: 5,
    name: "Capgemini",
    arrivalDate: "December 2023",
    rounds: [
      { name: "Online Test", date: "Dec 3, 2023", selected: 180 },
      { name: "Technical Interview", date: "Dec 8, 2023", selected: 90 },
      { name: "HR Interview", date: "Dec 13, 2023", selected: 50 }
    ],
    packageRange: "₹4.0 - 7.5 LPA",
    eligibility: "B.Tech (All branches), 6.0+ CGPA"
  },
  {
    id: 6,
    name: "Tech Mahindra",
    arrivalDate: "January 2024",
    rounds: [
      { name: "Aptitude Test", date: "Jan 7, 2024", selected: 160 },
      { name: "Technical Interview", date: "Jan 12, 2024", selected: 80 },
      { name: "HR Interview", date: "Jan 17, 2024", selected: 45 }
    ],
    packageRange: "₹3.5 - 6 LPA",
    eligibility: "B.Tech (All branches), 6.0+ CGPA"
  },
  {
    id: 7,
    name: "HCL Technologies",
    arrivalDate: "February 2024",
    rounds: [
      { name: "Written Test", date: "Feb 5, 2024", selected: 190 },
      { name: "Technical Round", date: "Feb 10, 2024", selected: 95 },
      { name: "HR Round", date: "Feb 15, 2024", selected: 60 }
    ],
    packageRange: "₹3.75 - 6.5 LPA",
    eligibility: "B.Tech (All branches), 6.0+ CGPA"
  },
  {
    id: 8,
    name: "L&T Infotech",
    arrivalDate: "March 2024",
    rounds: [
      { name: "Online Test", date: "Mar 4, 2024", selected: 170 },
      { name: "Technical Interview", date: "Mar 9, 2024", selected: 85 },
      { name: "HR Interview", date: "Mar 14, 2024", selected: 50 }
    ],
    packageRange: "₹4.0 - 8 LPA",
    eligibility: "B.Tech (All branches), 6.5+ CGPA"
  },
  {
    id: 9,
    name: "Zoho",
    arrivalDate: "April 2024",
    rounds: [
      { name: "Programming Test", date: "Apr 6, 2024", selected: 140 },
      { name: "Technical Interview", date: "Apr 11, 2024", selected: 70 },
      { name: "HR Interview", date: "Apr 16, 2024", selected: 35 }
    ],
    packageRange: "₹6 - 12 LPA",
    eligibility: "B.Tech (CSE, IT), 7.5+ CGPA"
  },
  {
    id: 10,
    name: "Cognizant",
    arrivalDate: "May 2024",
    rounds: [
      { name: "Aptitude Test", date: "May 5, 2024", selected: 210 },
      { name: "Technical Interview", date: "May 10, 2024", selected: 105 },
      { name: "HR Interview", date: "May 15, 2024", selected: 65 }
    ],
    packageRange: "₹4.0 - 7 LPA",
    eligibility: "B.Tech (All branches), 6.5+ CGPA"
  },
  // Additional premium companies
  {
    id: 11,
    name: "Microsoft",
    arrivalDate: "September 2023",
    rounds: [
      { name: "Online Coding Test", date: "Sep 15, 2023", selected: 100 },
      { name: "Technical Interviews", date: "Sep 20-25, 2023", selected: 30 },
      { name: "Final HR Round", date: "Sep 30, 2023", selected: 15 }
    ],
    packageRange: "₹18 - 32 LPA",
    eligibility: "B.Tech (CSE, IT), 8.5+ CGPA"
  },
  {
    id: 12,
    name: "Amazon",
    arrivalDate: "October 2023",
    rounds: [
      { name: "Online Assessment", date: "Oct 10, 2023", selected: 120 },
      { name: "Technical Interviews", date: "Oct 15-20, 2023", selected: 40 },
      { name: "Bar Raiser Round", date: "Oct 25, 2023", selected: 20 }
    ],
    packageRange: "₹16 - 30 LPA",
    eligibility: "B.Tech (CSE, IT, ECE), 8.0+ CGPA"
  },
  {
    id: 13,
    name: "Google",
    arrivalDate: "November 2023",
    rounds: [
      { name: "Coding Challenge", date: "Nov 5, 2023", selected: 80 },
      { name: "Technical Phone Screens", date: "Nov 10-15, 2023", selected: 25 },
      { name: "Onsite Interviews", date: "Nov 20-25, 2023", selected: 10 }
    ],
    packageRange: "₹20 - 35 LPA",
    eligibility: "B.Tech (CSE, IT), 9.0+ CGPA"
  },
  {
    id: 14,
    name: "Intel",
    arrivalDate: "February 2024",
    rounds: [
      { name: "Technical Quiz", date: "Feb 5, 2024", selected: 90 },
      { name: "Technical Interviews", date: "Feb 10-15, 2024", selected: 35 },
      { name: "HR Discussion", date: "Feb 20, 2024", selected: 18 }
    ],
    packageRange: "₹12 - 25 LPA",
    eligibility: "B.Tech (CSE, ECE, EEE), 7.5+ CGPA"
  },
  {
    id: 15,
    name: "NVIDIA",
    arrivalDate: "March 2024",
    rounds: [
      { name: "Coding Test", date: "Mar 1, 2024", selected: 70 },
      { name: "Technical Deep Dive", date: "Mar 5-10, 2024", selected: 25 },
      { name: "Final Evaluation", date: "Mar 15, 2024", selected: 12 }
    ],
    packageRange: "₹15 - 28 LPA",
    eligibility: "B.Tech (CSE, ECE), 8.0+ CGPA"
  }
];

// Dummy data for offcampus opportunities
const offcampusOpportunities = [
  {
    id: 101,
    company: "Google",
    role: "Software Engineer",
    location: "Bangalore/Hyderabad",
    package: "₹15 - 30 LPA",
    applyLink: "https://careers.google.com"
  },
  {
    id: 102,
    company: "Amazon",
    role: "Development Engineer",
    location: "Bangalore",
    package: "₹12 - 25 LPA",
    applyLink: "https://www.amazon.jobs"
  },
  {
    id: 103,
    company: "Microsoft",
    role: "Program Manager",
    location: "Hyderabad",
    package: "₹14 - 28 LPA",
    applyLink: "https://careers.microsoft.com"
  }
];

const Placements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'oncampus' | 'offcampus'>('oncampus');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleCompanyClick = (company: Company) => {
    setSelectedCompany(company);
  };

  const handleBackClick = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="placements-container">
      <header className="placements-header">
        <h1>GITAM Placement Opportunities</h1>
        <p>Explore companies visiting our campus and off-campus opportunities</p>
      </header>

      {!selectedCompany ? (
        <>
          <div className="tabs-container">
            <button 
              className={`tab-button ${activeTab === 'oncampus' ? 'active' : ''}`}
              onClick={() => setActiveTab('oncampus')}
            >
              <FaBuilding /> On-Campus Companies
            </button>
            <button 
              className={`tab-button ${activeTab === 'offcampus' ? 'active' : ''}`}
              onClick={() => setActiveTab('offcampus')}
            >
              <FaUsers /> Off-Campus Opportunities
            </button>
          </div>

          {activeTab === 'oncampus' && (
            <div className="companies-list">
              <h2>Companies Visiting GITAM</h2>
              <div className="company-grid">
                {oncampusCompanies.map(company => (
                  <div 
                    key={company.id} 
                    className="company-card"
                    onClick={() => handleCompanyClick(company)}
                  >
                    <h3>{company.name}</h3>
                    <div className="company-details">
                      <div className="detail">
                        <FaCalendarAlt />
                        <span>Arrived: {company.arrivalDate}</span>
                      </div>
                      <div className="detail">
                        <FaUsers />
                        <span>Package: {company.packageRange}</span>
                      </div>
                    </div>
                    <div className="view-more">
                      View details <FaArrowRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'offcampus' && (
            <div className="opportunities-list">
              <h2>Off-Campus Placement Opportunities</h2>
              {offcampusOpportunities.map(opportunity => (
                <a 
                  key={opportunity.id} 
                  href={opportunity.applyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opportunity-card"
                >
                  <div className="opportunity-header">
                    <h3>{opportunity.company}</h3>
                    <span className="role">{opportunity.role}</span>
                  </div>
                  <div className="opportunity-details">
                    <div className="detail">
                      <span>Location: {opportunity.location}</span>
                    </div>
                    <div className="detail">
                      <span>Package: {opportunity.package}</span>
                    </div>
                  </div>
                  <div className="apply-now">
                    Apply Now <FaArrowRight />
                  </div>
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="company-detail-view">
          <button className="back-button" onClick={handleBackClick}>
            &larr; Back to Companies
          </button>
          
          <h2>{selectedCompany.name}</h2>
          
          <div className="company-info">
            <div className="info-card">
              <h3>Arrival Date</h3>
              <p>{selectedCompany.arrivalDate}</p>
            </div>
            <div className="info-card">
              <h3>Package Range</h3>
              <p>{selectedCompany.packageRange}</p>
            </div>
            <div className="info-card">
              <h3>Eligibility</h3>
              <p>{selectedCompany.eligibility}</p>
            </div>
          </div>
          
          <h3>Selection Process</h3>
          <div className="rounds-container">
            {selectedCompany.rounds.map((round, index) => (
              <div key={index} className="round-card">
                <div className="round-header">
                  <span className="round-number">Round {index + 1}</span>
                  <span className="round-name">{round.name}</span>
                </div>
                <div className="round-details">
                  <div className="detail">
                    <FaCalendarAlt />
                    <span>Date: {round.date}</span>
                  </div>
                  <div className="detail">
                    <FaUsers />
                    <span>Selected: {round.selected} students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Placements;