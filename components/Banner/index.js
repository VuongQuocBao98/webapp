import { Container } from "@material-ui/core";

import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles";

function Banner(props) {
  const { classes } = props;
  return (
    <>
      <Container className={classes.center}>
        {/* <img src="https://driver.gianhangvn.com/file/hihihi-231326f17936.jpg" /> */}
        <img
          width="100%"
          src="https://dojeannam.com/wp-content/uploads/2017/10/banner-thoi-trang-nam-cong-so-2018.jpg"
        />
      </Container>
    </>
  );
}

export default withStyles(styles)(Banner);
