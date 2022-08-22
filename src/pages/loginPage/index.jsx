import React, { useState, useRef, useContext } from "react";
import "./styles.css";
import { AuthContext } from "../../context/auth";

export default function LoginPage() {
  const { login, isAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    login(email, password);
  };

  return (
    <div id="login">
      <h1 className="title">Login do sistema</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
