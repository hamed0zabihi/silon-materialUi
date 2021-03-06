import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translateX(-50%)",
    transition: "all 300ms ease",
    width: "100%",
    opacity: (showHover) => (showHover ? "1" : "0"),
    visibility: (showHover) => (showHover ? "visible" : "hidden"),
  },
  iconClass: {
    backgroundColor: "#fff",
    borderRadius: " 50%",
    lineHeight: " 50px",
    textAlign: " center",
    height: "50px",
    width: "50px",
    color: "#000",
    margin: "auto 1px",
    "&:hover": {
      background: "#ff5353",
    },
  },
  visibiliyAndOpacity: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translateX(-50%)",
    transition: "all 300ms ease",
    width: "100%",
    opacity: "1",
    visibility: "visible",
  },
});
const BottonLink = ({ showHover }) => {
  const classes = useStyles(showHover);
  return (
    <div className={classes.root}>
      <NavLink to="/#">
        <IconButton className={classes.iconClass}>
          <VisibilityOutlinedIcon />
        </IconButton>
      </NavLink>
      <NavLink to="/#">
        <IconButton className={classes.iconClass}>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </NavLink>
      <NavLink to="/#">
        <IconButton className={classes.iconClass}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </NavLink>
    </div>
  );
};

export default BottonLink;
