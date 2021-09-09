import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./card/ProductCard";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: { flexGrow: 1 },
});

const ProductArchive = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      className={classes.root}
      spacing={4}
    >
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
    </Grid>
  );
};

export default ProductArchive;
