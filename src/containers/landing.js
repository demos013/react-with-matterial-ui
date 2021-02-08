import React from "react";
import { Link } from "react-router-dom";

const LandingContainer = () => {
  return (
    <>
      <h1>Do you want to see my assignment?</h1>
      <Link to="/user">
        <h1>Click here</h1>
      </Link>
    </>
  );
};

export default LandingContainer;
