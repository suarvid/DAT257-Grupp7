import React from "react";
import { Redirect } from "react-router-dom";

export default function RedirectToBackend() {
  const renderRedirect = () => {
    return <Redirect to="/admin" />;
  };

  return <div>{renderRedirect()}</div>;
}
