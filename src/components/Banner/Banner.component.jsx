import "./Banner.scss";

const Banner = ({ info, text }) => {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${info})`,
      }}
    >
      <h1 className="banner__title">{text}</h1>
    </section>
  );
};

export default Banner;
