import React from "react";
import "./ExploreBeginner.css";

function ExploreBeginner() {
  return (
    <div className="roadmaps-section">
      <h2>
        🚀 Explore Beginner <span className="highlight-green">Roadmaps</span>
      </h2>
      <p>
        Step-by-step guides for your dream tech career. Choose your path and
        start learning today.
      </p>

      <div className="roadmap-grid">
        {/* Frontend Developer */}
        <div className="roadmap-card">
          <div className="icon">💻</div>
          <h3>Frontend Developer</h3>
          <p>
            Learn HTML, CSS, JavaScript & React to build beautiful websites.
          </p>
          <a href="/pdfs/frontend_roadmap.pdf" download className="btn-green">
            📥 Download PDF
          </a>
        </div>

        {/* Backend Developer */}
        <div className="roadmap-card">
          <div className="icon">🗄</div>
          <h3>Backend Developer</h3>
          <p>Learn Databases, APIs, Node.js & server logic.</p>
          <a href="/pdfs/backend_roadmap.pdf" download className="btn-green">
            📥 Download PDF
          </a>
        </div>

        {/* QA Engineer */}
        <div className="roadmap-card">
          <div className="icon">🧪</div>
          <h3>QA Engineer</h3>
          <p>Master software testing, automation tools & bug tracking.</p>
          <a href="/pdfs/qa-roadmap.pdf" download className="btn-green">
            📥 Download PDF
          </a>
        </div>

        {/* UI/UX Designer */}
        <div className="roadmap-card">
          <div className="icon">🎨</div>
          <h3>UI/UX Designer</h3>
          <p>Create user-friendly designs using Figma & design principles.</p>
          <a href="/pdfs/uiux-roadmap.pdf" download className="btn-green">
            📥 Download PDF
          </a>
        </div>
      </div>

      {/* Back Button */}
      <a href="/" className="back-btn">
        <span>⬅</span> Back
      </a>
    </div>
  );
}

export default ExploreBeginner;

