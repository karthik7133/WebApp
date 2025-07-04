// components/LoginRegisterModal.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css"; // reuse modal styles

function LoginRegisterModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register state
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate login
    alert(`Login successful!\nWelcome ${email}`);
    onClose();
    navigate("/");
  };

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simulate registration
    alert(`Registration successful! You can now log in.`);
    // Reset and switch to login mode
    setIsLogin(true);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        <button className="book-btn" onClick={isLogin ? handleLogin : handleRegister}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p style={{ marginTop: "10px" }}>
          {isLogin ? (
            <>
              No account?{" "}
              <span className="toggle-link" onClick={() => setIsLogin(false)}>
                Register here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="toggle-link" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default LoginRegisterModal;
