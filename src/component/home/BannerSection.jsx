import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    backgroundImage: " url(img/bg-1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    padding: "0",
  },
  tagline: {
    color: "#565656",
    display: "flex",
    marginBottom: "15px",
    fontWeight: "500",
    lineHeight: "0.8",
    letterSpacing: "2.8px",
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContent: { maxWidth: "475px", textAlign: "center", float: "right" },
  titleBanner: {
    fontWeight: "500",
    fontSize: "58px",
    lineHeight: "70px",
    marginBottom: "45px",
    textAlign: "center",
  },
  buttonBanner: {
    textAlign: "center",
    fullWidth: "false",
    justifyContent: "center",
    alignItems: "center",
  },
});

const BannerSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6}>
          <Grid className={classes.bannerContent}>
            <span className={classes.tagline}>ultimate collection</span>
            <Typography variant="h1" className={classes.titleBanner}>
              Complete Women Fashion Here
            </Typography>
            <Button
              variant="contained"
              component="button"
              color="primary"
              size="large"
              href="#contained-buttons"
              className={classes.buttonBanner}
            >
              SHOP NOW
            </Button>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <img src="img/ban-1.png" alt="banner" />
        </Grid>
      </Grid>
    </section>
  );
};

export default BannerSection;
