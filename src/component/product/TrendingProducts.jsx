import React from "react";
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./card/ProductCard";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  titleSection: {
    fontSize: "36px",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "80px",
    color: "#000",
    fontWeight: "700",
  },
});

const TrendingProducts = () => {
  const classes = useStyles();
  const PopularProduct = useSelector((state) => state.productsLocal);
  const filteredProductsBaseId = _(PopularProduct)
    .orderBy("id", "desc")
    .take(8)
    .value();
  return (
    <section>
      <Grid container justifyContent="center">
        <Typography variant="h3" className={classes.titleSection}>
          Trending products
        </Typography>
      </Grid>
      <Container maxWidth={false}>
        <Grid
          container
          justifyContent="center"
          className={classes.root}
          spacing={4}
        >
          {filteredProductsBaseId.map((el, index) => (
            <Grid item key={index}>
              <ProductCard {...el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default TrendingProducts;
