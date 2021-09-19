import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import AboutUsSection from "./aboutus/AboutUsSection";
import UseFullLinks from "./usefulllinks/UseFullLinks";
import OnlineShopping from "./onlineshopping/OnlineShopping";
import WidgetSection from "./widget/WidgetSection";

const useStyles = makeStyles({
  root: {
    padding: "80px 15px",
    borderBottom: "1px solid #d6d8d9",
    justifyContent: "center",
  },
});

const TopFooter = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={4} justifyContent="center">
        <AboutUsSection />
        <UseFullLinks />
        <OnlineShopping />
        <WidgetSection />
      </Grid>
    </Container>
  );
};

export default TopFooter;
