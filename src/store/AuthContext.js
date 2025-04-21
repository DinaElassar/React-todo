import React, { createContext, useState } from "react";
import { loginUser } from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Retrieve user from localStorage on initial load
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("my_todo_user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to retrieve user from localStorage:", error);
      return null;
    }
  });

  const login = async (username, password) => {
    const loggedInUser = await loginUser(username, password);
    setUser(loggedInUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("my_todo_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
