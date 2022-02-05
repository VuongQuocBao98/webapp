import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import Slider from "react-slick";
import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CategoryPage(props) {
  const { classes, data, category } = props;
  const settings = {
    loop: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
  };
  const items = [
    {
      name: "slide 1",
      image:
        "https://milan.com.vn/wp-content/uploads/2020/06/hinh-anh-mat-kinh-thoi-trang-10.jpg",
    },
    {
      name: "slide 2",
      image:
        "https://milan.com.vn/wp-content/uploads/2020/06/hinh-anh-mat-kinh-thoi-trang-2.jpg",
    },
    {
      name: "slide 3",
      image:
        "https://pixnio.com/free-images/2018/06/28/2018-06-28-07-07-00-1200x798.jpg",
    },
  ];
  return (
    <>
      <br />
      <Container>
        {/* SẢN PHẨM NỔI BẬT  */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2 style={{ marginBottom: "0" }}>SẢN PHẨM NỔI BẬT</h2>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <h3>okkkkk</h3>
              </CardContent>
              <CardActions>
                <Button size="small">Xem Chi Tiết</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <h3>okkkkk</h3>
              </CardContent>
              <CardActions>
                <Button size="small">Xem Chi Tiết</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <h3>okkkkk</h3>
              </CardContent>
              <CardActions>
                <Button size="small">Xem Chi Tiết</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {/* SLIDE CONTENT  */}
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>SẢN PHẨM MỚI NHẤT</h2>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* SLIDE CONTENT  */}
            <Slider {...settings}>
              {items.map((item, index) => (
                <Card key={index} variant="outlined">
                  <CardContent>
                    <img className={classes.slide} src={item.image} />
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </Grid>

          <Grid container item xs={12} md={8} spacing={1}>
            <Grid item xs={6} md={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <img
                    className={classes.imageContent}
                    src="https://file.hstatic.net/1000254381/file/kinhmer2_large.jpg"
                  />
                  <h3 style={{ marginBottom: "0" }}>
                    Mắt kính thời trang Phôton
                  </h3>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <img
                    className={classes.imageContent}
                    src="https://file.hstatic.net/1000254381/file/kinhmer2_large.jpg"
                  />
                  <h3 style={{ marginBottom: "0" }}>
                    Mắt kính thời trang Phôton
                  </h3>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <img
                    className={classes.imageContent}
                    src="https://file.hstatic.net/1000254381/file/kinhmer2_large.jpg"
                  />
                  <h3 style={{ marginBottom: "0" }}>
                    Mắt kính thời trang Phôton
                  </h3>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <img
                    className={classes.imageContent}
                    src="https://file.hstatic.net/1000254381/file/kinhmer2_large.jpg"
                  />
                  <h3 style={{ marginBottom: "0" }}>
                    Mắt kính thời trang Phôton
                  </h3>
                </CardContent>
              </Card>
            </Grid>

            {/* XEM THÊM SẢN PHẨM MỚI  */}

            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button variant="contained" color="primary">
                Xem Thêm Sản Phẩm
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default withStyles(styles)(CategoryPage);
