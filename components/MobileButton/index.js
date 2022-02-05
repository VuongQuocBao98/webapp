import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import styles from "./style";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ButtonSwitch from "../ButtonSwitch";
import { useSelector } from "react-redux";
function MobileButton(props) {
  const { classes } = props;
  const [state, setState] = React.useState({
    right: false,
  });

  const darkModeData = useSelector((state) => state.darkMode.darkModeData);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <i
              className={`fas fa-glasses ${
                darkModeData ? classes.icon_button : null
              }`}
            ></i>
          </ListItemIcon>
          <ListItemText primary="Mắt Kính" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i
              className={`fas fa-pump-soap ${
                darkModeData ? classes.icon_button : null
              }`}
            ></i>
          </ListItemIcon>
          <ListItemText primary="Nước Hoa" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i
              className={`fas fa-tshirt ${
                darkModeData ? classes.icon_button : null
              }`}
            ></i>
          </ListItemIcon>
          <ListItemText primary="Quần Áo" />
        </ListItem>

        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon
              className={`${darkModeData ? classes.icon_button : null}`}
            />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ButtonSwitch />
      </List>
    </div>
  );
  return (
    <>
      <IconButton
        onClick={toggleDrawer("right", true)}
        className={classes.icon_button}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        classes={{
          paperAnchorRight: darkModeData ? classes.background : null,
        }}
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
}

export default withStyles(styles)(MobileButton);
