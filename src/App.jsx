import React from 'react';

function App() {
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
