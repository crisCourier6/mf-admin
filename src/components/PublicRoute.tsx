import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api";
import CircularProgress from "@mui/material/CircularProgress";

const PublicRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isLoggedIn = async () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) return false;

    try {
      const response = await api.get("/validate-token", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.status === 200;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isLoggedIn();
      setIsAuthenticated(authenticated);
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <CircularProgress/>; // Show a loading state until authentication check is complete
  }

  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default PublicRoute;