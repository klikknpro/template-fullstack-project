import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Protected = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
    // eslint-disable-next-line
  }, [token]);

  return <div>{children}</div>;
};

export default Protected;
