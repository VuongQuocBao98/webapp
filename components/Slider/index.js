import React, { useEffect } from "react";

import {
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Hidden,
  withStyles,
} from "@material-ui/core";
import styles from "./styles.js";
import styleCss from "./Slider.module.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";

import Aos from "aos";
import "aos/dist/aos.css";
function Slide(props) {
  const { classes } = props;
  const darkMode = useSelector((state) => state.darkMode.darkModeData);

  const settings = {
    loop: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #4",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #5",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #6",
      description: "Probably the most random thing you have ever seen!",
    },
  ];
  const [rating, setValue] = React.useState(2);
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            data-aos="flip-down"
            data-aos-delay="500"
            sm={12}
            md={8}
          >
            <Slider {...settings}>
              {items.map((item, index) => (
                <Card
                  key={index}
                  className={darkMode ? classes.darkModeBackGround : null}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="https://i.pinimg.com/originals/82/e4/12/82e412763fb611b0a8eaf28b58da0856.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color={darkMode ? "initial" : "textSecondary"}
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <Rating
                        name="rating"
                        value={rating}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        className={classes.iconFilled}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                      />
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      variant="contained"
                      className={classes.button}
                      size="small"
                    >
                      Xem Chi Tiết
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Slider>
          </Grid>
          <Hidden xsDown smDown>
            <Grid
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              item
              xs={4}
              className={classes.margin}
            >
              <div className={styleCss.card}>
                <div className={styleCss.moreInfo}>
                  <Button variant="contained">MoreInfo.....</Button>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoTNUAr8EblvyTYt5KUfuCJIJwHS6MWtQHw&usqp=CAU" />
                <div className={styleCss.info}>
                  <h2>Header Title</h2>
                  <p>ssssssssssss ssssssssssssss sssssssssss ssssssssssss l</p>
                </div>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  );
}

export default withStyles(styles)(Slide);
