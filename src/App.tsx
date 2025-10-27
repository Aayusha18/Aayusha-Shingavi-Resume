import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { ProjectsCaseStudies } from './pages/ProjectsCaseStudies';
import { ProjectDetail } from './pages/ProjectDetail';
import { ExperienceLeadership } from './pages/ExperienceLeadership';
import { Education } from './pages/Education';
import { Contact } from './pages/Contact';
import { Navigation } from './components/Navigation';
import { FluidBackground } from './components/FluidBackground';
export function App() {
  return <BrowserRouter>
      <div className="relative min-h-screen w-full bg-gray-50 text-gray-900 overflow-x-hidden">
        <FluidBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsCaseStudies />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<ExperienceLeadership />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>;
}