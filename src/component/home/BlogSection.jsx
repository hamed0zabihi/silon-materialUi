import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import CardBlog from "../blog/CardBlog";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    border: "none",
    paddint: "50px 0px",
  },
  heading: {
    position: "relative",
    marginBottom: " 80px",
  },
  title: {
    fontSize: "36px",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 0,
    fontWeight: "700",
  },
});

const BlogSection = () => {
  const classes = useStyle();
  return (
    <section>
      <Grid className={classes.heading}>
        <Typography variant="h3" className={classes.title}>
          silon journal
        </Typography>
      </Grid>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={4}>
          {[
            { image: "/img/post/1.jpg" },
            { image: "/img/post/2.jpg" },
            { image: "/img/post/3.jpg" },
          ].map((el, index) => (
            <Grid item key={index} md={4}>
              <CardBlog {...el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default BlogSection;
