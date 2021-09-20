import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageClass: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureBox: {
    textAlign: "center",
    border: " 1px solid #ebeef0",
    // position: " relative",
    padding: "35px",
    margin: "0px",
  },
  fitIcon: {
    margin: " 0 auto 27px",
    display: "flex",
    width: "56px",
    alignItems: "center",
    justifyContent: "center",
  },
  gridStyle: {
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "15px",
    fontWeight: "500",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  tagline: {
    marginBottom: "0",
    color: " #888",
    lineHeight: " 18px",
    fontSize: "14px",
  },
});

const FeaturesWithIconSection = () => {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth={false}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.root}
          spacing={4}
        >
          <Grid item>
            <Grid className={classes.featureBox}>
              <figure className={classes.imageClass}>
                <img
                  src="img/feature-icons/1.png"
                  alt="Cash"
                  className={classes.fitIcon}
                />
              </figure>
              <Typography variant="h5" className={classes.title}>
                Money back gurantee
              </Typography>
              <Typography variant="body1" className={classes.tagline}>
                Great fill signs he evening
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid className={classes.featureBox}>
              <figure className={classes.imageClass}>
                <img
                  src="img/feature-icons/2.png"
                  alt="Cash"
                  className={classes.fitIcon}
                />
              </figure>
              <Typography variant="h5" className={classes.title}>
                Free Delivery
              </Typography>
              <Typography variant="body1" className={classes.tagline}>
                Great fill signs he evening
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid className={classes.featureBox}>
              <figure className={classes.imageClass}>
                <img
                  src="img/feature-icons/3.png"
                  alt="Cash"
                  className={classes.fitIcon}
                />
              </figure>
              <Typography variant="h5" className={classes.title}>
                Alway support
              </Typography>
              <Typography variant="body1" className={classes.tagline}>
                Great fill signs he evening
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid className={classes.featureBox}>
              <figure className={classes.imageClass}>
                <img
                  src="img/feature-icons/4.png"
                  alt="Cash"
                  className={classes.fitIcon}
                />
              </figure>
              <Typography variant="h5" className={classes.title}>
                Secure payment
              </Typography>
              <Typography variant="body1" className={classes.tagline}>
                Great fill signs he evening
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturesWithIconSection;
