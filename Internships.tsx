// src/pages/Internships.tsx
import React, { useState } from 'react';
import './Internships.css';
import { FaUniversity, FaBuilding, FaPlus, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

// Dummy data
const collegeInternships = [
  {
    id: 1,
    title: "Campus Research Assistant",
    department: "Computer Science",
    professor: "Dr. Ramesh Kumar",
    email: "ramesh.kumar@gitam.edu",
    description: "Assist in AI research project for final year students. Requires Python and ML knowledge.",
    duration: "3 months",
    stipend: "₹8,000/month",
    deadline: "2023-11-15"
  },
  {
    id: 2,
    title: "Library Digitalization Project",
    department: "Information Technology",
    professor: "Prof. Sunita Patel",
    email: "sunitap@gitam.edu",
    description: "Help digitize library resources and develop catalog system.",
    duration: "2 months",
    stipend: "₹5,000/month",
    deadline: "2023-11-20"
  }
];

const externalInternships = [
  {
    id: 101,
    title: "Software Developer Intern",
    company: "Tech Solutions India",
    link: "https://techsolutions.com/internships",
    location: "Hyderabad",
    description: "Full-stack development using React and Node.js",
    duration: "6 months",
    stipend: "₹15,000/month",
    deadline: "2023-11-30"
  },
  {
    id: 102,
    title: "Data Science Intern",
    company: "Analytics Pro",
    link: "https://analyticspro.co/careers",
    location: "Bangalore",
    description: "Work on real-world data analysis projects",
    duration: "3 months",
    stipend: "₹12,000/month",
    deadline: "2023-12-10"
  }
];

const Internships: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'college' | 'external'>('college');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    description: '',
    duration: '',
    stipend: '',
    deadline: '',
    studentEmails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to your backend
    console.log('Internship posted:', formData);
    console.log('Email would be sent to:', formData.studentEmails.split(','));
    alert(`Internship posted successfully! Emails will be sent to selected students.`);
    setShowForm(false);
    setFormData({
      title: '',
      department: '',
      description: '',
      duration: '',
      stipend: '',
      deadline: '',
      studentEmails: ''
    });
  };

  return (
    <div className="internships-container">
      {/* Full Width Header */}
      <header className="internships-header">
        <h1>Internship Opportunities</h1>
        <p>Find the perfect internship to kickstart your career</p>
      </header>

      {/* Main Content Area - Centered */}
      <div className="internships-main">
        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'college' ? 'active' : ''}`}
            onClick={() => setActiveTab('college')}
          >
            <FaUniversity /> College Internships
          </button>
          <button 
            className={`tab-button ${activeTab === 'external' ? 'active' : ''}`}
            onClick={() => setActiveTab('external')}
          >
            <FaBuilding /> External Internships
          </button>
        </div>

        {activeTab === 'college' && (
          <div className="internship-list">
            <button className="add-internship-btn" onClick={() => setShowForm(true)}>
              <FaPlus /> Post New Internship Opportunity
            </button>

            {showForm && (
              <div className="internship-form-container">
                <form onSubmit={handleSubmit} className="internship-form">
                  <h3>Post New College Internship</h3>
                  <div className="form-group">
                    <label>Internship Title</label>
                    <input 
                      type="text" 
                      name="title" 
                      value={formData.title}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Department</label>
                    <input 
                      type="text" 
                      name="department" 
                      value={formData.department}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea 
                      name="description" 
                      value={formData.description}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Duration</label>
                      <input 
                        type="text" 
                        name="duration" 
                        value={formData.duration}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Stipend</label>
                      <input 
                        type="text" 
                        name="stipend" 
                        value={formData.stipend}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Application Deadline</label>
                      <input 
                        type="date" 
                        name="deadline" 
                        value={formData.deadline}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Student Emails (comma separated)</label>
                    <textarea 
                      name="studentEmails" 
                      value={formData.studentEmails}
                      onChange={handleInputChange}
                      placeholder="student1@gitam.edu, student2@gitam.edu"
                      required 
                    />
                  </div>
                  <div className="form-actions">
                    <button type="button" onClick={() => setShowForm(false)}>
                      Cancel
                    </button>
                    <button type="submit">
                      <FaEnvelope /> Post & Notify Students
                    </button>
                  </div>
                </form>
              </div>
            )}

            {collegeInternships.map(internship => (
              <div key={internship.id} className="internship-card">
                <div className="internship-header">
                  <h3>{internship.title}</h3>
                  <span className="department">{internship.department}</span>
                </div>
                <p className="professor">Supervisor: {internship.professor}</p>
                <p className="description">{internship.description}</p>
                <div className="internship-details">
                  <div className="detail">
                    <FaCalendarAlt />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="detail">
                    <span>₹</span>
                    <span>{internship.stipend}</span>
                  </div>
                  <div className="detail">
                    <span>Deadline: {internship.deadline}</span>
                  </div>
                </div>
                <div className="contact-info">
                  <FaEnvelope />
                  <span>{internship.email}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'external' && (
          <div className="internship-list">
            {externalInternships.map(internship => (
              <a 
                key={internship.id} 
                href={internship.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="internship-card external"
              >
                <div className="internship-header">
                  <h3>{internship.title}</h3>
                  <span className="company">{internship.company}</span>
                </div>
                <p className="description">{internship.description}</p>
                <div className="internship-details">
                  <div className="detail">
                    <FaMapMarkerAlt />
                    <span>{internship.location}</span>
                  </div>
                  <div className="detail">
                    <FaCalendarAlt />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="detail">
                    <span>₹</span>
                    <span>{internship.stipend}</span>
                  </div>
                </div>
                <div className="deadline">
                  Apply by: {internship.deadline}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Internships;