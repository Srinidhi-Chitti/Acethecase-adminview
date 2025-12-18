// src/pages/ResumeParser.tsx
import React, { useState } from 'react';
import { FaUpload, FaFilePdf, FaFileWord, FaPercentage, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ResumeParser.css';

const ResumeParser: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchScore, setMatchScore] = useState<number | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === 'application/pdf' || 
          selectedFile.type === 'application/msword' || 
          selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(selectedFile);
        setFileName(selectedFile.name);
      } else {
        alert('Please upload a PDF or Word document');
      }
    }
  };

  const handleAnalyze = () => {
    if (!file) {
      alert('Please upload a resume first');
      return;
    }
    if (!jobDescription.trim()) {
      alert('Please enter a job description');
      return;
    }

    setIsAnalyzing(true);
    
    // change this part for resume analyser code. Give it chatgpt or some AI engine and change the page with adding the integration because the below is dummy data.
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 40) + 60; // Random score between 60-100
      setMatchScore(randomScore);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setFileName('');
    setMatchScore(null);
    setJobDescription('');
  };

  return (
    <div className="resume-parser-container">
      <div className="resume-parser-header">
        <h1>Resume Parser</h1>
        <p>Upload your resume to analyze how well it matches with your desired job</p>
      </div>

      <div className="resume-parser-content">
        <div className="upload-section">
          <div className="upload-box">
            <div className="upload-icon">
              <FaUpload size={48} />
            </div>
            <input
              type="file"
              id="resume-upload"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="resume-upload" className="upload-button">
              Choose Resume
            </label>
            {fileName && (
              <div className="file-info">
                {fileName.endsWith('.pdf') ? <FaFilePdf /> : <FaFileWord />}
                <span>{fileName}</span>
              </div>
            )}
          </div>

          <div className="job-description">
            <h3>Job Description</h3>
            <textarea
              placeholder="Paste the job description you're applying for..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>

          <div className="action-buttons">
            <button 
              onClick={handleAnalyze} 
              disabled={isAnalyzing}
              className="analyze-button"
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
            </button>
            <button onClick={handleReset} className="reset-button">
              Reset
            </button>
          </div>
        </div>

        {matchScore !== null && (
          <div className="results-section">
            <h2>Analysis Results</h2>
            <div className="match-score">
              <div className="score-circle">
                <span>{matchScore}%</span>
                <FaPercentage className="percentage-icon" />
              </div>
              <h3>Match Score</h3>
              <div className="score-feedback">
                {matchScore >= 80 ? (
                  <p>Excellent match! Your resume aligns well with this position.</p>
                ) : matchScore >= 60 ? (
                  <p>Good match, but consider tailoring your resume further.</p>
                ) : (
                  <p>Your resume needs significant improvements for this role.</p>
                )}
              </div>
            </div>

            <div className="improvement-tips">
              <h3>Improvement Suggestions</h3>
              <ul>
                {matchScore < 90 && (
                  <li><FaStar /> Add more relevant keywords from the job description</li>
                )}
                {matchScore < 85 && (
                  <li><FaStar /> Highlight your most relevant experiences first</li>
                )}
                {matchScore < 80 && (
                  <li><FaStar /> Include measurable achievements with numbers</li>
                )}
                <li><FaStar /> Keep your resume to 1-2 pages maximum</li>
                <li><FaStar /> Use bullet points for better readability</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeParser;