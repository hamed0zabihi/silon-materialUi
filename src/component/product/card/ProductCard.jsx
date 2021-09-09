import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import BottonLink from "./buttonLink/ButtonLink";

const useStyles = makeStyles({
  root: {
    minWidth: 255,
    boxShadow: "none",
    textAlign: "center",
    position: "relative",
  },
  media: {
    height: 331,
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
});
const ProductCard = () => {
  const classes = useStyles();
  const [showLink, setShowLink] = useState(false);
  const hoverCard = () => {
    setShowLink(!showLink);
  };
  console.log(showLink);
  return (
    <Grid item xs={3}>
      <Card
        className={classes.root}
        onMouseOver={hoverCard}
        onMouseOut={hoverCard}
      >
        <CardMedia
          component="img"
          className={classes.media}
          image="/img/products/6.jpg"
          title="Contemplative Reptile"
        />
        <BottonLink showHover={showLink} />
        <CardContent>
          <Typography
            color="textSecondary"
            variant="h5"
            component="h5"
            justifyContent="center"
            className={classes.productName}
          >
            Red Women Purses
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
              $35
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
