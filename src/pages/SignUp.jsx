
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"; // ✅ CSS Import

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account Created!");
      navigate("/");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>📝 Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn-green">Sign Up</button>
      </form>

      <p>
        Already have an account?{" "}
        <Link className="link" to="/login">
          Log In
        </Link>
      </p>
    </div>
  );
}
