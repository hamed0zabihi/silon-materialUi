import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: "16px",
    marginBottom: "25PX",
    textTransform: "uppercase",
  },
  widget: {
    position: "relative",
  },
  link: {
    fontSize: "14px",
    color: "#888",
    lineHeight: "30px",
    "&:hover": { textDecoration: "none" },
  },
});
const AboutUsSection = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={2} className={classes.widget}>
      <Typography variant="h6" className={classes.title}>
        About Us
      </Typography>
      <ul>
        <li>
          <Link to="/#" className={classes.link}>
            Who we are
          </Link>
        </li>
        <li>
          <Link to="/#" className={classes.link}>
            Work with us
          </Link>
        </li>
        <li>
          <Link to="/#" className={classes.link}>
            Become a supplier
          </Link>
        </li>
        <li>
          <Link to="/#" className={classes.link}>
            Investor relations
          </Link>
        </li>
        <li>
          <Link to="/#" className={classes.link}>
            Our devices
          </Link>
        </li>
        <li>
          <Link to="/#" className={classes.link}>
            Affiliate program
          </Link>
        </li>
      </ul>
    </Grid>
  );
};

export default AboutUsSection;
