import { Fragment } from "react";
import Cards from "../components/Cards/Cards.component";
import "../components/Banner/Banner.component";
import ImgHomeBanner from "../images/banner-home.png";

const Home = () => {
  return (
    <Fragment>
      <div className="hero-container">
        <h1>Chez vous, partout et ailleurs</h1>
        <img
          src={ImgHomeBanner}
          className="banner-homepage"
          alt="home-background"
        />
      </div>
      <Cards />
    </Fragment>
  );
};

export default Home;
//
