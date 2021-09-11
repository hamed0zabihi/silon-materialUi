import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Header from "../../component/header/header";
import MostPopular from "../../component/product/MostPopular";
import TrendingProducts from "../../component/product/TrendingProducts";
import BannerSection from "../../component/home/BannerSection";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <BannerSection />
      <MostPopular />
      <TrendingProducts />

      <p>just test</p>
      <Typography className={classes.root} variant="h1" color="initial">
        just test
      </Typography>
    </>
  );
};

export default Home;
