import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 255,
  },
  media: {
    height: 331,
  },
});
const ProductCard = () => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/img/products/6.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography color="textSecondary" variant="h5" component="h5">
            Red Women Purses
          </Typography>
          <Typography color="textSecondary">adjective</Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={2} readOnly />
        </Box>
      </Card>
    </Grid>
  );
};

export default ProductCard;
