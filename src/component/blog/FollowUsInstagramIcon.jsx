import React from "react";
import { makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    transition: "all 300ms ease",
    width: "100%",
    opacity: (showHover) => (showHover ? "1" : "0"),
    visibility: (showHover) => (showHover ? "visible" : "hidden"),
  },
  iconClass: {
    lineHeight: " 50px",
    textAlign: " center",
    height: "50px",
    width: "50px",
    color: "#fff",
    margin: "auto",
  },
});

const FollowUsInstagramIcon = ({ showHover }) => {
  const classes = useStyles(showHover);
  return (
    <div className={classes.root}>
      <div className={classes.iconClass}>
        <InstagramIcon fontSize="large" />
      </div>
    </div>
  );
};

export default FollowUsInstagramIcon;
