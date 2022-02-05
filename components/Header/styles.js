import { fade } from "@material-ui/core/styles";
import { nodeName } from "jquery";

const styles = (theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000000000,
  },
  // style dark mode
  appbar: {
    backgroundColor: "#212121",
  },

  back_to_top_dark: {
    backgroundColor: "#212121",
    color: "white",

    "&:hover": {
      color: "rgb(255, 0, 255)",
    },
  },
  back_to_top: {
    backgroundColor: theme.palette.primary.light,

    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },

  // end style dark mode
  home_title: {
    fontFamily: "Original Surfer",
    flexGrow: "1",
    cursor: "pointer",
  },
  home_title_link: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      transition: "all 1.5s",
      color: "rgb(255, 0, 255)",
    },
  },
  item_menu: {
    flexGrow: "1",
  },
  icon_button: {
    color: "#FFFFFF",
  },
  // STYLE MENU BUTTON
  button: {
    fontFamily: "Original Surfer",
    color: "#FFFFFF",
    fontSize: "18px",
    textTransform: "none",
    "&:hover": {
      transition: "all 1s",
      color: "rgb(255, 0, 255)",
      textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px lightblue",
    },
  },

  // STYLE SEARCH INPUT

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  toolbar: {
    marginRight: "auto",
  },
});
export default styles;
