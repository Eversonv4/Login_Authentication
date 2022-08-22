import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createSession, api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const { userId, token } = response.data;

    localStorage.setItem("user", JSON.stringify(userId));
    localStorage.setItem("token", JSON.stringify(token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(userId);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, loading, login, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
