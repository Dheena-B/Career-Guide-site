import { Link } from "react-router-dom";
import careerImg from "../assets/career-img.jpg";
import dhcImg from "../assets/dh-c.jpg";
import sdlcImg from "../assets/sdlc-1.png";
import sdlcdImg from "../assets/sdlc-img.jpg";
import "./Home.css";

export default function Home() {
  return (
     <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>
            Build Your <br /> Tech <span className="cr-1">Career</span> <br />
            From the <span>Ground Up</span>
          </h1>
          <p>
            Ready to step into the world of technology, but don't know where to start? Whether you dream of coding websites, analyzing data, testing software, or designing apps — it all begins with a strong foundation.
            This blog is your step-by-step guide to starting a career in tech with confidence. Learn essential skills, explore different roles, build real projects, and prepare for job opportunities — all in one place.
          </p>
          <p className="t1">
            Start small. Stay consistent. Grow big. Your tech journey starts right here, right now.
          </p>
          <div className="btn">
            <Link to="/roadmaps"><button>Explore Beginner Roadmaps</button></Link>
            <Link to="/career-quiz"><button>Take the Career Path Quiz</button></Link>
            <Link to="/study-plan"><button>Download Free Study Plan</button></Link>
          </div>
        </div>
        <div className="career-img">
          <img className="career-img1" src={careerImg} alt="career-img" />
         </div>
      </section>

      {/* About Section */}
      <section className="qa-user">
        <div className="qa-1">
          <img src={dhcImg} alt="dheena coder" />
          <h1>Are you entering IT company?</h1>
        </div>

        <div className="qa-2">
          <details>
            <summary>What is Frontend Development?</summary>
            <div className="content">
              Frontend development is the process of building the visual parts of a website or app — like buttons, menus, layouts, and animations — using HTML, CSS, and JavaScript.
            </div>
          </details>

          <details>
            <summary>What is Backend Development?</summary>
            <div className="content">
              Backend development involves writing code that connects the frontend (what users see) to the server, database, and logic that runs everything.
            </div>
          </details>

          <details>
            <summary>What is Full-Stack Development?</summary>
            <div className="content">
              A Full-Stack Developer is someone who can build an entire web app — from designing the interface (frontend) to handling servers, databases, and APIs (backend).
            </div>
          </details>
        </div>
      </section>

      {/* IT Company Section */}
      <section className="it-company">
        <div className="it-container">
          <img src={sdlcdImg} alt="sdlc-img" />
          <h1>IT Company Work Process?</h1>
        </div>
        <div className="it-container-2">
          <img src={sdlcImg} alt="sdlc-1-img" />
          <div className="pra-tag">
            <p>
              The Software Development Life Cycle (SDLC) is a structured process followed by software teams to design, develop, and maintain software systems. It provides a clear roadmap for building high-quality software in a systematic and efficient way.
              SDLC includes several key phases: Requirement Gathering, Planning, Design, Development, Testing, Deployment, and Maintenance.
              Each phase has specific goals and deliverables to ensure the final product meets the client’s expectations. By following the SDLC process, IT companies can reduce errors, improve quality, and deliver projects on time and within budget.
            </p>
          </div>
        </div>
      </section>

      {/* IT Department Section */}
      <section className="it-department">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Role / Responsibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Software Development</td>
              <td>Builds applications, websites, and software (frontend + backend).</td>
            </tr>
            <tr className="active-row">
              <td>2. Quality Assurance (QA)</td>
              <td>Tests the software for bugs, performance, and usability.</td>
            </tr>
            <tr>
              <td>3. UI/UX Design</td>
              <td>Designs user interfaces and improves user experience.</td>
            </tr>
            <tr className="active-row">
              <td>4. IT Support / Help Desk</td>
              <td>Handles technical issues, computer setups, and user support.</td>
            </tr>
            <tr>
              <td>5. Project Management</td>
              <td>Plans, schedules, and manages software projects.</td>
            </tr>
            <tr className="active-row">
              <td>6. Business Analysis</td>
              <td>Collects client requirements and converts them into tech specs.</td>
            </tr>
            <tr>
              <td>7. Human Resources (HR)</td>
              <td>Recruits, trains, and manages employee welfare.</td>
            </tr>
            <tr className="active-row">
              <td>8. Sales & Marketing</td>
              <td>Promotes services, finds clients, and drives business growth.</td>
            </tr>
            <tr>
              <td>9. DevOps / Deployment</td>
              <td>Automates deployment, manages servers, and ensures uptime.</td>
            </tr>
            <tr className="active-row">
              <td>10. Cybersecurity</td>
              <td>Protects systems from hacking, malware, and data breaches.</td>
            </tr>
            <tr>
              <td>11. Database Administration (DBA)</td>
              <td>Manages data storage, performance, and backups.</td>
            </tr>
            <tr className="active-row">
              <td>12. Product Management</td>
              <td>Defines product features and strategy based on user needs.</td>
            </tr>
            <tr>
              <td>13. Finance & Accounts</td>
              <td>Handles budgeting, salaries, and company expenses.</td>
            </tr>
            <tr className="active-row">
              <td>14. Training & Development</td>
              <td>Organizes employee skill development and workshops.</td>
            </tr>
            <tr>
              <td>15. Client Support / Customer Service</td>
              <td>Helps clients use the product and solve problems.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
