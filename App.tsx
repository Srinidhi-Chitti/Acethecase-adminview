// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

// Pages
import LandingPage from "./pages/Landingpage";
import Features from "./pages/Features";
import Personalised from "./pages/Personalised";
import Internships from "./pages/Internships";
import PlacementInsights from "./pages/PlacementInsights";
import Placements from "./pages/Placements";
import ResumeParser from "./pages/ResumeParser";
import Signin from "./pages/Signin";
import TalkToMentor from "./pages/talktomentor";
import Skills from "./pages/Skills";
import InternshipRecommendation from "./pages/InternshipRecommendation";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/personalised" element={<Personalised />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/placement-insights" element={<PlacementInsights />} />
            <Route path="/talk-to-mentor" element={<TalkToMentor />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/resume-parser" element={<ResumeParser />} />
            <Route path="/skills" element={<Skills />} />
            <Route
              path="/InternshipRecommendation"
              element={<InternshipRecommendation />}
            />
            <Route
              path="/signin"
              element={
                <Signin
                  isSignup={false}
                  onSwitch={() => {}}
                  onSuccess={() => {}}
                />
              }
            />
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;