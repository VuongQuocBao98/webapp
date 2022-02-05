const styles = (theme) => ({
  root: {
    maxWidth: 345,
    "&:hover": {
      transform: "translateY(-20px)",
      transition: "all 1s",
      cursor: "pointer",
    },
    overFlow: "hidden",
  },
  subTitle: {
    color: "inherit",
  },
  rootDarkMode: {
    background: "#212121",
    color: "white",
    maxWidth: 345,
    "&:hover": {
      transform: "translateY(-20px)",
      transition: "all 1s",
      cursor: "pointer",
    },
    overFlow: "hidden",
  },
  media: {
    maxHeight: "250px",
    transition: "all 1s",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
});

export default styles;
