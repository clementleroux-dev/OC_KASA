import Cards from "../components/Cards/Cards.component";
import "../components/Banner/Banner.component";
import ImgHomeBanner from "../images/banner-home.png";
import Banner from "../components/Banner/Banner.component";

const Home = () => {
  return (
    <main>
      <Banner info={ImgHomeBanner} text="Chez vous, partout et ailleurs" />
      <Cards />
    </main>
  );
};

export default Home;
//
