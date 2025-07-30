import React from "react";
import "./StudyPlan.css";
import logo from "../assets/dlogo.png";

function StudyPlan() {
  return (
    <div className="study-plan-page">
      {/* Back Button */}
      <a href="/" className="back-btn">⬅ Back</a>

      {/* Header */}
      <header>
        <img src={logo} alt="Dheena Coder Logo" />
      </header>

      <div className="container">
        <h1>📚 Dheena Coder – Free Tech Career Study Plan</h1>

        <div className="timeline">
          {/* YouTube Section */}
          <div className="step youtube-section">
            <h2>🎥 Top YouTube Channels for Full Stack Developers</h2>
            <p>
              Learning from video tutorials is one of the fastest ways to become a Full Stack Developer.
            </p>
            <ul>
              <li>🚀 <a href="https://www.youtube.com/c/TraversyMedia" target="_blank" rel="noreferrer">Traversy Media</a></li>
              <li>🛠 <a href="https://www.youtube.com/c/ProgrammingwithMosh" target="_blank" rel="noreferrer">Programming with Mosh</a></li>
              <li>⚡ <a href="https://www.youtube.com/c/TheNetNinja" target="_blank" rel="noreferrer">The Net Ninja</a></li>
              <li>💡 <a href="https://www.youtube.com/c/Freecodecamp" target="_blank" rel="noreferrer">freeCodeCamp.org</a></li>
              <li>🎯 <a href="https://www.youtube.com/c/AkshaySaini" target="_blank" rel="noreferrer">Akshay Saini</a></li>
            </ul>
            <p>✅ Tip: Subscribe to at least two of these channels and follow along by building the projects they teach.</p>
          </div>

          {/* Interview Tips */}
          <div className="step">
            <h2>💡 Bonus: Interview Tips & Career Prep</h2>
            <ul>
              <li>📄 <strong>Know Your Resume</strong> – Be ready to explain every project and skill listed.</li>
              <li>💻 <strong>Practice Coding Challenges</strong> – Use <a href="https://leetcode.com/" target="_blank" rel="noreferrer">LeetCode</a>, <a href="https://www.hackerrank.com/" target="_blank" rel="noreferrer">HackerRank</a>, and <a href="https://www.codewars.com/" target="_blank" rel="noreferrer">Codewars</a>.</li>
              <li>🗣 <strong>Prepare for Behavioral Questions</strong> – Use the STAR method (Situation, Task, Action, Result).</li>
              <li>📚 <strong>Review Fundamentals</strong> – HTML, CSS, JS, backend basics.</li>
              <li>🙌 <strong>Show Enthusiasm</strong> – Employers value passion for learning.</li>
              <li>🔍 <strong>Research the Company</strong> – Know their products, mission, and tech stack.</li>
            </ul>
          </div>

          {/* Study Plan Weeks */}
          <div className="step"><h2>📅 Week 1-2: Web Development Basics</h2><p>HTML, CSS, JavaScript fundamentals, small UI projects.</p></div>
          <div className="step"><h2>⚡ Week 3-4: Advanced JavaScript + Projects</h2><p>DOM, Fetch API, JSON, mini-apps.</p></div>
          <div className="step"><h2>⚛️ Week 5-6: React.js</h2><p>Components, Props, State, a small React project.</p></div>
          <div className="step"><h2>🛠 Week 7-8: Backend Development</h2><p>Node.js, Express.js, MongoDB basics.</p></div>
          <div className="step"><h2>🎯 Week 9-10: Final Project + Portfolio</h2><p>Full-stack app, hosting, GitHub portfolio.</p></div>

          {/* Download Button */}
          <div className="btn-download">
            <a href="/pdfs/free_study_plan.pdf" download>📥 Download Study Plan (PDF)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPlan;

