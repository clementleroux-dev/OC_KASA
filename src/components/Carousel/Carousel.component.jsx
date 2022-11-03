import React, { useState } from "react";
import "./Carousel.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Carousel({ pictures }) {
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
      <MdChevronLeft onClick={prev} className="carousel__chevron left ">
        Prev
      </MdChevronLeft>
      <MdChevronRight onClick={next} className="carousel__chevron right">
        Next
      </MdChevronRight>
    </section>
  );
}

export default Carousel;
