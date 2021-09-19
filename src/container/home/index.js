import Header from "../../component/header/header";
import MostPopular from "../../component/product/MostPopular";
import TrendingProducts from "../../component/product/TrendingProducts";
import BannerSection from "../../component/home/BannerSection";
import DiscountBannerSection from "../../component/home/DiscountBannerSection";
import FeaturedProducts from "../../component/product/FeaturedProducts";
import FeaturesWithIconSection from "../../component/home/FeaturesWithIconSection";
import BlogSection from "../../component/home/BlogSection";
import FollowUsSection from "../../component/home/FollowUsSection";
import FooterSection from "../../component/footer/FooterSection";

const Home = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <FeaturedProducts />
      <DiscountBannerSection />
      <MostPopular />
      <FeaturesWithIconSection />
      <TrendingProducts />
      <BlogSection />
      <FollowUsSection />
      <FooterSection />
    </>
  );
};

export default Home;
