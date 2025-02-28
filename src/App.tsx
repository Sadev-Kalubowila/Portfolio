import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Project1 from './components/Projects/pages/Project1'

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <Router>
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Routes>
            <Route path="/project1" element={<Project1 />} />
            {/* Add more routes as needed */}
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <Expertise />
                  <Timeline />
                  <Project />
                  <Contact />
                </>
              }
            />
          </Routes>
        </FadeIn>
        <Footer />
      </div>
      </Router>
    );
}

export default App;