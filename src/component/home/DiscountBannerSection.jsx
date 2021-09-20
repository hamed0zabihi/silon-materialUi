import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eae2d8",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    padding: "0",
  },
  tagline: {
    display: "flex",
    marginBottom: "54px",
    fontWeight: "300",
    fontSize: "1.5rem",
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContent: {
    maxWidth: "475px",
    textAlign: "center",
    float: "right",
    width: "100%",
  },
  titleBanner: {
    fontWeight: "700",
    fontSize: "58px",
    lineHeight: "70px",
    marginBottom: "33px",
    textAlign: "center",
    fontFamily: "Dancing Script, cursive",
    textTransform: "uppercase",
  },
  buttonBanner: {
    textAlign: "center",
    fullWidth: "false",
    justifyContent: "center",
    alignItems: "center",
  },
});

const DiscountBannerSection = () => {
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
            <Typography variant="h3" className={classes.titleBanner}>
              50% off
            </Typography>
            <Typography variant="h4" className={classes.tagline}>
              all women’s collection
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
          <img src="img/ban-2.png" alt="banner" />
        </Grid>
      </Grid>
    </section>
  );
};

export default DiscountBannerSection;
