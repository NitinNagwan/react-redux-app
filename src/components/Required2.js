import React from "react";
import { useSelector } from "react-redux";
import FormPj from "./FormPj";

export default function Required2({ children }) {
  const admin = useSelector((state) => state.Users.admin);

  if (!admin) {
    return <FormPj />;
  }

  return children;
}
