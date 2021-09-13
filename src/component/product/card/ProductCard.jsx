import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import BottonLink from "./buttonLink/ButtonLink";

const useStyles = makeStyles({
  root: {
    // minWidth: 255,
    boxShadow: "none",
    textAlign: "center",
    position: "relative",
  },
  media: {
    height: "auto",
  },
  productName: { fontSize: "14px" },
  ratingClass: {
    color: "#ff5353",
  },
  productPrice: {
    color: "#000",
    fontSize: " 18px",
    fontWeight: "500",
    marginBottom: "0",
  },
  testt: {
    border: "none",
    width: "100%",
  },
});
const ProductCard = (props) => {
  const { title, image, price } = props;
  const classes = useStyles();
  const [showLink, setShowLink] = useState(false);
  const hoverCard = () => {
    setShowLink(!showLink);
  };
  return (
    <Card
      className={classes.root}
      onMouseOver={hoverCard}
      onMouseOut={hoverCard}
    >
      <CardMedia
        component="img"
        className={classes.media}
        image={image}
        title={title}
      />
      <BottonLink showHover={showLink} />
      <CardContent>
        <Typography
          color="textSecondary"
          variant="h5"
          component="h5"
          className={classes.productName}
        >
          {title}
        </Typography>

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="read-only"
            className={classes.ratingClass}
            value={2}
            readOnly
            size="small"
          />
          <Typography variant="body2" className={classes.productPrice}>
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
