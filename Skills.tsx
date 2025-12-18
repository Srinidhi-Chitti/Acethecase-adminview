import React, { useState } from 'react';
import './Skills.css';
import { 
  FaRoad, 
  FaCode, 
  FaServer, 
  FaCloud, 
  FaMobileAlt, 
  FaDatabase,
  FaCheckCircle,
  FaBook,
  FaExternalLinkAlt,
  FaArrowRight
} from 'react-icons/fa';

interface Roadmap {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  categories: string[];
  steps: RoadmapStep[];
  externalUrl: string;
}

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  resources: ResourceLink[];
  completed: boolean;
}

interface ResourceLink {
  name: string;
  url: string;
}

const Skills: React.FC = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState<string>('frontend');
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([
    {
      id: 'frontend',
      title: 'Frontend Developer',
      icon: <FaCode />,
      description: 'Learn modern frontend development with HTML, CSS, JavaScript, and React.',
      difficulty: 'Beginner',
      categories: ['Web', 'JavaScript', 'React'],
      externalUrl: 'https://roadmap.sh/frontend',
      steps: [
        {
          id: 1,
          title: 'HTML & CSS Fundamentals',
          description: 'Learn the building blocks of the web: semantic HTML and modern CSS.',
          resources: [
            { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
            { name: 'CSS Tricks', url: 'https://css-tricks.com' }
          ],
          completed: true
        },
        {
          id: 2,
          title: 'JavaScript Essentials',
          description: 'Master JavaScript fundamentals, ES6+ features, and DOM manipulation.',
          resources: [
            { name: 'JavaScript.info', url: 'https://javascript.info' },
            { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net' }
          ],
          completed: true
        },
        {
          id: 3,
          title: 'React & State Management',
          description: 'Build interactive UIs with React and manage state effectively.',
          resources: [
            { name: 'React Official Docs', url: 'https://reactjs.org' },
            { name: 'React Tutorial', url: 'https://react-tutorial.app' }
          ],
          completed: false
        },
        {
          id: 4,
          title: 'Build Tools & Testing',
          description: 'Learn Webpack, Vite, and testing with Jest and React Testing Library.',
          resources: [
            { name: 'Vite Guide', url: 'https://vitejs.dev' },
            { name: 'Testing Library', url: 'https://testing-library.com' }
          ],
          completed: false
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Developer',
      icon: <FaServer />,
      description: 'Master server-side programming, APIs, databases, and deployment.',
      difficulty: 'Intermediate',
      categories: ['Node.js', 'APIs', 'Database'],
      externalUrl: 'https://roadmap.sh/backend',
      steps: [
        {
          id: 1,
          title: 'Node.js & Express',
          description: 'Learn to build RESTful APIs with Node.js and Express framework.',
          resources: [
            { name: 'Node.js Docs', url: 'https://nodejs.org' },
            { name: 'Express Guide', url: 'https://expressjs.com' }
          ],
          completed: true
        },
        {
          id: 2,
          title: 'Database Design',
          description: 'Understand SQL and NoSQL databases like PostgreSQL and MongoDB.',
          resources: [
            { name: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com' },
            { name: 'MongoDB University', url: 'https://university.mongodb.com' }
          ],
          completed: false
        }
      ]
    },
    {
      id: 'devops',
      title: 'Devops Engineer',
      icon: <FaCloud />,
      description: 'Learn CI/CD, cloud platforms, containers, and infrastructure as code.',
      difficulty: 'Advanced',
      categories: ['Cloud', 'Docker', 'Kubernetes'],
      externalUrl: 'https://roadmap.sh/devops',
      steps: [
        {
          id: 1,
          title: 'Linux & Shell Scripting',
          description: 'Master Linux commands and automate tasks with shell scripts.',
          resources: [
            { name: 'Linux Journey', url: 'https://linuxjourney.com' },
            { name: 'Shell Scripting Guide', url: 'https://www.shellscript.sh' }
          ],
          completed: false
        },
        {
          id: 2,
          title: 'Docker & Containers',
          description: 'Containerize applications with Docker and Docker Compose.',
          resources: [
            { name: 'Docker Docs', url: 'https://docs.docker.com' },
            { name: 'Docker Tutorial', url: 'https://docker-curriculum.com' }
          ],
          completed: false
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Developer',
      icon: <FaMobileAlt />,
      description: 'Build native or cross-platform mobile applications for iOS and Android.',
      difficulty: 'Intermediate',
      categories: ['React Native', 'Flutter', 'iOS'],
      externalUrl: 'https://roadmap.sh/react-native',
      steps: [
        {
          id: 1,
          title: 'React Native Fundamentals',
          description: 'Learn React Native basics and build your first mobile app.',
          resources: [
            { name: 'React Native Docs', url: 'https://reactnative.dev' },
            { name: 'React Native Tutorial', url: 'https://reactnative.dev/docs/tutorial' }
          ],
          completed: false
        },
        {
          id: 2,
          title: 'Mobile UI & Navigation',
          description: 'Design mobile interfaces and implement navigation patterns.',
          resources: [
            { name: 'React Navigation', url: 'https://reactnavigation.org' },
            { name: 'Mobile UI Patterns', url: 'https://mobile-patterns.com' }
          ],
          completed: false
        }
      ]
    },
    {
      id: 'data',
      title: 'Data Engineer',
      icon: <FaDatabase />,
      description: 'Design and build data pipelines, warehouses, and processing systems.',
      difficulty: 'Advanced',
      categories: ['Python', 'SQL', 'Big Data'],
      externalUrl: 'https://roadmap.sh/data-engineer',
      steps: [
        {
          id: 1,
          title: 'Python for Data Engineering',
          description: 'Master Python and essential data processing libraries.',
          resources: [
            { name: 'Python Data Science', url: 'https://python.org' },
            { name: 'Pandas Documentation', url: 'https://pandas.pydata.org' }
          ],
          completed: false
        },
        {
          id: 2,
          title: 'Data Pipeline Design',
          description: 'Learn to design and implement efficient data pipelines.',
          resources: [
            { name: 'Apache Airflow', url: 'https://airflow.apache.org' },
            { name: 'Data Engineering Guide', url: 'https://github.com/andkret/Cookbook' }
          ],
          completed: false
        }
      ]
    }
  ]);

  const currentRoadmap = roadmaps.find(roadmap => roadmap.id === selectedRoadmap) || roadmaps[0];

  const toggleStepCompletion = (stepId: number) => {
    setRoadmaps(prevRoadmaps => {
      return prevRoadmaps.map(roadmap => {
        if (roadmap.id === selectedRoadmap) {
          return {
            ...roadmap,
            steps: roadmap.steps.map(step => 
              step.id === stepId ? { ...step, completed: !step.completed } : step
            )
          };
        }
        return roadmap;
      });
    });
  };

  return (
    <div className="skills-container">
      {/* Header - Full Width */}
      <header className="skills-header">
        <div className="header-content">
          <FaRoad className="header-icon" />
          <h1>Skills Roadmap</h1>
          <p className="header-subtitle">
            Select a career path to view the detailed learning roadmap
          </p>
          {/* Refresh button removed as requested */}
        </div>
      </header>

      <div className="skills-content">
        {/* Roadmap Selection */}
        <section className="roadmap-selection">
          <h2>Choose Your Career Path</h2>
          <p className="section-subtitle">Select a roadmap to view the detailed learning path</p>
          
          <div className="roadmap-cards">
            {roadmaps.map((roadmap) => (
              <div 
                key={roadmap.id}
                className={`roadmap-card ${selectedRoadmap === roadmap.id ? 'selected' : ''}`}
                onClick={() => setSelectedRoadmap(roadmap.id)}
              >
                <div className="card-icon">
                  {roadmap.icon}
                </div>
                <h3>{roadmap.title}</h3>
                <p className="card-description">{roadmap.description}</p>
                <div className="card-tags">
                  <span className={`difficulty-tag ${roadmap.difficulty.toLowerCase()}`}>
                    {roadmap.difficulty}
                  </span>
                  {roadmap.categories.map((cat, idx) => (
                    <span key={idx} className="category-tag">{cat}</span>
                  ))}
                </div>
                <a 
                  href={roadmap.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="external-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on roadmap.sh <FaExternalLinkAlt />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Roadmap Detail */}
        <section className="roadmap-detail">
          <div className="detail-header">
            <div className="detail-title">
              <div className="title-icon">
                {currentRoadmap.icon}
              </div>
              <div>
                <h2>{currentRoadmap.title} Roadmap</h2>
                <p className="roadmap-description">{currentRoadmap.description}</p>
              </div>
            </div>
            <a 
              href={currentRoadmap.externalUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="full-roadmap-link"
            >
              View Full Roadmap <FaExternalLinkAlt />
            </a>
          </div>

          <div className="steps-container">
            <h3>Learning Path</h3>
            <div className="steps-grid">
              {currentRoadmap.steps.map((step) => (
                <div key={step.id} className={`step-card ${step.completed ? 'completed' : ''}`}>
                  <div className="step-header">
                    <div className="step-number">Step {step.id}</div>
                    <button 
                      className="complete-toggle"
                      onClick={() => toggleStepCompletion(step.id)}
                    >
                      {step.completed ? (
                        <><FaCheckCircle /> Completed</>
                      ) : (
                        'Mark Complete'
                      )}
                    </button>
                  </div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                  
                  <div className="step-resources">
                    <h5><FaBook /> Learning Resources</h5>
                    <div className="resource-links">
                      {step.resources.map((resource, idx) => (
                        <a 
                          key={idx}
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="resource-link"
                        >
                          {resource.name} <FaArrowRight />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;