import React, { useState } from "react";
import "./CareerPathQuiz.css";
import logo from "../assets/dlogo.png";
function CareerPathQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const calculateResult = () => {
    if (!answers.q1 || !answers.q2 || !answers.q3) {
      alert("Please answer all questions");
      return;
    }

    let score = { frontend: 0, backend: 0, qa: 0, uiux: 0 };

    Object.values(answers).forEach((ans) => {
      score[ans]++;
    });

    let career = Object.keys(score).reduce((a, b) =>
      score[a] > score[b] ? a : b
    );

    let careerText = {
      frontend: "Frontend Developer - You love design & web creation!",
      backend: "Backend Developer - You enjoy logic & data handling!",
      qa: "QA Engineer - You’re great at finding bugs & improving quality!",
      uiux: "UI/UX Designer - You have a creative problem-solving mind!",
    };

    setResult(careerText[career]);
  };

  return (
    <div className="quiz-page">
      {/* Back Button */}
      <a href="/" className="back-btn">
        ⬅ Back
      </a>

      {/* Header */}
      <header>
        <img src={logo} alt="Dheena Coder Logo" />
      </header>

      <h1>Take the Career Path Quiz</h1>

      {/* Quiz Section */}
      <div className="quiz-container">
        {/* Question 1 */}
        <div className="question">
          <h3>1. Which part of tech excites you the most?</h3>
          <label>
            <input
              type="radio"
              name="q1"
              value="frontend"
              onChange={(e) => handleChange("q1", e.target.value)}
            />{" "}
            Creating websites and designs
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="backend"
              onChange={(e) => handleChange("q1", e.target.value)}
            />{" "}
            Building server logic and APIs
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="qa"
              onChange={(e) => handleChange("q1", e.target.value)}
            />{" "}
            Testing and finding bugs
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="uiux"
              onChange={(e) => handleChange("q1", e.target.value)}
            />{" "}
            Designing user experiences
          </label>
        </div>

        {/* Question 2 */}
        <div className="question">
          <h3>2. What type of work do you enjoy?</h3>
          <label>
            <input
              type="radio"
              name="q2"
              value="frontend"
              onChange={(e) => handleChange("q2", e.target.value)}
            />{" "}
            Visual and creative
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="backend"
              onChange={(e) => handleChange("q2", e.target.value)}
            />{" "}
            Logical and analytical
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="qa"
              onChange={(e) => handleChange("q2", e.target.value)}
            />{" "}
            Detailed and investigative
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="uiux"
              onChange={(e) => handleChange("q2", e.target.value)}
            />{" "}
            Creative problem-solving
          </label>
        </div>

        {/* Question 3 */}
        <div className="question">
          <h3>3. Which tool would you rather learn first?</h3>
          <label>
            <input
              type="radio"
              name="q3"
              value="frontend"
              onChange={(e) => handleChange("q3", e.target.value)}
            />{" "}
            HTML/CSS/JavaScript
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="backend"
              onChange={(e) => handleChange("q3", e.target.value)}
            />{" "}
            Node.js / Databases
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="qa"
              onChange={(e) => handleChange("q3", e.target.value)}
            />{" "}
            Selenium / Testing Tools
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="uiux"
              onChange={(e) => handleChange("q3", e.target.value)}
            />{" "}
            Figma / Adobe XD
          </label>
        </div>

        {/* Submit Button */}
        <button onClick={calculateResult}>See My Career Path</button>

        {/* Result */}
        {result && <div className="result">{result}</div>}
      </div>
    </div>
  );
}

export default CareerPathQuiz;
