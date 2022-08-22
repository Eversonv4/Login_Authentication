import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import { AuthContext } from "../context/auth";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Private>
            <HomePage />
          </Private>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
