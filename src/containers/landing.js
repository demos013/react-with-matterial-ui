import React from "react";
import { Link } from "react-router-dom";

const LandingContainer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#fff" }}>Do you want to see my assignment?</h1>
      <Link style={{ color: "#fff" }} to="/user">
        <h1>Click here</h1>
      </Link>
    </div>
  );
};

export default LandingContainer;
