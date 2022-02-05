import React, { useEffect } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";

import styles from "./styles";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
function Post(props) {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);
  const darkMode = useSelector((state) => state.darkMode.darkModeData);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Grid item xs={6} md={4} lg={4}>
      <Card
        className={darkMode ? classes.rootDarkMode : classes.root}
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        <CardHeader
          title="Shrimp and Chorizo Paella"
          color="inherit"
          subheader="asdas"
          classes={{ subheader: classes.subTitle }}
        />

        <img
          className={classes.media}
          src="https://i.pinimg.com/originals/82/e4/12/82e412763fb611b0a8eaf28b58da0856.jpg"
        />
        <CardActions disableSpacing>
          <Button color="inherit">Xem Thêm</Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            color="inherit"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(Post);
