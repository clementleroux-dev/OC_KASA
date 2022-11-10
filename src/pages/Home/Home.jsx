import Cards from "../../components/Cards/Cards.component";
import "../../components/Banner/Banner.component";
import ImgHomeBanner from "../../images/banner-home.png";
import Banner from "../../components/Banner/Banner.component";
import "./Home.scss";
const Home = () => {
  return (
    <main>
      <Banner
        imghome={ImgHomeBanner}
        text="Chez vous, partout et ailleurs"
        page="home"
      />
      <Cards />
    </main>
  );
};

export default Home;
//
