import React, { useState } from "react";
import PocketBase from "pocketbase";
import { useNavigate } from "react-router-dom";
import "../../styles/Register.css";

const pb = new PocketBase("https://pb.devpgs.app");

function Register() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accept, setAccept] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!accept) {
      setError("You must accept the Terms & Conditions.");
      return;
    }

    try {
      await pb.collection("users").create({
        email,
        password,
        passwordConfirm: confirm,
        username,
      });
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      let errorMsg = "Registration failed.";
      if (err.data) {
        errorMsg +=
          " " +
          Object.entries(err.data)
            .map(([field, detail]) => `${field}: ${detail.message}`)
            .join(" ");
      } else if (err.message) {
        errorMsg += " " + err.message;
      }
      setError(errorMsg);
    }
  };

  return (
    <div className="register-bg">
      <form className="register-panel" onSubmit={handleSubmit}>
        <div className="register-header-row">
          <h2>
            <strong>Create</strong> your account!
          </h2>
          <div className="register-logo">
            <strong>Demo</strong> Panel
          </div>
        </div>
        <p className="register-subheader">
          Sign up to unlock exclusive features.
        </p>
        <div className="register-fields-row">
          <div className="register-avatar"></div>
          <input
            type="text"
            placeholder="Enter your full name (optional)"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="register-fields-row">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your full email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-fields-row">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        <div className="register-options-row">
          <label>
            <input
              type="checkbox"
              checked={accept}
              onChange={() => setAccept(!accept)}
              required
            />{" "}
            I accept the <a href="#" className="register-link">Terms & Conditions</a>
          </label>
          <button className="register-btn" type="submit">
            Create Account →
          </button>
        </div>
        {error && (
          <div
            style={{
              color: "#ff7f7f",
              width: "100%",
              textAlign: "center",
              marginTop: "10px"
            }}
          >
            {error}
          </div>
        )}
        {success && (
          <div
            style={{
              color: "green",
              width: "100%",
              textAlign: "center",
              marginTop: "10px"
            }}
          >
            {success}
          </div>
        )}
        <p className="register-footer">
          Already have an account?{" "}
          <span className="register-link" onClick={() => navigate("/login")}>
            Log in
          </span>
        </p>
        <div className="footer">2025 © Demo Panel | FE</div>
      </form>
    </div>
  );
}

export default Register;
