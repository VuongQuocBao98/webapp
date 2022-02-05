import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#424242",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
