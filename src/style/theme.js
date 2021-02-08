import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#424242",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#121212",
    },
    textPrimary: {
      main: "#fff",
    },
  },
});

export default theme;
