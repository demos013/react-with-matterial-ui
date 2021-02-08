import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Routers from "./routers";
import theme from "./style/theme";
import Store from "./store";

ReactDOM.render(
  <Store>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  </Store>,
  document.querySelector("#root")
);
