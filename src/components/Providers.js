import React from "react";
import { AuthProvider } from "../store/AuthContext";

const Providers = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
