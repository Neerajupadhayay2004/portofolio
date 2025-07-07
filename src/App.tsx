import React from 'react';
import CircuitBackground from './components/CircuitBackground';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-x-hidden">
      {/* Circuit Background */}
      <CircuitBackground />
      
      {/* Content Wrapper */}
      <div className="relative bg-gray-900/97 backdrop-blur-sm">
        {/* Header */}
        <Header />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="container mx-auto">
          <About />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Terminal */}
        <Terminal />
        
        {/* AI Chat */}
        <AIChat />
      </div>
    </div>
  );
}

export default App;