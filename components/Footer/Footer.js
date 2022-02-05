import { Button, Container, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import styles from "./styles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailIcon from "@material-ui/icons/Mail";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
function Footer(props) {
  const darkMode = useSelector((state) => state.darkMode.darkModeData);
  const { classes } = props;
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Grid
        container
        className={darkMode ? classes.rootFooter : classes.rootFooterDarkMode}
      >
        <Grid item xs={12} data-aos="zoom-out-right" data-aos-delay="600">
          <h2 className={classes.h2}>Mang Phong Cách Đến Với Mọi Người</h2>
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.textEnd }}>
          <Grid item md={12} data-aos="flip-left" data-aos-delay="400">
            <a
              href="http://bao.unitopcv.com/profile/vuong-quoc-bao.html"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                className={classes.buttonContact}
                variant="contained"
                color="inherit"
              >
                <AccountBoxIcon />
                Liên Hệ Tôi
              </Button>
            </a>
          </Grid>
          <Grid item md={12} data-aos="zoom-in-left" data-aos-delay="400">
            <br />
            <a
              href="https://www.facebook.com/bao.vuong.15.11"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button
                className={classes.buttonContact}
                variant="contained"
                color="inherit"
              >
                <FacebookIcon />
                facebook
              </Button>
            </a>
          </Grid>
          <Grid item md={12}>
            <br />
            <Typography
              className={classes.buttonInfo}
              variant="caption"
              color="inherit"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <PhoneIphoneIcon />
              0975.774.662
            </Typography>
          </Grid>
          <Grid item md={12}>
            <br />
            <Typography
              className={classes.buttonInfo}
              variant="caption"
              color="inherit"
              data-aos="fade-up-right"
              data-aos-delay="600"
            >
              <MailIcon />
              vuongquocbao98@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.textStart }}>
          <div>
            <h2>YOUR STYLE</h2>
            <h3 data-aos="fade-down" data-aos-delay="500">
              Mang bạn đến với những xu hướng sản phẩm thời trang mới nhất
            </h3>
            <h3 data-aos="fade-down" data-aos-delay="600">
              Hãy Đến Với Chúng Tôi !!
            </h3>
          </div>
        </Grid>
        <Grid item xs={12}>
          <h2 className={classes.h2}>YOUR STYLE</h2>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Footer);
