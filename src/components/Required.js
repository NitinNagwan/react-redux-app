import React from "react";
import { useSelector } from "react-redux";
import FormPj from "./FormPj";

export default function Required({ children }) {
  const isAuthenticated = useSelector((state) => state.Users.isAuthenticated);

  if (!isAuthenticated) {
    return <FormPj />;
  }

  return children;
}
