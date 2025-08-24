import React, { useState } from "react";
import PocketBase from "pocketbase";
import TermsModal from "./TermsModal";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const pb = new PocketBase("https://pb.devpgs.app");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const authData = await pb.collection("users").authWithPassword(email, password);
      localStorage.setItem("pb_token", authData.token);
      localStorage.setItem("user_email", email);
      setShowTerms(true);
    } catch (err) {
      setError("Login failed. Incorrect email or password.", err);
    }
  };

  const handleTermsClose = () => {
    setShowTerms(false);
    navigate("/dashboard");
  };

  return (
    <div className="login-bg">
      <form className="login-panel" onSubmit={handleSubmit}>
        <div className="login-logo">
          <strong>Demo Panel</strong>
        </div>
        <h2 className="login-header">Log in to your account!</h2>
        <p className="login-subheader">Enter your email and password to login</p>
        <div className="login-input">
          <span className="icon">✉️</span>
          <input
            type="email"
            placeholder="Enter email address.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-input">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div>
        <button className="login-btn" type="submit">
          Sign In to Account
        </button>
        {error && <div style={{ color: "#ff7f7f", width: "100%", textAlign: "center", marginTop: "10px" }}>{error}</div>}
        <div className="divider"></div>
        <div className="create-account">
          <span>Don't have account?</span>
          <button
            type="button"
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Create New Account
          </button>
        </div>
        <div className="footer">2025 © Demo Panel | FE</div>
      </form>
      {showTerms && <TermsModal onClose={handleTermsClose} />}
    </div>
  );
}

export default Login;
