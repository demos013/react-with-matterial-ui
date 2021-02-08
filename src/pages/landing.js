import React from "react";
import { withRouter } from "react-router-dom";
import LandingContainer from "../containers/landing";

const LandingPage = () => {
  return (
    <>
      <LandingContainer />
    </>
  );
};

export default withRouter(LandingPage);
