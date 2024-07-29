import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const PrivateRoute: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log("TOKENNN", token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
