import React from "react";
import "./Banner.scss";

const Banner = ({ imghome, imgsmall, imgxl, text, page }) => {
  const dimensions = window.innerWidth;

  return (
    <section
      className={`banner ${page}`}
      style={{
        backgroundImage: `url(${
          page !== "banner-about"
            ? imghome
            : dimensions > 769
            ? imgxl
            : imgsmall
        })`,
      }}
    >
      <h1 className="banner__title">{text}</h1>
    </section>
  );
};

export default Banner;
