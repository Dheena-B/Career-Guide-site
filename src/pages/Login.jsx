import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login Successful!");
      navigate("/");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>🔑 Log In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn-green">Log In</button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
