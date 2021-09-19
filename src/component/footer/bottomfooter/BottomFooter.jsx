import React from "react";
import { Grid, Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    border: "none",
  },
  copyRight: {
    padding: " 20px 0",
    textAlign: "center",
    color: " #888",
    marginBottom: "0px",
    "& a": {
      color: "#ff5353",
    },
  },
});
const BottomFooter = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Typography variant="body1" className={classes.copyRight}>
        Copyright © 2019 <Link>themeies.com</Link> . All rights reserved.
      </Typography>
    </Grid>
  );
};

export default BottomFooter;
