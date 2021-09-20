import React, { useState } from "react";
import { makeStyles, CardMedia, Card, CardActionArea } from "@material-ui/core";
import FollowUsInstagramIcon from "./FollowUsInstagramIcon";

const useStyles = makeStyles({
  root: { border: "none", boxShadow: "none" },
  media: { height: "auto" },
  link: {
    color: "#00ff00",
    "&:hover": {
      textDecoration: "none",
      color: "#ff5353",
    },
  },
  actionArea: {
    "&::before": {
      content: "''",
      position: "absolute",
      top: "30px",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 83, 83, 0.7)",
      height: " 100%",
      width: "100%",
      transition: "all 300ms ease",
      opacity: "0",
      visibility: "hidden",
    },
    "&:hover::before": { opacity: "1", visibility: "visible", top: 0 },
  },
  focusHighlight: { color: "red" },
});

const FollowUsInstagram = (props) => {
  const [showIcon, setshowIcon] = useState(false);
  const hoverCard = () => {
    setshowIcon(!showIcon);
  };

  const {
    image = "/img/instagram/1.jpg",
    title = " Were divided land his creature which have evening subdue",
  } = props;

  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onMouseOver={hoverCard}
      onMouseOut={hoverCard}
    >
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          component="img"
          className={classes.media}
          image={image}
          title={title}
        />
        <FollowUsInstagramIcon showHover={showIcon} />
      </CardActionArea>
    </Card>
  );
};

export default FollowUsInstagram;
