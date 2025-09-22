import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          Welcome to <span className="astra">Astra</span>
          <span className="ai">AI</span>
        </h1>
        <p className="login-subtitle" style={{ fontWeight: "bold" }}>Ready to Evolve your Business with Us!</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <FaEnvelope className="icon" />
              <input
                id="email"
{/*                 type="email" */}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FaLock className="icon" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="form-actions">
            <label className="remember-me" style={{ fontWeight: "bold", color: "#5D76A9",fontSize:"16px" }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="remember-text">Remember Me</span>
            </label>
            <a href="#" className="forgot-password" style={{ fontWeight: "bold"}}>Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            <FaUser className="login-icon" /> Login
          </button>
        </form>
        <p className="terms">
          By signing in, you agree to our <a href="#" className="link" style={{ fontWeight: "bold"}}>Terms of Service</a> and <a href="#" className="link"style={{ fontWeight: "bold"}}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
