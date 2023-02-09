import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
    
      const { user } = useAuth();

    return !user?.email ? children : <Navigate to="/" />;
};

export default PublicRoute;
