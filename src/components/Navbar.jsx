import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAdjust, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/dlogo.png";

export default function Navbar({ toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="dlogo" className="logo" />

      {/* Menu Links */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/roadmaps" onClick={() => setIsOpen(false)}>Explore Roadmaps</Link></li>
        <li><Link to="/career-quiz" onClick={() => setIsOpen(false)}>Career Quiz</Link></li>
        <li><Link to="/study-plan" onClick={() => setIsOpen(false)}>Study Plan</Link></li>
        <li className="mobile-login">
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="right-section">
        <button onClick={toggleTheme} className="theme-btn">
          <FaAdjust />
        </button>
        <Link to="/login" className="signin-btn">Login</Link>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

