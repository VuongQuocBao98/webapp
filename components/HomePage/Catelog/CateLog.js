import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles";
function CateLog(props) {
  const { classes } = props;
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <h1>ok la</h1>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default withStyles(styles)(CateLog);
