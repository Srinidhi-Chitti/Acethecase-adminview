import React, { useState, useRef } from 'react';
import './InternshipRecommendation.css';
import { 
  FaUpload, 
  FaFilePdf, 
  FaStar, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaRupeeSign, 
  FaBriefcase,
  FaBuilding,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaDownload,
  FaUniversity,
  FaExternalLinkAlt
} from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
  relevance: 'high' | 'medium' | 'low';
}

interface Internship {
  id: number;
  title: string;
  company: string;
  type: 'on-campus' | 'off-campus';
  location: string;
  matchScore: number;
  skills: string[];
  duration: string;
  stipend: string;
  description: string;
  applyLink: string;
  deadline: string;
  eligibility: string[];
  logo: string;
}

const InternshipRecommendation: React.FC = () => {
  const [resumeText, setResumeText] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisComplete, setAnalysisComplete] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filterType, setFilterType] = useState<'all' | 'on-campus' | 'off-campus'>('all');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock extracted skills from resume (would come from backend)
  const extractedSkills: Skill[] = [
    { name: 'React', level: 85, relevance: 'high' },
    { name: 'JavaScript', level: 90, relevance: 'high' },
    { name: 'Python', level: 75, relevance: 'medium' },
    { name: 'Node.js', level: 70, relevance: 'medium' },
    { name: 'HTML/CSS', level: 95, relevance: 'high' },
    { name: 'Machine Learning', level: 60, relevance: 'low' },
    { name: 'MongoDB', level: 65, relevance: 'medium' },
    { name: 'TypeScript', level: 55, relevance: 'low' },
  ];

  // Mock internship data
  const internships: Internship[] = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      type: "on-campus",
      location: "GITAM Campus, Visakhapatnam",
      matchScore: 92,
      skills: ["React", "JavaScript", "HTML/CSS", "TypeScript"],
      duration: "3 months",
      stipend: "₹15,000/month",
      description: "Work on building responsive web applications using React. Collaborate with design team to implement user interfaces.",
      applyLink: "#",
      deadline: "2024-02-15",
      eligibility: ["3rd/4th year", "CGPA ≥ 7.5", "React knowledge"],
      logo: "techcorp"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Innovate Labs",
      type: "on-campus",
      location: "GITAM Innovation Center",
      matchScore: 88,
      skills: ["React", "Node.js", "MongoDB", "JavaScript"],
      duration: "6 months",
      stipend: "₹20,000/month",
      description: "Develop full-stack applications with MERN stack. Opportunity for pre-placement offer.",
      applyLink: "#",
      deadline: "2024-02-20",
      eligibility: ["2nd year and above", "Web development experience", "Team player"],
      logo: "innovatelabs"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "DataTech Analytics",
      type: "off-campus",
      location: "Hyderabad (Remote)",
      matchScore: 65,
      skills: ["Python", "Machine Learning", "Data Analysis"],
      duration: "4 months",
      stipend: "₹18,000/month",
      description: "Work on real-world data analysis projects. Learn from industry experts.",
      applyLink: "#",
      deadline: "2024-03-01",
      eligibility: ["Python knowledge", "Statistical skills", "3rd/4th year"],
      logo: "datatech"
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "WebCraft Digital",
      type: "off-campus",
      location: "Bangalore",
      matchScore: 85,
      skills: ["React", "JavaScript", "HTML/CSS", "Node.js"],
      duration: "3 months",
      stipend: "₹12,000/month",
      description: "Build client websites and internal tools. Modern stack with latest technologies.",
      applyLink: "#",
      deadline: "2024-02-28",
      eligibility: ["Portfolio required", "Git knowledge", "Good communication"],
      logo: "webcraft"
    },
    {
      id: 5,
      title: "Campus Ambassador",
      company: "GITAM Career Cell",
      type: "on-campus",
      location: "GITAM University",
      matchScore: 95,
      skills: ["Communication", "Leadership", "Marketing"],
      duration: "1 year",
      stipend: "₹5,000/month + incentives",
      description: "Represent GITAM in campus activities. Help organize placement drives.",
      applyLink: "#",
      deadline: "2024-02-10",
      eligibility: ["All years", "Good academic record", "Leadership skills"],
      logo: "gitam"
    },
    {
      id: 6,
      title: "Research Intern - AI",
      company: "GITAM CS Department",
      type: "on-campus",
      location: "CS Department, GITAM",
      matchScore: 70,
      skills: ["Python", "Machine Learning", "Research"],
      duration: "4 months",
      stipend: "₹8,000/month",
      description: "Assist professors in AI research projects. Publication opportunities.",
      applyLink: "#",
      deadline: "2024-02-25",
      eligibility: ["CGPA ≥ 8.0", "Python skills", "Research interest"],
      logo: "gitam"
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsAnalyzing(true);
      // Simulate file reading and analysis
      setTimeout(() => {
        analyzeResume();
      }, 1500);
    }
  };

  const analyzeResume = () => {
    setIsAnalyzing(true);
    // Simulate API call to analyze resume
    setTimeout(() => {
      setSkills(extractedSkills);
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  const handlePasteResume = () => {
    if (resumeText.trim()) {
      setIsAnalyzing(true);
      analyzeResume();
    } else {
      alert('Please paste your resume text first');
    }
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return '#2e7d32';
    if (score >= 80) return '#4caf50';
    if (score >= 70) return '#8bc34a';
    if (score >= 60) return '#ff9800';
    return '#f44336';
  };

  const getRelevanceColor = (relevance: 'high' | 'medium' | 'low') => {
    switch (relevance) {
      case 'high': return '#2e7d32';
      case 'medium': return '#ff9800';
      case 'low': return '#f44336';
    }
  };

  const filteredInternships = internships.filter(internship => {
    if (filterType === 'all') return true;
    return internship.type === filterType;
  });

  const sortedInternships = [...filteredInternships].sort((a, b) => b.matchScore - a.matchScore);

  return (
    <div className="internship-recommendation-container">
      {/* Header */}
      <header className="recommendation-header">
        <div className="header-content">
          <h1>Personalized Internship Recommendations</h1>
          <p>Upload your resume or paste its content to get AI-powered internship suggestions</p>
        </div>
      </header>

      <div className="main-content">
        {/* Left Column: Resume Input & Skills Analysis */}
        <div className="left-column">
          <div className="resume-input-section">
            <div className="input-methods">
              <div className="upload-area" onClick={() => fileInputRef.current?.click()}>
                <FaUpload className="upload-icon" />
                <h3>Upload Resume</h3>
                <p>PDF, DOC, or DOCX files supported</p>
                {uploadedFile && (
                  <div className="uploaded-file">
                    <FaFilePdf />
                    <span>{uploadedFile.name}</span>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </div>

              <div className="or-divider">
                <span>OR</span>
              </div>

              <div className="paste-area">
                <h3>Paste Resume Text</h3>
                <textarea
                  placeholder="Paste your resume content here..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  rows={6}
                />
                <button 
                  onClick={handlePasteResume}
                  className="analyze-btn"
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
                </button>
              </div>
            </div>

            {isAnalyzing && (
              <div className="analysis-progress">
                <div className="spinner"></div>
                <p>Analyzing your resume for skills and experience...</p>
              </div>
            )}

            {analysisComplete && (
              <div className="skills-analysis">
                <h3>Skills Identified</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span 
                          className="relevance-tag"
                          style={{ backgroundColor: getRelevanceColor(skill.relevance) }}
                        >
                          {skill.relevance}
                        </span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="progress-bar"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: getRelevanceColor(skill.relevance)
                          }}
                        ></div>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="analysis-summary">
                  <div className="summary-item">
                    <FaCheckCircle />
                    <span>Skills Identified: {skills.length}</span>
                  </div>
                  <div className="summary-item">
                    <FaStar />
                    <span>High Relevance: {skills.filter(s => s.relevance === 'high').length}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Internship Recommendations */}
        <div className="right-column">
          <div className="recommendations-header">
            <h2>
              <FaBriefcase /> Personalized Recommendations
              {analysisComplete && (
                <span className="result-count">{sortedInternships.length} matches found</span>
              )}
            </h2>
            
            {analysisComplete && (
              <div className="filter-tabs">
                <button 
                  className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterType('all')}
                >
                  All Internships
                </button>
                <button 
                  className={`filter-btn ${filterType === 'on-campus' ? 'active' : ''}`}
                  onClick={() => setFilterType('on-campus')}
                >
                  <FaUniversity /> On-Campus
                </button>
                <button 
                  className={`filter-btn ${filterType === 'off-campus' ? 'active' : ''}`}
                  onClick={() => setFilterType('off-campus')}
                >
                  <FaBuilding /> Off-Campus
                </button>
              </div>
            )}
          </div>

          {analysisComplete ? (
            <div className="recommendations-grid">
              {sortedInternships.map(internship => (
                <div key={internship.id} className="internship-card">
                  <div className="card-header">
                    <div className="internship-type">
                      {internship.type === 'on-campus' ? (
                        <span className="type-badge on-campus">
                          <FaUniversity /> On-Campus
                        </span>
                      ) : (
                        <span className="type-badge off-campus">
                          <FaBuilding /> Off-Campus
                        </span>
                      )}
                    </div>
                    <div 
                      className="match-score"
                      style={{ backgroundColor: getMatchColor(internship.matchScore) }}
                    >
                      {internship.matchScore}% Match
                    </div>
                  </div>

                  <h3>{internship.title}</h3>
                  <p className="company-name">{internship.company}</p>
                  <p className="description">{internship.description}</p>

                  <div className="skills-tags">
                    {internship.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <div className="internship-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt />
                      <span>{internship.location}</span>
                    </div>
                    <div className="detail-item">
                      <FaCalendarAlt />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="detail-item">
                      <FaRupeeSign />
                      <span>{internship.stipend}</span>
                    </div>
                  </div>

                  <div className="eligibility">
                    <strong>Eligibility:</strong>
                    <ul>
                      {internship.eligibility.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="deadline-apply">
                    <div className="deadline">
                      <strong>Deadline:</strong> {internship.deadline}
                    </div>
                    <a href={internship.applyLink} className="apply-btn">
                      Apply Now <FaArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="placeholder-message">
              <FaBriefcase className="placeholder-icon" />
              <h3>Upload or paste your resume to see personalized recommendations</h3>
              <p>We'll analyze your skills and match you with the best internship opportunities</p>
              <div className="upload-cta">
                <button 
                  className="cta-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FaUpload /> Upload Resume
                </button>
                <p>OR</p>
                <p>Paste your resume text in the left panel and click "Analyze Resume"</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <FaStar className="stat-icon" />
            <div className="stat-number">92%</div>
            <div className="stat-label">Match Accuracy</div>
          </div>
          <div className="stat-card">
            <FaUniversity className="stat-icon" />
            <div className="stat-number">50+</div>
            <div className="stat-label">On-Campus Partners</div>
          </div>
          <div className="stat-card">
            <FaBuilding className="stat-icon" />
            <div className="stat-number">100+</div>
            <div className="stat-label">Off-Campus Companies</div>
          </div>
          <div className="stat-card">
            <FaCheckCircle className="stat-icon" />
            <div className="stat-number">200+</div>
            <div className="stat-label">Students Placed</div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="tips-section">
        <h2><FaGraduationCap /> Tips for Better Recommendations</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-number">01</div>
            <h4>Include All Skills</h4>
            <p>Make sure your resume includes all technical and soft skills you possess</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">02</div>
            <h4>Update Experience</h4>
            <p>Keep your projects and work experience updated for better matching</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">03</div>
            <h4>Be Specific</h4>
            <p>Mention specific technologies, frameworks, and tools you've worked with</p>
          </div>
          <div className="tip-card">
            <div className="tip-number">04</div>
            <h4>Highlight Achievements</h4>
            <p>Include measurable achievements and impacts from your projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipRecommendation;