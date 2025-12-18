import React from "react";
import {
  FaGraduationCap,
  FaUserTie,
  FaUserGraduate,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const mentorDetails = {
    name: "Dr. Ravi Kumar",
    email: "ravi.kumar@gitam.edu",
    phone: "+91 9876543210",
    department: "Computer Science & Engineering",
    designation: "Placement Coordinator",
  };

  const studentDetails = {
    name: "Srinidhi Chitti",
    rollNumber: "2210030288",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    cgpa: "8.7",
    skills: ["React", "Node.js", "Python", "Java"],
  };

  const lastMeetings = [
    { date: "2024-03-15", topic: "Resume Building Workshop", status: "Completed" },
    { date: "2024-03-20", topic: "Technical Interview Preparation", status: "Scheduled" },
    { date: "2024-03-25", topic: "Company Specific Training (TCS)", status: "Upcoming" },
  ];

  const stats = [
    { value: "95", label: "Companies comming to gitam" },
    { value: "1500+", label: "total people applied for placements" },
    { value: "796", label: "Placed people in the year 2024-25" },
  ];

  return (
    <motion.div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Launch Your Career with <span>GITAM</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-cta"
          >
            <button
              onClick={() => navigate("/placement-insights")}
              className="cta-primary"
            >
              Placement Insights
            </button>
            <button
              onClick={() => navigate("/internships")}
              className="cta-secondary"
            >
              Explore Internships
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stat-card"
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Student Details Section */}
      <section className="student-details-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Student Dashboard
        </motion.h2>
        <div className="details-grid">
          {/* Mentor Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="detail-card mentor-card"
          >
            <div className="card-header">
              <FaUserTie className="card-icon" />
              <h3>Mentor Details</h3>
            </div>
            <div className="card-content">
              <div className="detail-item">
                <strong>Name:</strong> {mentorDetails.name}
              </div>
              <div className="detail-item">
                <FaEnvelope className="item-icon" />
                <strong>Email:</strong> {mentorDetails.email}
              </div>
              <div className="detail-item">
                <FaPhone className="item-icon" />
                <strong>Phone:</strong> {mentorDetails.phone}
              </div>
              <div className="detail-item">
                <strong>Department:</strong> {mentorDetails.department}
              </div>
              <div className="detail-item">
                <strong>Designation:</strong> {mentorDetails.designation}
              </div>
            </div>
          </motion.div>

          {/* Student Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="detail-card student-card"
          >
            <div className="card-header">
              <FaUserGraduate className="card-icon" />
              <h3>Student Details</h3>
            </div>
            <div className="card-content">
              <div className="detail-item">
                <strong>Name:</strong> {studentDetails.name}
              </div>
              <div className="detail-item">
                <strong>Roll Number:</strong> {studentDetails.rollNumber}
              </div>
              <div className="detail-item">
                <strong>Department:</strong> {studentDetails.department}
              </div>
              <div className="detail-item">
                <strong>Year:</strong> {studentDetails.year}
              </div>
              <div className="detail-item">
                <strong>CGPA:</strong> {studentDetails.cgpa}
              </div>
              <div className="detail-item">
                <strong>Skills:</strong>
                <div className="skills-container">
                  {studentDetails.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Last Meetings Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="detail-card meetings-card"
          >
            <div className="card-header">
              <FaCalendarAlt className="card-icon" />
              <h3>Recent Meetings</h3>
            </div>
            <div className="card-content">
              {lastMeetings.map((meeting, index) => (
                <div key={index} className="meeting-item">
                  <div className="meeting-date">
                    {new Date(meeting.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="meeting-topic">{meeting.topic}</div>
                  <div className={`meeting-status ${meeting.status.toLowerCase()}`}>
                    {meeting.status}
                  </div>
                </div>
              ))}
              <button className="view-all-button" onClick={() => navigate("/talk-to-mentor")}>
                View All Meetings →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Career?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of GITAM students who've launched successful careers
            through our portal
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => navigate("/features")}
              className="cta-button"
            >
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>

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
    </motion.div>
  );
};

export default LandingPage;