import React, { useState } from "react";
import {
  FaUserTie,
  FaComments,
  FaBullhorn,
  FaCalendarAlt,
  FaPaperPlane,
  FaUsers,
  FaStar,
  FaClock,
  FaFileAlt,
  FaVideo,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./talktomentor.css";

interface Message {
  id: number;
  text: string;
  sender: "mentor" | "user";
  time: string;
}

interface Announcement {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: "workshop" | "recruitment" | "general" | "opportunity";
}

interface Mentor {
  id: number;
  name: string;
  role: string;
  department: string;
  expertise: string[];
  rating: number;
  availability: "online" | "busy" | "offline";
  nextAvailable: string;
  email: string;
  phone: string;
  linkedin?: string;
}

const MentorCommunity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "announcements" | "mentors">("chat");
  const [message, setMessage] = useState("");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  // More detailed initial messages
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! Welcome to the GITAM Career Support System. I'm your virtual career advisor. How can I assist you with your career journey today?", sender: "mentor", time: "10:00 AM" },
    { id: 2, text: "Hi! I need guidance on preparing for Amazon interviews for SDE roles.", sender: "user", time: "10:02 AM" },
    { id: 3, text: "Excellent choice! Amazon SDE interviews are quite structured. They typically focus on Data Structures, Algorithms, System Design, and Leadership Principles. Have you started preparing? What's your current technical level?", sender: "mentor", time: "10:03 AM" },
    { id: 4, text: "I've been practicing DSA for 3 months. I'm comfortable with arrays, linked lists, trees, and basic graphs. But I'm worried about system design.", sender: "user", time: "10:04 AM" },
    { id: 5, text: "That's a great start! For system design, start with basic concepts like load balancing, caching, databases, and APIs. Amazon often asks about designing scalable systems. Let me share some resources and we can schedule a mock interview to assess your current level.", sender: "mentor", time: "10:05 AM" },
    { id: 6, text: "That would be very helpful. Also, can you review my resume? I want to make sure it's ATS-friendly.", sender: "user", time: "10:06 AM" },
    { id: 7, text: "Absolutely! For ATS-friendly resumes, ensure you include relevant keywords from the job description, use standard headings, avoid graphics/tables, and save as PDF. Upload your resume and I'll provide detailed feedback. Also, are you looking for internship or full-time positions?", sender: "mentor", time: "10:07 AM" },
    { id: 8, text: "I'm looking for summer internships now, but preparing for full-time placements next year.", sender: "user", time: "10:08 AM" },
  ]);

  const announcements: Announcement[] = [
    {
      id: 1,
      title: "TCS Digital Hiring Drive",
      content: "TCS is conducting a digital hiring drive for 2024 batch. Last date to apply: March 30, 2024. Eligibility: Minimum 7.5 CGPA, no active backlogs. Process: Online test followed by technical and HR interviews.",
      author: "Placement Cell",
      date: "2024-03-15",
      category: "recruitment",
    },
    {
      id: 2,
      title: "Resume Building Workshop",
      content: "Learn how to create an ATS-friendly resume that gets noticed by recruiters. Date: March 20, 2024 at 3:00 PM in Auditorium. Speakers: Industry HR professionals from Amazon and Microsoft.",
      author: "Career Services",
      date: "2024-03-14",
      category: "workshop",
    },
    {
      id: 3,
      title: "Google STEP Internship Applications Open",
      content: "Applications for Google STEP internship are now open for 2nd year students. Deadline: April 15, 2024. This is a great opportunity for underrepresented groups in tech. Includes mentorship and technical training.",
      author: "Training & Placement",
      date: "2024-03-12",
      category: "opportunity",
    },
    {
      id: 4,
      title: "Mock Interview Sessions",
      content: "Schedule your mock interviews with industry experts from March 18-25, 2024. Slots available for technical (coding), HR, and managerial rounds. Book your slot through the placement portal.",
      author: "Placement Cell",
      date: "2024-03-10",
      category: "workshop",
    },
  ];

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Dr. Ravi Kumar",
      role: "Placement Coordinator",
      department: "Computer Science & Engineering",
      expertise: ["Interview Preparation", "Resume Building", "Career Planning", "Technical Interviews"],
      rating: 4.8,
      availability: "online",
      nextAvailable: "Today, 3:00 PM",
      email: "ravi.kumar@gitam.edu",
      phone: "+91 9876543210",
      linkedin: "linkedin.com/in/ravikumar"
    },
    {
      id: 2,
      name: "Prof. Anjali Sharma",
      role: "Career Counselor",
      department: "Career Services",
      expertise: ["Psychometric Testing", "Career Assessment", "Soft Skills", "Communication Training"],
      rating: 4.6,
      availability: "busy",
      nextAvailable: "Tomorrow, 11:00 AM",
      email: "anjali.sharma@gitam.edu",
      phone: "+91 9876543211",
    },
    {
      id: 3,
      name: "Mr. Suresh Patel",
      role: "Industry Liaison",
      department: "Training & Placement",
      expertise: ["Corporate Relations", "Internship Guidance", "Networking", "Industry Trends"],
      rating: 4.7,
      availability: "online",
      nextAvailable: "Today, 4:30 PM",
      email: "suresh.patel@gitam.edu",
      phone: "+91 9876543212",
      linkedin: "linkedin.com/in/sureshpatel"
    },
    {
      id: 4,
      name: "Dr. Meera Nair",
      role: "Technical Mentor",
      department: "Electronics & Communication",
      expertise: ["Technical Interviews", "Project Guidance", "Research Careers", "Higher Studies"],
      rating: 4.9,
      availability: "offline",
      nextAvailable: "March 18, 10:00 AM",
      email: "meera.nair@gitam.edu",
      phone: "+91 9876543213",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate detailed mentor replies with different responses
      setTimeout(() => {
        const mentorReplies = [
          "Great question! Let me break that down for you. Based on your profile, I recommend focusing on the following areas...",
          "I understand your concern. Many students face similar challenges. Let me share some proven strategies that have worked for our alumni.",
          "That's an important consideration. According to our placement data from last year, students with similar preparation landed offers from...",
          "Excellent point! For this, I suggest you start with foundational concepts and gradually move to advanced topics. Here's a 30-day plan...",
          "Based on industry trends, companies are currently looking for candidates with skills in: 1) Cloud Computing 2) Data Analytics 3) AI/ML basics",
          "For resume improvements, consider adding quantifiable achievements. Instead of 'worked on project', try 'Improved performance by 30% using...'",
          "Regarding interview preparation, practice the STAR method (Situation, Task, Action, Result) for behavioral questions. It works well for most companies.",
          "Let me share some resources: 1) LeetCode for DSA 2) System Design Primer on GitHub 3) GeeksforGeeks for company-specific questions",
          "Based on your interests, have you considered these emerging fields: DevOps, Cybersecurity, Data Science, or Product Management?",
          "Many companies value projects over CGPA. Focus on building 2-3 solid projects that demonstrate your problem-solving skills.",
          "Networking is crucial. Attend industry talks, connect with alumni on LinkedIn, and participate in hackathons to build your profile.",
          "For summer internships, start applying now. Many companies have early deadlines. Focus on startups for more hands-on experience.",
          "Consider contributing to open-source projects. It shows initiative and collaboration skills, which recruiters value highly.",
          "Mock interviews are essential. We can schedule one this week. I'll provide feedback on technical knowledge and communication skills.",
          "Remember to prepare questions for the interviewer. Good questions show genuine interest and critical thinking.",
        ];
        
        const randomReply = mentorReplies[Math.floor(Math.random() * mentorReplies.length)];
        const mentorReply: Message = {
          id: messages.length + 2,
          text: randomReply,
          sender: "mentor",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, mentorReply]);
      }, 800);
    }
  };

  const getCategoryColor = (category: Announcement["category"]) => {
    switch (category) {
      case "recruitment": return "#dc3545";
      case "workshop": return "#007bff";
      case "opportunity": return "#28a745";
      case "general": return "#6c757d";
      default: return "#6c757d";
    }
  };

  const getAvailabilityColor = (status: Mentor["availability"]) => {
    switch (status) {
      case "online": return "#28a745";
      case "busy": return "#ffc107";
      case "offline": return "#6c757d";
      default: return "#6c757d";
    }
  };

  return (
    <motion.div 
      className="mentor-community"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="mentor-header">
        <div className="header-content">
          <h1>
            <FaUsers className="header-icon" />
            Mentor & Community Support
          </h1>
          <p>Connect with mentors, get career advice, and stay updated with announcements</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="mentor-container">
        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "chat" ? "active" : ""}`}
              onClick={() => setActiveTab("chat")}
            >
              <FaComments />
              Chat with Mentor
            </button>
            <button
              className={`tab ${activeTab === "mentors" ? "active" : ""}`}
              onClick={() => setActiveTab("mentors")}
            >
              <FaUserTie />
              Available Mentors
            </button>
            <button
              className={`tab ${activeTab === "announcements" ? "active" : ""}`}
              onClick={() => setActiveTab("announcements")}
            >
              <FaBullhorn />
              Community Announcements
            </button>
          </div>
        </div>

        {/* Chat Tab */}
        {activeTab === "chat" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="chat-section"
          >
            <div className="chat-container">
              {/* Chat Header */}
              <div className="chat-header">
                <div className="mentor-info">
                  <FaUserTie className="mentor-avatar" />
                  <div>
                    <h3>Career Advisor Chat</h3>
                    <span className="status online">Online - Ready to help!</span>
                  </div>
                </div>
                <button className="schedule-btn">
                  <FaCalendarAlt />
                  Schedule Meeting
                </button>
              </div>

              {/* Messages */}
              <div className="messages-container">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`message ${msg.sender}`}
                  >
                    <div className="message-content">
                      <p>{msg.text}</p>
                      <span className="message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="message-input">
                <input
                  type="text"
                  placeholder="Type your career questions here... (Press Enter to send)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="send-btn">
                  <FaPaperPlane />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <span>Quick Questions:</span>
                <div className="action-buttons">
                  <button onClick={() => setMessage("How to prepare for technical interviews at FAANG companies?")}>
                    FAANG Prep
                  </button>
                  <button onClick={() => setMessage("Can you review my resume for internship applications?")}>
                    Resume Review
                  </button>
                  <button onClick={() => setMessage("What skills are most in-demand for 2024 placements?")}>
                    Trending Skills
                  </button>
                  <button onClick={() => setMessage("How to balance academics with placement preparation?")}>
                    Time Management
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mentors Tab */}
        {activeTab === "mentors" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mentors-section"
          >
            <h2 className="section-title">Available Career Mentors</h2>
            <p className="section-subtitle">Contact our mentors for personalized guidance and support</p>
            <div className="mentors-grid">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="mentor-card">
                  <div className="mentor-header-card">
                    <FaUserTie className="mentor-icon" />
                    <div>
                      <h3>{mentor.name}</h3>
                      <p className="mentor-role">{mentor.role}</p>
                    </div>
                    <span 
                      className="availability-badge"
                      style={{ backgroundColor: getAvailabilityColor(mentor.availability) }}
                    >
                      {mentor.availability}
                    </span>
                  </div>
                  
                  <div className="mentor-details">
                    <p className="department">{mentor.department}</p>
                    
                    <div className="rating">
                      <FaStar />
                      <span>{mentor.rating} rating</span>
                    </div>
                    
                    <div className="expertise">
                      <strong>Expertise:</strong>
                      <div className="expertise-tags">
                        {mentor.expertise.map((skill, idx) => (
                          <span key={idx} className="expertise-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="contact-info">
                      <div className="contact-item">
                        <FaEnvelope />
                        <span>{mentor.email}</span>
                      </div>
                      <div className="contact-item">
                        <FaPhone />
                        <span>{mentor.phone}</span>
                      </div>
                      {mentor.linkedin && (
                        <div className="contact-item">
                          <FaLinkedin />
                          <a href={`https://${mentor.linkedin}`} target="_blank" rel="noopener noreferrer">
                            LinkedIn Profile
                          </a>
                        </div>
                      )}
                    </div>
                    
                    <div className="next-available">
                      <FaClock />
                      <span>Next available slot: <strong>{mentor.nextAvailable}</strong></span>
                    </div>
                  </div>
                  
                  {/* Updated actions - only Schedule button */}
                  <div className="mentor-actions">
                    <button className="action-btn schedule-btn">
                      <FaCalendarAlt /> Schedule Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Announcements Tab */}
        {activeTab === "announcements" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="announcements-section"
          >
            <h2 className="section-title">Community Announcements</h2>
            <p className="section-subtitle">Stay updated with placement drives, workshops, and opportunities</p>
            
            {/* New Announcement Form */}
            <div className="new-announcement">
              <h3>
                <FaBullhorn />
                Post New Announcement
              </h3>
              <div className="form-group">
                <input type="text" placeholder="Announcement Title" />
                <textarea placeholder="Announcement Content..." rows={3} />
                <div className="form-actions">
                  <select>
                    <option value="general">General</option>
                    <option value="workshop">Workshop</option>
                    <option value="recruitment">Recruitment</option>
                    <option value="opportunity">Opportunity</option>
                  </select>
                  <button className="post-btn">Post Announcement</button>
                </div>
              </div>
            </div>

            {/* Announcements List */}
            <div className="announcements-list">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="announcement-card">
                  <div className="announcement-header">
                    <span 
                      className="category-badge"
                      style={{ backgroundColor: getCategoryColor(announcement.category) }}
                    >
                      {announcement.category.toUpperCase()}
                    </span>
                    <span className="announcement-date">
                      {new Date(announcement.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="announcement-title">{announcement.title}</h3>
                  <p className="announcement-content">{announcement.content}</p>
                  
                  <div className="announcement-footer">
                    <span className="announcement-author">
                      <FaUserTie /> {announcement.author}
                    </span>
                    <div className="announcement-actions">
                      <button className="action-btn">
                        <FaFileAlt /> Save
                      </button>
                      <button className="action-btn">
                        <FaPaperPlane /> Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MentorCommunity;