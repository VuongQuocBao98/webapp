import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles";
function DetailPage(props) {
  const { classes } = props;
  return (
    <>
      <h1>Detail Page</h1>
    </>
  );
}

export default withStyles(styles)(DetailPage);
