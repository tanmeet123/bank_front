import "../styles/login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function LoginPage() {
  function login() {
    // auth
  }

  const handleRegisterClick = () => {
    history.push("/register");
  };

  return (
    <div id="login-container">
      <h2>Login</h2>
      <form id="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="button" onClick={login}>
          Login
        </button>
      </form>
      <div id="register-link">
        <p>
          Don't have an account?{" "}
          <a onClick={handleRegisterClick}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
