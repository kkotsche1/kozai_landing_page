import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    let animationFrameId;
    
    const handleMouseMove = (e) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        // Calculate normalized coordinates (-1 to 1)
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="app-container">
      {/* Dynamic Animated Background */}
      <div className="background-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <main className="content">
        <div className="logo-container">
          <img 
            src="/kozai_development_labs_logo.png" 
            alt="Kozai Development Labs Logo" 
            className="logo"
          />
        </div>
        
        <h1 className="title">Kozai Development Labs</h1>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Kozai Development Labs LLC &mdash; New Mexico. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
