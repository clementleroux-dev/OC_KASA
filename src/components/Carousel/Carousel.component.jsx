import React, { useState } from "react";
import "./Carousel.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

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
      <MdChevronLeft
        onClick={prev}
        className={`carousel__chevron left ${length <= 1 ? "hidden" : ""}`}
      >
        Prev
      </MdChevronLeft>
      <MdChevronRight
        onClick={next}
        className={`carousel__chevron right ${length <= 1 ? "hidden" : ""}`}
        hidden={length > 1 ? "hidden" : ""}
      >
        Next
      </MdChevronRight>
    </section>
  );
};

export default Carousel;
