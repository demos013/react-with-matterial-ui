import React from "react";
import UserContainer from "../containers/user";
import { withRouter } from "react-router-dom";

const UserPage = () => {
  return (
    <>
      <UserContainer />
    </>
  );
};

export default withRouter(UserPage);
