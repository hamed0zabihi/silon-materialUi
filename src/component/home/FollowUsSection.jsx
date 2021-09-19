import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import FollowUsInstagram from "../blog/FollowUsInstagram";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    border: "none",
    paddint: "50px 0px",
  },
  heading: {
    position: "relative",
    marginBottom: " 80px",
  },
  title: {
    fontSize: "36px",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 0,
    fontWeight: " 700",
  },
});
const FollowUsSection = () => {
  const classes = useStyle();

  return (
    <section>
      <Grid className={classes.heading}>
        <Typography variant="h3" className={classes.title}>
          follow US
        </Typography>
      </Grid>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={4}>
          {[
            { image: "/img/instagram/1.jpg" },
            { image: "/img/instagram/2.jpg" },
            { image: "/img/instagram/3.jpg" },
            { image: "/img/instagram/4.jpg" },
          ].map((el, index) => (
            <Grid item key={index} md={3}>
              <FollowUsInstagram {...el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default FollowUsSection;
