import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicPage from "../pages/PublicPage";
import LoginPage from "../pages/LoginPage";
import TodoPage from "../pages/TodoPage";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = ({ isAuthenticated }) => {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/todos"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <TodoPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
