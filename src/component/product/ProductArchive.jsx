import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./card/ProductCard";

const ProductArchive = () => {
  return (
    <Grid container spacing={2}>
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
