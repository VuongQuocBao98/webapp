import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { Button, Hidden, IconButton } from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import styles from "./styles.js";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import ButtonSwitch from "../ButtonSwitch/index.js";

import { useSelector } from "react-redux";

import MobileButton from "../MobileButton/index.js";

import Link from "next/link";

// HIDDEN APPBAR WHILE SCORLL
function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

// BACK TO TOP BUTTON
function ScrollTop(props) {
  const { children, window, classes } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

withStyles(styles)(ScrollTop).propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header(props) {
  const { classes } = props;

  const darkMode = useSelector((state) => state.darkMode.darkModeData);

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={darkMode ? classes.appbar : null}>
          <Toolbar>
            {/* HOME TITLE  */}

            <Typography variant="h6" className={classes.home_title}>
              <Link href="/">
                <a className={classes.home_title_link}>Your Style</a>
              </Link>
            </Typography>

            {/* SEARCH INPUT  */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Tên sản phẩm ..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Hidden smDown>
              <Toolbar className={classes.item_menu}>
                <Link href="/mat-kinh">
                  <Button className={classes.button}>
                    <i
                      className="fas fa-glasses"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Mắt Kính
                  </Button>
                </Link>
                <Link href="/quan-ao">
                  <Button className={classes.button}>
                    <i
                      className="fas fa-tshirt"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    Quần Áo
                  </Button>
                </Link>
                <Link href="/nuoc-hoa">
                  <Button className={classes.button}>
                    <i
                      className="fas fa-pump-soap"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    Nước Hoa
                  </Button>
                </Link>
              </Toolbar>

              {/* PROFILE USER BUTTON */}
              <IconButton className={classes.icon_button}>
                <AccountCircleIcon />
              </IconButton>
            </Hidden>
            {/* BUTTON SWITCH DARK MODE */}
            <Hidden smDown>
              <ButtonSwitch />
            </Hidden>

            {/* MOBILE TOGGLE BUTTON  */}
            <Hidden mdUp>
              <MobileButton />
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Back To Top  */}
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          className={darkMode ? classes.back_to_top_dark : classes.back_to_top}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
export default withStyles(styles)(Header);
