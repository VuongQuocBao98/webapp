import { Container, Grid, Toolbar, withStyles } from "@material-ui/core";

import React from "react";
import Post from "../Post/Post";

import styles from "./styles";

function ListPost(props) {
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            style={{
              textAlign: "center",
              fontFamily: "Pangolin",
              fontSize: "20px",
            }}
          >
            <h2>Bài Viết Gần Đây</h2>
          </Grid>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </Container>
    </>
  );
}

export default withStyles(styles)(ListPost);
