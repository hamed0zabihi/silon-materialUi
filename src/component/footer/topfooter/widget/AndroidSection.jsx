import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
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
  },
  appBtn: {
    boxAlign: "center",
    flexAlign: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    boxPack: "justify",
    flexPack: "justify",
    justifyContent: "space-between",
    marginBottom: "20px",
    borderBottom: "1px solid #d6d8d9",
    paddingBottom: "30px",
  },
  googlePlay: {
    flexBasis: "49%",
    padding: " 12px 10px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    position: "relative",
    paddingLeft: "35px",
    lineHeight: "0.8",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#ff5353",
      color: "#fff",
      "& p,& span,& .MuiSvgIcon-root": { color: "#fff" },
    },
  },
  appStore: {
    flexBasis: "49%",
    padding: " 12px 10px",
    borderRadius: "5px",
    backgroundColor: "#ff5353",
    color: "#fff",
    position: "relative",
    paddingLeft: "35px",
    lineHeight: "0.8",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#fff",
      color: "#000",
      "& p,& span,& .MuiSvgIcon-root": { color: "#ff5353" },
    },
    "& p,& span,& .MuiSvgIcon-root": { color: "#fff" },
  },
  icon: {
    color: " #ff5353",
    fontSize: " 20px",
    marginRight: "5px",
    position: "absolute",
    left: "7px",
    top: "50%",

    transform: "translateY(-50%)",
  },
  textAndriodApp: {
    marginBottom: "0",
    color: "#000",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "0.8",
    textTransform: "uppercase",
  },
  spanText: {
    display: "block",
    fontSize: "10px",
    fontWeight: "400",
    color: "#4a4a4a",
    lineHeight: " .8",
    marginBottom: "5px",
  },
});

const AndroidSection = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={12} className={classes.widget}>
      <Typography variant="h6" className={classes.title}>
        experience app on mobile
      </Typography>
      <Grid className={classes.appBtn}>
        <Link to="/#" className={classes.googlePlay}>
          <AndroidIcon className={classes.icon} />
          <Typography variant="body1" className={classes.textAndriodApp}>
            <span className={classes.spanText}>get it on</span>Goole play
          </Typography>
        </Link>
        <Link to="/#" className={classes.appStore}>
          <AppleIcon className={classes.icon} />
          <Typography variant="body1" className={classes.textAndriodApp}>
            <span className={classes.spanText}>get it on</span>App Store
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default AndroidSection;
