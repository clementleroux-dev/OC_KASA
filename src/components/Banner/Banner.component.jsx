import "./Banner.scss";

const Banner = ({ text, page }) => {
  return (
    <section className={`banner banner-${page}`}>
      <h1 className="banner__title">{text}</h1>
    </section>
  );
};

export default Banner;
