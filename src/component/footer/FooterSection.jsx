import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import BottomFooter from "./bottomfooter/BottomFooter";
import TopFooter from "./topfooter/TopFooter";

const useStyles = makeStyles({
  footer: { backgroundColor: "#e9e2d8", margin: "0px", padding: "0px" },
});

const FooterSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.footer}>
      <Grid container>
        <Grid xs={12} item>
          <TopFooter />
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} item>
          <BottomFooter />
        </Grid>
      </Grid>
    </section>
  );
};

export default FooterSection;
