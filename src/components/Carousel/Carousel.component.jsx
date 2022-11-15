import React, { useState } from "react";
import "./Carousel.scss";

//initialize state of current picture to 0
const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  //change state
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="carousel">
      <img
        src={pictures[current]}
        className="carousel__img"
        alt="accommodation"
      ></img>
      <svg
        onClick={prev}
        className={`carousel__chevron left ${length <= 1 ? "hidden" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        Prev
      </svg>

      <svg
        onClick={next}
        className={`carousel__chevron right ${length <= 1 ? "hidden" : ""}`}
        hidden={length > 1 ? "hidden" : ""}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        {" "}
        <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        Next
      </svg>
      <span className="carousel__count">
        {current + 1}/{length}
      </span>
    </section>
  );
};

export default Carousel;
