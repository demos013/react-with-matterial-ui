import React from "react";
import { Link, Typography } from "@material-ui/core";

const CopyRight = () => {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        http://localhost:3000
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default CopyRight;
